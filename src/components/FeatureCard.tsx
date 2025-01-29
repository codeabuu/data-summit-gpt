import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-orange-400 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};