import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Database, Eye, Ban, Lock, Settings, Mail, Globe } from 'lucide-react';

const CookieNotice = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-primary via-blue-500 to-purple-600 p-3 rounded-xl">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-black text-white">Cookie Notice</h1>
          </div>
          <p className="text-white/70 text-lg">
            Last Updated: 2025.12.01
          </p>
        </div>

        {/* Content */}
        <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-8 md:p-12 space-y-8 text-white/90">
          {/* Introduction */}
          <section className="space-y-4">
            <p className="leading-relaxed">
              This Cookie Notice explains how Inventory by RetailMarketingPro ("we", "us", "our") uses cookies and similar technologies on our website inventory.retailmarketingpro.in.
            </p>
          </section>

          <div className="border-t border-white/10 pt-8"></div>

          {/* Section 1: What Are Cookies? */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">1. What Are Cookies?</h2>
            </div>
            <div className="pl-11">
              <p className="leading-relaxed">
                Cookies are small text files stored on your device when you visit a website. They help improve your browsing experience and allow certain website features to function correctly.
              </p>
            </div>
          </section>

          {/* Section 2: What Cookies We Use */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">2. What Cookies We Use</h2>
            </div>
            <div className="pl-11 space-y-4">
              <p className="leading-relaxed">
                We use only essential and minimal cookies, including:
              </p>

              {/* Subsection a: Essential Cookies */}
              <div className="mt-6">
                <h3 className="font-bold text-lg mb-3">a. Essential Cookies</h3>
                <p className="leading-relaxed mb-3">
                  These cookies are required for the website to function properly. They include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Session cookies</li>
                  <li>Login/authentication cookies</li>
                  <li>Security-related cookies</li>
                </ul>
                <p className="leading-relaxed mt-3 text-primary font-semibold">
                  Without these, the website may not work as intended.
                </p>
              </div>

              {/* Subsection b: Analytical Cookies */}
              <div className="mt-6">
                <h3 className="font-bold text-lg mb-3">b. Analytical Cookies (Optional)</h3>
                <p className="leading-relaxed mb-3">
                  We may use basic analytics tools to improve performance. These may include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Page load tracking</li>
                  <li>Anonymous usage statistics</li>
                </ul>
                <p className="leading-relaxed mt-3 text-primary font-semibold">
                  No personally identifiable information is collected.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: No Advertising or Tracking Cookies */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Ban className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">3. No Advertising or Tracking Cookies</h2>
            </div>
            <div className="pl-11 space-y-4">
              <p className="leading-relaxed">
                We do not use:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Advertising cookies</li>
                <li>Retargeting cookies</li>
                <li>Third-party marketing trackers</li>
                <li>Social media tracking pixels</li>
              </ul>
              <p className="leading-relaxed mt-3 text-primary font-semibold">
                Your browsing activity is not monitored for marketing or profiling.
              </p>
            </div>
          </section>

          {/* Section 4: How We Handle Personal Data */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">4. How We Handle Personal Data</h2>
            </div>
            <div className="pl-11 space-y-4">
              <p className="leading-relaxed">
                Cookies do not store personal information like:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name</li>
                <li>Phone number</li>
                <li>Email</li>
                <li>Address</li>
                <li>Financial details</li>
              </ul>
              <p className="leading-relaxed mt-3">
                The only personal information we collect is what you voluntarily provide during signup or contact.
              </p>
            </div>
          </section>

          {/* Section 5: Managing Cookies */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">5. Managing Cookies</h2>
            </div>
            <div className="pl-11 space-y-4">
              <p className="leading-relaxed">
                You can choose to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Disable cookies through your browser settings</li>
                <li>Clear cookies at any time</li>
                <li>Block non-essential cookies</li>
              </ul>
              <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="leading-relaxed font-semibold text-primary">
                  Please note: Disabling essential cookies may affect website functionality.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Updates to This Notice */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">6. Updates to This Notice</h2>
            </div>
            <div className="pl-11">
              <p className="leading-relaxed">
                We may update this Cookie Notice as needed. Changes will be posted on this page with an updated "Last Updated" date.
              </p>
            </div>
          </section>

          <div className="border-t border-white/10 pt-8"></div>

          {/* Section 7: Contact */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">7. Contact</h2>
            </div>
            <div className="pl-11">
              <div className="bg-primary/10 rounded-lg border border-primary/20 p-6 space-y-3">
                <div>
                  <p className="font-bold text-lg mb-2">RetailMarketingPro</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/70 mb-1">Email:</p>
                    <a href="mailto:retailmarketingpro1.0@gmail.com" className="text-primary hover:underline">
                      retailmarketingpro1.0@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/70 mb-1">Website:</p>
                    <a href="https://inventory.retailmarketingpro.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      inventory.retailmarketingpro.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookieNotice;

