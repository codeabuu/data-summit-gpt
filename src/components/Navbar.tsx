import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-400 bg-clip-text text-transparent transform hover:scale-105 transition-all duration-300"
          >
            DataAI
          </Link>
          
          <div className="hidden md:flex items-center space-x-12">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-pink-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-pink-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-600 after:to-orange-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Pricing</a>
            <a href="#about" className="text-gray-600 hover:text-orange-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-orange-400 after:to-purple-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">About</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="hidden md:inline-flex hover:text-purple-600 transition-all duration-300"
            >
              Log in
            </Button>
            <Button 
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-400 text-white hover:opacity-90 transform hover:scale-105 transition-all duration-300"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};