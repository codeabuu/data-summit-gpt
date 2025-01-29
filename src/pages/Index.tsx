import { Brain, FileSpreadsheet, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { FeatureCard } from "@/components/FeatureCard";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const demoData = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 300 },
  { month: "Mar", value: 600 },
  { month: "Apr", value: 800 },
  { month: "May", value: 500 },
];

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
            <div className="space-y-6">
              <FeatureCard
                icon={Brain}
                title="Custom GPT Assistant"
                description="Get instant answers and insights with our specialized AI assistant trained on your data."
              />
              <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-100">
                <div className="h-48 flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-md">
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <div className="space-y-2 animate-pulse w-full">
                      <div className="h-4 bg-blue-200 rounded w-3/4"></div>
                      <div className="h-4 bg-blue-100 rounded w-1/2"></div>
                      <div className="h-4 bg-blue-200 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <FeatureCard
                icon={FileText}
                title="Document Analysis"
                description="Automatically summarize and extract key information from your documents."
              />
              <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-100">
                <div className="h-48 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-md p-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-blue-200"></div>
                      <div className="h-4 bg-blue-100 rounded w-3/4"></div>
                    </div>
                    <div className="h-24 bg-white/50 rounded-md border border-blue-100 p-2">
                      <div className="space-y-2">
                        <div className="h-2 bg-blue-100 rounded w-full"></div>
                        <div className="h-2 bg-blue-100 rounded w-5/6"></div>
                        <div className="h-2 bg-blue-100 rounded w-4/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <FeatureCard
                icon={FileSpreadsheet}
                title="Data Visualization"
                description="Generate beautiful, interactive charts from your spreadsheets and datasets."
              />
              <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-100">
                <ChartContainer className="h-48" config={{}}>
                  <BarChart data={demoData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip />
                    <Bar
                      dataKey="value"
                      fill="url(#colorGradient)"
                      radius={[4, 4, 0, 0]}
                    />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#4f46e5" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ChartContainer>
              </div>
            </div>
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