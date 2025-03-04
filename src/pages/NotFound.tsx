
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import NeonButton from "@/components/NeonButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-dark-100">
      <div className="text-center px-6">
        <h1 className="text-6xl md:text-8xl font-display font-bold metal-text mb-4">404</h1>
        <p className="text-xl text-white/70 mb-8">Page not found</p>
        <div className="mt-6">
          <NeonButton onClick={() => window.location.href = "/"}>
            Return to Home
          </NeonButton>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
