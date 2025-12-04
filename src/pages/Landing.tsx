import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Package, 
  Warehouse, 
  ShoppingCart, 
  FileText, 
  BarChart3, 
  Receipt, 
  TrendingUp, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Layers,
  Calculator,
  BookOpen,
  Users,
  Activity,
  Star,
  Rocket,
  Globe,
  Award,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Home,
  CreditCard
} from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSignIn = () => {
    navigate('/auth?view=login');
  };

  const handleSupport = () => {
    navigate('/auth?view=support');
  };

  const handleSignUp = () => {
    navigate('/auth?view=signup');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Ultra-Premium Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic gradient mesh */}
        <div 
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-primary/40 via-blue-500/30 to-purple-500/20 rounded-full blur-[120px] animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-orange-500/30 via-pink-500/20 to-purple-500/20 rounded-full blur-[120px] animate-pulse"
          style={{
            animationDelay: '1.5s',
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)`,
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015 + scrollY * 0.3}px)`,
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
        
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.1}px)`
          }}
        />
        
        {/* Premium floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary/30 to-blue-400/20"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `premiumFloat ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow: `0 0 ${Math.random() * 20 + 10}px rgba(59, 130, 246, 0.5)`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes premiumFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.3; 
          }
          33% { 
            transform: translateY(-30px) translateX(15px) scale(1.2); 
            opacity: 0.7; 
          }
          66% { 
            transform: translateY(-15px) translateX(-10px) scale(0.9); 
            opacity: 0.5; 
          }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.2); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.3); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #ffffff 0%, #60a5fa 25%, #a78bfa 50%, #60a5fa 75%, #ffffff 100%);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
        .gradient-bg {
          background: linear-gradient(-45deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b);
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
        }
        .glass-card {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
        .premium-glow {
          position: relative;
        }
        .premium-glow::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
          background-size: 200% 200%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: gradientShift 3s ease infinite;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .premium-glow:hover::before {
          opacity: 1;
        }
      `}</style>

      {/* Ultra-Premium Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-900/40 backdrop-blur-2xl backdrop-saturate-150 shadow-2xl shadow-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Premium Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/60 rounded-2xl blur-2xl group-hover:bg-primary/80 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-primary via-blue-500 to-purple-600 p-3 rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Warehouse className="h-7 w-7 text-white drop-shadow-lg" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent tracking-tight">
                  Inventory Migrator
                </span>
                <div className="text-[10px] text-primary/80 font-bold -mt-1 tracking-wider uppercase">
                  Smart Inventory
                </div>
              </div>
            </div>

            {/* Premium Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {['Features', 'How It Works', 'Support'].map((item, idx) => (
                <a 
                  key={idx}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={item === 'Support' ? handleSupport : undefined}
                  className="text-white/80 hover:text-white transition-all duration-300 font-semibold relative group cursor-pointer"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Premium Auth Buttons */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={handleSignIn}
                className="text-white/90 hover:text-white hover:bg-white/10 border-0 font-semibold px-6 h-11 transition-all duration-300 hover:scale-105"
              >
                Login
              </Button>
              <Button
                onClick={handleSignUp}
                className="relative overflow-hidden bg-gradient-to-r from-primary via-blue-500 to-purple-600 hover:from-primary/90 hover:via-blue-600 hover:to-purple-700 text-white border-0 shadow-2xl hover:shadow-primary/50 font-bold px-8 h-11 transition-all duration-300 hover:scale-105 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Ultra-Premium Hero Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content - Premium Typography */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card border border-primary/30 group hover:scale-105 transition-all duration-300">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-sm font-bold text-primary tracking-wide">Complete Inventory Solution</span>
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Streamline Your
              <span className="block shimmer-text mt-2">Inventory Management</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl font-light">
              Powerful, intuitive inventory management system with <span className="text-primary font-semibold">GST compliance</span>, multi-company support, and comprehensive reporting.
            </p>

            {/* Premium Feature Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { icon: Package, label: 'Smart Stock', sublabel: 'Management', color: 'from-blue-500 to-cyan-500' },
                { icon: Receipt, label: 'GST Compliant', sublabel: 'Invoicing', color: 'from-green-500 to-emerald-500' },
                { icon: BarChart3, label: 'Real-time', sublabel: 'Analytics', color: 'from-purple-500 to-pink-500' }
              ].map((feature, idx) => (
                <div 
                  key={idx}
                  className="group glass-card rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                >
                  <div className={`bg-gradient-to-br ${feature.color} p-4 rounded-xl mb-4 w-fit group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-white font-bold text-sm">{feature.label}</div>
                  <div className="text-white/60 text-xs">{feature.sublabel}</div>
                </div>
              ))}
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <Button
                onClick={handleSupport}
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-primary via-blue-500 to-purple-600 hover:from-primary/90 hover:via-blue-600 hover:to-purple-700 text-white text-lg px-10 py-8 h-auto shadow-2xl hover:shadow-primary/50 transition-all duration-500 font-bold hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Support
                  <Rocket className="h-6 w-6 group-hover:translate-x-2 group-hover:-translate-y-1 transition-all" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
              </Button>
              <Button
                onClick={handleSupport}
                size="lg"
                variant="outline"
                className="border-2 border-white/30 hover:border-primary/60 bg-white/5 hover:bg-white/15 text-white text-lg px-10 py-8 h-auto backdrop-blur-xl font-bold hover:scale-105 transition-all duration-500"
              >
                Schedule Demo
              </Button>
            </div>

            {/* Premium Trust Indicators */}
            <div className="flex items-center gap-8 pt-6">
              {[
                { icon: CheckCircle, text: 'No Credit Card Required' },
                { icon: Award, text: 'Free Setup Support' },
                { icon: Globe, text: '24/7 Available' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 group">
                  <item.icon className="h-5 w-5 text-green-400 group-hover:scale-125 transition-transform" />
                  <span className="text-white/70 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Ultra-Premium Dashboard Preview */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-3xl opacity-50 animate-pulse"></div>
            
            <div className="relative glass-card rounded-3xl p-10 border border-white/20 shadow-2xl premium-glow">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-black text-white flex items-center gap-3">
                  <div className="bg-gradient-to-br from-primary to-purple-500 p-2 rounded-xl">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  Inventory Dashboard
                </h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
              </div>
              
              {/* Premium Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="glass-card rounded-2xl p-6 border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-blue-600/10 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-black text-blue-400 mb-2">1,247</div>
                  <div className="text-xs text-white/70 font-semibold uppercase tracking-wider">Total Products</div>
                </div>
                <div className="glass-card rounded-2xl p-6 border border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-orange-600/10 hover:scale-105 transition-all duration-300 relative">
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                  <div className="text-4xl font-black text-orange-400 mb-2">23</div>
                  <div className="text-xs text-white/70 font-semibold uppercase tracking-wider">Low Stock Items</div>
                </div>
              </div>

              {/* Premium Status Cards */}
              <div className="space-y-3 mb-8">
                {[
                  { icon: CheckCircle, label: 'Inventory Sync', status: 'Active', color: 'green' },
                  { icon: ShoppingCart, label: 'Pending Orders', status: '8 Orders', color: 'orange' }
                ].map((item, idx) => (
                  <div key={idx} className="glass-card rounded-xl p-4 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 bg-${item.color}-500 rounded-full animate-pulse`}></div>
                        <item.icon className={`h-5 w-5 text-${item.color}-400`} />
                        <span className="text-white font-semibold text-sm">{item.label}</span>
                      </div>
                      <span className={`text-${item.color}-400 text-xs font-bold`}>{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Premium Recent Activity */}
              <div>
                <h4 className="text-white font-bold mb-4 text-sm flex items-center gap-2 uppercase tracking-wider">
                  <FileText className="h-4 w-4 text-primary" />
                  Recent Transactions
                </h4>
                <div className="space-y-2">
                  {[
                    { id: 'PO #PO-2024-001', amount: '₹45,280' },
                    { id: 'Invoice #INV-2024-156', amount: '₹12,450' }
                  ].map((transaction, idx) => (
                    <div key={idx} className="glass-card rounded-lg p-3 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 text-sm font-medium">{transaction.id}</span>
                        <span className="text-white font-bold text-sm">{transaction.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Premium Features Section */}
      <section id="features" className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-20">
          <Button
            variant="outline"
            className="glass-card border-primary/30 text-primary hover:bg-primary/10 mb-8 px-6 py-2 font-bold"
          >
            <Zap className="h-5 w-5 mr-2" />
            Powerful Features
          </Button>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
              Manage Your Inventory
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
            Comprehensive inventory management solution with advanced features for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Warehouse, title: 'Smart Inventory Management', desc: 'Track products, stock levels, and manage multi-location inventory with real-time updates.', color: 'from-blue-500 to-cyan-500' },
            { icon: ShoppingCart, title: 'Purchase Order Management', desc: 'Create, track, and manage purchase orders with supplier integration.', color: 'from-green-500 to-emerald-500' },
            { icon: Receipt, title: 'Sales & Purchase Invoices', desc: 'Generate GST-compliant invoices with automatic tax calculations.', color: 'from-purple-500 to-pink-500' },
            { icon: Calculator, title: 'GST Compliance & Tracking', desc: 'Automated GST calculations, tax tracking, and comprehensive reports.', color: 'from-orange-500 to-red-500' },
            { icon: BarChart3, title: 'Advanced Financial Reports', desc: 'Profit & Loss, Trial Balance, Sales Reports with detailed analytics.', color: 'from-indigo-500 to-purple-500' },
            { icon: BookOpen, title: 'Ledger & Accounting', desc: 'Complete ledger management with income, expense tracking.', color: 'from-teal-500 to-cyan-500' },
            { icon: Users, title: 'Supplier & Customer Management', desc: 'Manage suppliers, customers with complete contact information.', color: 'from-pink-500 to-rose-500' },
            { icon: FileText, title: 'Invoice Aging & Payments', desc: 'Track due invoices, payment status, and manage receivables.', color: 'from-yellow-500 to-orange-500' },
            { icon: Shield, title: 'Multi-Company Support', desc: 'Manage multiple companies from a single account.', color: 'from-blue-600 to-indigo-600' }
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative glass-card rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20 premium-glow"
            >
              <div className={`bg-gradient-to-br ${feature.color} p-5 rounded-2xl mb-6 w-fit group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-white font-black text-xl mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ultra-Premium How It Works */}
      <section id="how-it-works" className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">
            Get Started in
            <span className="block bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
              Three Simple Steps
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { step: '01', title: 'Sign Up', desc: 'Create your account and set up your company profile.', icon: Users },
            { step: '02', title: 'Import Inventory', desc: 'Import your existing inventory from Excel, CSV, or JSON files.', icon: Layers },
            { step: '03', title: 'Start Managing', desc: 'Begin creating invoices, managing stock, and generating reports.', icon: CheckCircle }
          ].map((step, index) => (
            <div key={index} className="relative group">
              <div className="glass-card rounded-3xl p-10 border border-white/10 hover:border-primary/50 transition-all duration-500 text-center hover:scale-105 hover:shadow-2xl premium-glow">
                <div className="text-8xl font-black text-primary/10 mb-6">{step.step}</div>
                <div className={`bg-gradient-to-br ${index === 0 ? 'from-blue-500 to-cyan-500' : index === 1 ? 'from-green-500 to-emerald-500' : 'from-purple-500 to-pink-500'} p-6 rounded-3xl w-20 h-20 mx-auto mb-8 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.desc}</p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                  <div className="bg-gradient-to-r from-primary to-purple-500 p-3 rounded-full shadow-2xl">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Ultra-Premium CTA Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="relative glass-card rounded-[3rem] p-16 md:p-20 border border-primary/30 overflow-hidden premium-glow">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">
              Ready to Transform Your
              <span className="block shimmer-text mt-2">Inventory Management?</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto font-light">
              Join thousands of businesses using Inventory Migrator to streamline their inventory operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={handleSupport}
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-primary via-blue-500 to-purple-600 hover:from-primary/90 hover:via-blue-600 hover:to-purple-700 text-white text-lg px-12 py-9 h-auto shadow-2xl hover:shadow-primary/50 transition-all duration-500 font-black hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Started Today
                  <Rocket className="h-6 w-6 group-hover:translate-x-2 group-hover:-translate-y-1 transition-all" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
              </Button>
              <Button
                onClick={handleSignIn}
                size="lg"
                variant="outline"
                className="border-2 border-white/30 hover:border-primary/60 bg-white/10 hover:bg-white/20 text-white text-lg px-12 py-9 h-auto backdrop-blur-xl font-black hover:scale-105 transition-all duration-500"
              >
                Login to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Premium Footer - Matching Second Image Style */}
      <footer className="relative z-10 border-t border-white/10 bg-slate-900/60 backdrop-blur-2xl py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Branding */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-primary via-blue-500 to-purple-600 p-2.5 rounded-xl shadow-lg">
                  <Warehouse className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-black bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                    Inventory Migrator
                  </span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Complete inventory management platform with GST compliance, multi-company support, and real-time analytics.
              </p>
              {/* Social Media Icons */}
              <div className="flex items-center gap-3 pt-2">
                {[
                  { icon: Facebook, name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61578900585501' },
                  { icon: Twitter, name: 'Twitter', href: 'https://x.com/IndiaRetailPro' },
                  { icon: Instagram, name: 'Instagram', href: 'https://www.instagram.com/indiaretailpro/' },
                  { icon: Youtube, name: 'YouTube', href: 'https://www.youtube.com/@RetailMARKETINGPRO' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <social.icon className="h-5 w-5 text-white/70 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', icon: Home, href: '/' },
                  { name: 'Features', href: '#features' },
                  { name: 'Pricing', href: '#pricing' },
                  { name: 'Support', onClick: handleSupport },
                  { name: 'Login', onClick: handleSignIn }
                ].map((link, idx) => (
                  <li key={idx}>
                    {link.onClick ? (
                      <button
                        onClick={link.onClick}
                        className="text-white/70 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                      >
                        {link.icon && <link.icon className="h-4 w-4" />}
                        <span>{link.name}</span>
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                      >
                        {link.icon && <link.icon className="h-4 w-4" />}
                        <span>{link.name}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Features */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Features</h3>
              <ul className="space-y-3">
                {[
                  'Mobile POS Integration',
                  'Multi-Location Management',
                  'Real-time Analytics',
                  'Inventory Tracking',
                  'Transaction Processing'
                ].map((feature, idx) => (
                  <li key={idx}>
                    <a
                      href="#features"
                      className="text-white/70 hover:text-primary transition-colors duration-200"
                    >
                      {feature}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <a href="mailto:retailmarketingpro1.0@gmail.com" className="text-white/70 hover:text-primary transition-colors duration-200">
                    retailmarketingpro1.0@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <a href="tel:+918910921128" className="text-white/70 hover:text-primary transition-colors duration-200">
                    +91 8910921128
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white/70">India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section: Copyright and Policies */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/60 text-sm">
              © 2025 Inventory Migrator. All rights reserved.
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              <a href="/policy" className="text-white/60 hover:text-primary text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/60 hover:text-primary text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/disclaimer" className="text-white/60 hover:text-primary text-sm transition-colors duration-200">
                Disclaimer
              </a>
              <a href="/refund-policy" className="text-white/60 hover:text-primary text-sm transition-colors duration-200">
                Refund Policy
              </a>
              <a href="/cookie-notice" className="text-white/60 hover:text-primary text-sm transition-colors duration-200">
                Cookie Notice
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
