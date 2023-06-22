import Content_landing_driver from '@/components/Content_landing_driver';
import Navbar_driver from '@/components/Driver/Navbar_driver';
import { connectToDatabase } from '../mongodb';
import { getSession } from 'next-auth/react';

export default function LandingDriverPage(){
  return (
    <div>
      <Navbar_driver />
      <Content_landing_driver />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session?.user) {
    // User is not authenticated, redirect to login page or show an error
    return {
      redirect: {
        destination: "/customer/login",
        permanent: false,
      },
    };
  } else {
    // User is authenticated, check their roles in the database
    const db = await connectToDatabase();
    const collection = db.collection("users");
    const user = await collection.findOne({ email: session.user.email });

    if (!user || !user.roles.includes("driver")) {
      // User doesn't have the driver role, redirect to signup driver page
      return {
        redirect: {
          destination: "/signup_driver",
          permanent: false,
        },
      };
    }

    // User has the driver role, continue rendering the landing driver page
    return {
      props: {},
    };
  }
}
