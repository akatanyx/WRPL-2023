import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Merchant } from "@/pages/interface";

export function useMerchant(): Merchant | null {
  const { data: session, status } = useSession();
  const [merchant, setMerchant] = useState<Merchant | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (status === "authenticated" && session?.user) {
        try {
          const result = await fetch(`/api/get?type=merchant&email=${session.user.email}`);
          if (result.ok) {
            const fetchedMerchant: Merchant = await result.json();
            setMerchant(fetchedMerchant);
          } else {
            console.error("Error fetching merchant data:", result.statusText);
          }
        } catch (error) {
          console.error("Error fetching merchant data:", error);
        }
      }
    };

    fetchData();
  }, [status, session]);

  return merchant;
}