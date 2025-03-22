
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold mb-6">404</h1>
        <p className="text-2xl font-medium mb-4">Page not found</p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            as={Link} 
            to="/" 
            className="w-full sm:w-auto"
            leftIcon={<Home size={16} />}
          >
            Go Home
          </Button>
          <Button 
            as={Link} 
            to="/" 
            variant="outline"
            className="w-full sm:w-auto"
            leftIcon={<ArrowLeft size={16} />}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
