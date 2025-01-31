import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NavbarProps {
  onPricingClick?: () => void;
}

export const Navbar = ({ onPricingClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              DataSummitGPT
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Features</Link>
            <button onClick={onPricingClick} className="text-gray-600 hover:text-gray-900">Pricing</button>
            <Link to="/" className="text-gray-600 hover:text-gray-900">Solutions</Link>
            <Button variant="outline" className="mr-2">Sign In</Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90">Sign Up</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Features</Link>
              <button 
                onClick={() => {
                  onPricingClick?.();
                  setIsOpen(false);
                }} 
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Pricing
              </button>
              <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Solutions</Link>
              <Button variant="outline" className="w-full mb-2">Sign In</Button>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90">Sign Up</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};