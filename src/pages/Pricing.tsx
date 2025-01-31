import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-pink-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. All plans include our core features.
            </p>
          </div>

          {/* Pricing Cards */}
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
      </div>
    </div>
  );
};

export default PricingPage;