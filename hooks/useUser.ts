import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { User } from "../pages/interface"

export function useUser(): User | null {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (status === "authenticated" && session?.user) {
        try {
          const result = await fetch(`/api/get?type=user&email=${session.user.email}`);
          if (result.ok) {
            const fetchedUser:User = await result.json();
            setUser(fetchedUser);
          } else {
            console.error("Error fetching user data:", result.statusText);
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
