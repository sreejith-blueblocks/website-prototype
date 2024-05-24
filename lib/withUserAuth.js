import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../contexts/UserContext";
import Cookies from "js-cookie";
import LoadingScreen from "@/components/loadingScreen/loadingScreen";

export default function withUserAuth(Component, allowedRoles) {
  return (props) => {
    const { user } = useContext(UserContext);
    const router = useRouter();
    const token = Cookies.get("token");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Check if the user is logged in
      if (!token) {
        console.log("first test");
        router.push("/login");
        return;
      }

      // Wait for the user context to be populated
      if (user !== undefined) {
        if (user?.IsAdmin !== "False") {
          console.log("test 2");
          router.push("/login");
        } else {
          setLoading(false);
        }
      }
    }, [user, token, router]);

    if (loading) {
      // Render a loading state or null while checking authentication
      return <LoadingScreen />;
    }

    // User is authenticated and has the required role
    return <Component {...props} />;
  };
}
