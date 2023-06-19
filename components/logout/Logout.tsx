import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function LogoutButton() {
    const { data: session } = useSession();
    const router = useRouter();
  
    const handleLogout = async () => {
      // Sign out the user
      await signOut({ redirect: false });
  
      // Redirect to the login page
      router.push("/customer/login");
    };
  
    return (
      <button onClick={handleLogout}>
        <img src="/m_profil_logout.svg" alt="" />
      </button>
    );
  }
  
  export default LogoutButton;