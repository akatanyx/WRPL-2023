import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const IndexPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && session?.user?.name) {
      router.push("/customer/hero");
    } else if (status === "loading") {
      // do nothing
    } else {
      router.push("/customer/landing");
    }
  }, [session, status, router]);

  return null;
};

export default IndexPage;





