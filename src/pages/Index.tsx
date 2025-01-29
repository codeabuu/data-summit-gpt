import { Brain, FileSpreadsheet, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { FeatureCard } from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Your AI-Powered Data Assistant
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your data into insights with our advanced AI. Analyze documents, generate charts, and interact with your datasets effortlessly.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg px-8 py-6 h-auto hover:from-blue-700 hover:to-indigo-700">
              Get Started Free
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6 h-auto">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              title="Custom GPT Assistant"
              description="Get instant answers and insights with our specialized AI assistant trained on your data."
            />
            <FeatureCard
              icon={FileText}
              title="Document Analysis"
              description="Automatically summarize and extract key information from your documents."
            />
            <FeatureCard
              icon={FileSpreadsheet}
              title="Data Visualization"
              description="Generate beautiful, interactive charts from your spreadsheets and datasets."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of users who are already leveraging our AI tools.</p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto">
            Start Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;