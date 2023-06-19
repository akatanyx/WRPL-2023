import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ObjectId } from "mongodb";

interface User {
  _id: ObjectId;
  name: string;
  email: string;
  phoneNumber: string;
  imgURL: string;
  password: string;
  address: string;
  roles: string[];
  // Include other fields as needed
}

export function useUser(): User | null {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (status === "authenticated" && session?.user) {
        try {
          const res = await fetch(`/api/getuser?id=${session.user.email}`);
          if (res.ok) {
            const fetchedUser:User = await res.json();
            setUser(fetchedUser);
          } else {
            console.error("Error fetching user data:", res.statusText);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } 
    };

    fetchData();
  }, [status, session]);

  return user;
}
