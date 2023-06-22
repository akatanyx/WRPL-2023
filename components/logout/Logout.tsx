import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function LogoutButton() {
    const { data: session } = useSession();
    const router = useRouter();
  
    const handleLogout = async () => {
      // Sign out the user
      await signOut({ redirect: false });
  
      // Redirect to the landing page
      router.push("/customer");
    };
  
    return (
      <button onClick={handleLogout}>
        <img src="/m_profil_logout.svg" alt="" />
      </button>
    );
  }
  
  export default LogoutButton;