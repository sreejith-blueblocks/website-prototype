import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../contexts/UserContext";
import Cookies from "js-cookie";
import LoadingScreen from "@/components/loadingScreen/loadingScreen";

export default function withAuth(Component, allowedRoles) {
  return (props) => {
    const { user } = useContext(UserContext);
    const router = useRouter();
    const token = Cookies.get("token");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Check if the user is logged in
      if (!token) {
    
        router.push("/adminlogin");
        return;
      }

      // Wait for the user context to be populated
      if (user !== undefined) {
        if (user?.IsAdmin !== "True") {
          router.push("/adminlogin");
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
