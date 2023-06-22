import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { CartItem } from "@/pages/interface";

export function useCartItem(): CartItem[] | null {
  const { data: session } = useSession();
  const [cartItems, setCartItems] = useState<CartItem[] | null>(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`/api/getcart?email=${session?.user.email}`);
        if (response.ok) {
          const cartData: CartItem[] = await response.json();
          setCartItems(cartData);
        } else {
          console.error("Error fetching cart items:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    if (session?.user?.email) {
      fetchCartItems();
    }
  }, [session]);

  return cartItems;
}
