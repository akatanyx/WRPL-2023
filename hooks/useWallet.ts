import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Wallet } from "@/pages/interface";

export function useWallet(): Wallet | null {
  const { data: session } = useSession();
  const [wallet, setWallet] = useState<Wallet | null>(null);

  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        const response = await fetch(`/api/get?type=wallet&email=${session?.user.email}`);
        if (response.ok) {
          const walletData: Wallet = await response.json();
          setWallet(walletData);
        } else {
          console.error("Error fetching wallet data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching wallet data:", error);
      }
    };

    if (session?.user?.email) {
      fetchWalletData();
    }
  }, [session]);

  return wallet;
}