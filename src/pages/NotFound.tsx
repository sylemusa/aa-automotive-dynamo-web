
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center p-8">
        <div className="w-24 h-24 bg-aa-dark-gray rounded-full flex items-center justify-center mx-auto mb-8 text-aa-turquoise animate-pulse-glow">
          <span className="text-4xl font-bold">404</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-white">Seite nicht gefunden</h1>
        <p className="text-xl text-gray-400 mb-8">
          Die von Ihnen gesuchte Seite existiert leider nicht.
        </p>
        <Link
          to="/"
          className="btn-primary"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
