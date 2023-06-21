import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Driver } from "@/pages/interface";

export function useDriver(): Driver | null {
  const { data: session, status } = useSession();
  const [driver, setDriver] = useState<Driver | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (status === "authenticated" && session?.user) {
        try {
          const result = await fetch(`/api/get?type=driver&email=${session.user.email}`);
          if (result.ok) {
            const fetchedDriver: Driver = await result.json();
            setDriver(fetchedDriver);
          } else {
            console.error("Error fetching driver data:", result.statusText);
          }
        } catch (error) {
          console.error("Error fetching driver data:", error);
        }
      }
    };

    fetchData();
  }, [status, session]);

  return driver;
}
