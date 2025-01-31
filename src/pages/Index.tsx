import { Brain, FileSpreadsheet, FileText, ChartBar, Users, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { FeatureCard } from "@/components/FeatureCard";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const demoData = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 300 },
  { month: "Mar", value: 600 },
  { month: "Apr", value: 800 },
  { month: "May", value: 500 },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Data Scientist",
    company: "TechCorp",
    content: "This tool has revolutionized how we analyze our data. The GPT integration is phenomenal!"
  },
  {
    name: "Michael Chen",
    role: "Business Analyst",
    company: "Growth Inc",
    content: "The document analysis feature saves us hours of work. Absolutely worth every penny."
  },
  {
    name: "Emma Davis",
    role: "Research Lead",
    company: "Innovation Labs",
    content: "The chart generation capabilities are unmatched. It's transformed our reporting process."
  }
];

const Index = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-pink-50">
      <Navbar onPricingClick={scrollToPricing} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-400 bg-clip-text text-transparent leading-tight">
              Your AI-Powered Data Assistant
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your data into insights with our advanced AI. Analyze documents, generate charts, and interact with your datasets effortlessly.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-400 text-white text-lg px-8 py-6 h-auto hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full md:w-auto">
                Get Started Free
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 h-auto border-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transform hover:scale-105 transition-all duration-300 w-full md:w-auto">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-8">
              <FeatureCard
                icon={Brain}
                title="Custom GPT Assistant"
                description="Get instant answers and insights with our specialized AI assistant trained on your data."
              />
              <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
                <div className="h-48 flex items-center justify-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg overflow-hidden">
                  <div className="w-full space-y-3 p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0"></div>
                      <div className="flex-1 space-y-2 animate-pulse">
                        <div className="h-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 justify-end">
                      <div className="flex-1 space-y-2 animate-pulse">
                        <div className="h-4 bg-gradient-to-r from-orange-200 to-pink-200 rounded w-5/6 ml-auto"></div>
                        <div className="h-4 bg-gradient-to-r from-pink-100 to-orange-100 rounded w-2/3 ml-auto"></div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 flex-shrink-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <FeatureCard
                icon={FileText}
                title="Document Analysis"
                description="Automatically summarize and extract key information from your documents."
              />
              <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
                <div className="h-48 bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded bg-gradient-to-r from-orange-300 to-pink-300"></div>
                      <div className="h-4 bg-gradient-to-r from-pink-200 to-orange-200 rounded w-3/4 animate-pulse"></div>
                    </div>
                    <div className="h-28 bg-white/50 rounded-lg border border-pink-100 p-3">
                      <div className="space-y-2">
                        <div className="h-2 bg-gradient-to-r from-orange-200 to-pink-200 rounded w-full animate-pulse"></div>
                        <div className="h-2 bg-gradient-to-r from-pink-200 to-orange-200 rounded w-5/6 animate-pulse"></div>
                        <div className="h-2 bg-gradient-to-r from-orange-200 to-pink-200 rounded w-4/6 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <FeatureCard
                icon={FileSpreadsheet}
                title="Data Visualization"
                description="Generate beautiful, interactive charts from your spreadsheets and datasets."
              />
              <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
                <ChartContainer className="h-48" config={{}}>
                  <BarChart data={demoData}>
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6B7280' }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6B7280' }}
                    />
                    <ChartTooltip />
                    <Bar
                      dataKey="value"
                      fill="url(#colorGradient)"
                      radius={[4, 4, 0, 0]}
                      className="animate-float"
                    />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ChartContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">10,000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text text-transparent mb-2">1M+</div>
              <div className="text-gray-600">Documents Analyzed</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent mb-2">500K+</div>
              <div className="text-gray-600">Charts Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. All plans include our core features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-5xl font-extrabold">$29</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <p className="text-gray-500">Perfect for small teams</p>
              </div>
              <ul className="space-y-4 mb-8">
                {['5,000 API calls/month', '10 GB storage', 'Basic analytics', 'Email support'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-600">
                    <Check className="h-5 w-5 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90">
                Get Started
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-b from-purple-600 to-pink-600 p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-orange-400 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-5xl font-extrabold text-white">$99</span>
                  <span className="text-white/90 ml-1">/month</span>
                </div>
                <p className="text-white/90">For growing businesses</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  '50,000 API calls/month',
                  '100 GB storage',
                  'Advanced analytics',
                  'Priority support',
                  'Custom integrations',
                  'Team collaboration'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white">
                    <Check className="h-5 w-5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-white text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gray-100">
                Get Started
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-5xl font-extrabold">Custom</span>
                </div>
                <p className="text-gray-500">For large organizations</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Unlimited API calls',
                  'Unlimited storage',
                  'Custom analytics',
                  '24/7 phone support',
                  'SLA guarantee',
                  'Dedicated account manager'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-600">
                    <Check className="h-5 w-5 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90">
                Contact Sales
              </Button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "Can I switch plans later?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, PayPal, and wire transfers for enterprise customers."
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes, all plans come with a 14-day free trial. No credit card required."
                }
              ].map((faq) => (
                <div key={faq.q} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-400 opacity-90"></div>
          <div className="relative py-16 px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Data?</h2>
            <p className="text-xl mb-8 text-white opacity-90">Join thousands of users who are already leveraging our AI tools.</p>
            <Button className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-400 hover:bg-gray-100 text-lg px-8 py-6 h-auto transform hover:scale-105 transition-all duration-300">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
