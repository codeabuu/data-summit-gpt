import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-400 bg-clip-text text-transparent">
            DataAI
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-pink-600 transition-colors">Pricing</a>
            <a href="#about" className="text-gray-600 hover:text-orange-400 transition-colors">About</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex hover:text-purple-600">
              Log in
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-400 text-white hover:opacity-90">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};