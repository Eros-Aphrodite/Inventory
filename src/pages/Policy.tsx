import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Lock, Eye, FileCheck, Database, Mail } from 'lucide-react';

const Policy = () => {
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
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-black text-white">Privacy Policy</h1>
          </div>
          <p className="text-white/70 text-lg">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-8 md:p-12 space-y-8 text-white/90">
          {/* Introduction */}
          <section className="space-y-4">
            <p className="leading-relaxed">
              Retail Marketing Pro is committed to protecting the privacy of the personal information you provide us on our Website. We believe it is important for you to know how we treat the information you share with us. The following policy will explain how your personal information will be treated as you use our Web site and its features. Personal information includes your name, address, telephone number, email addresses, click-through activity and any other information you may provide here. Your email address and all other personal information is collected only when you voluntarily provide that data while submitting forms such as reservations or online orders.
            </p>
          </section>

          <div className="border-t border-white/10 pt-8"></div>

          {/* Section 1: Accountability */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <FileCheck className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">1. Accountability</h2>
            </div>
            <p className="leading-relaxed pl-11">
              The Business has provided this privacy policy for ensuring compliance. Should you have any questions regarding this policy or concerns with respect to Business`s compliance, you may contact us.
            </p>
          </section>

          {/* Section 2: Identifying Purpose of Collection */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Eye className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">2. Identifying Purpose of Collection</h2>
            </div>
            <div className="pl-11 space-y-4">
              <p className="leading-relaxed">
                We collect various personal information from you when you seek our products or services, make an online reservation, sing-up to our VIP newsletter membership or any inquiry through the Site. Information collected may include your:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Full Name</li>
                <li>Company Name</li>
                <li>Address(es)</li>
                <li>Telephone and Facsimile number(s)</li>
                <li>Email address(es)</li>
                <li>Gender</li>
                <li>Interest(s)</li>
              </ul>
              <p className="leading-relaxed">
                We collect this information in order to permit us to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Verify your identity,</li>
                <li>Permit us to contact you to provide goods and services requested by you,</li>
                <li>Provide you with periodic updates regarding the Site and our products and services.</li>
              </ul>
              <p className="leading-relaxed">
                We may also use such information to build a profile of your interests as they relate to the Site or Business so that we will be able to suggest or provide products or services of interest to you in the future.
              </p>
              <p className="leading-relaxed">
                We do not collect information which we do not reasonably require in order to fulfill these purposes.
              </p>
              <p className="leading-relaxed font-semibold mt-4">
                Further, the Site automatically collects certain information every time you visit it:
              </p>
              
              <div className="mt-4 space-y-3">
                <div>
                  <h3 className="font-bold text-lg mb-2">a) Cookies</h3>
                  <p className="leading-relaxed">
                    A cookie is a small non-executable file that is stored on your hard drive for the purpose of identifying your computer. While it is possible to view and to acquire products and services from the site with your browser`s security settings set to prevent cookies from being used, your online experience may be greatly reduced.
                  </p>
                  <p className="leading-relaxed mt-2">
                    Business uses both session cookies and permanent cookies at Site only after you have created a user account on the platform. Session cookies are active only during the period you are logged on to the Site and are removed when you leave.
                  </p>
                  <p className="leading-relaxed mt-2">
                    Permanent cookies remain on your hard drive until you remove them through your browser`s Internet security settings. Permanent cookies are used to store login information and user preferences and thus eliminate you're having to make the same entries on each visit.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">b) Conversion Beacons</h3>
                  <p className="leading-relaxed">
                    The Business also uses Conversion Beacons (short bits of HTML computer code) inserted in the source code of designated website pages. These beacons, used with industry standard browser cookie technology and standard Html coding, allow us to track analytics to the Site and email flow between you and us. Email recipients who receive a Conversion Beacon enabled email message will receive a small unique cookie that is stored in their browser session, which is later used to connect the email recipient with the subsequent recipient activity on the Site.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <h3 className="font-bold text-lg mb-2">Consent and CEMs</h3>
                <p className="leading-relaxed mb-2">
                  When you acquire any product or service on or through the Site, or you provide any information at our request, your action constitutes consent to our collection and use of such information as permitted in this Privacy Policy.
                </p>
                <p className="leading-relaxed mb-2">
                  Express consent is obtained when you explicitly toggle the opt-in check-box to agree to express permission for us to send you commercial electronic messages ("CEM").
                </p>
                <p className="leading-relaxed mb-2">
                  Implied consent is obtained when you have purchased our goods or services and have provided your email address from a reservation, comment form, coupon or other methods.
                </p>
                <p className="leading-relaxed mb-2">
                  Email communications are sent from a software provided by Retail Marketing Pro. All email communications include the Business name, contact and a mechanism that allows the recipient to unsubscribe at no cost.
                </p>
                <p className="leading-relaxed">
                  Please note that if you do not wish to receive emails from us, you may opt-out automatically of such material by clicking on the unsubscribe link found in the email communication sent to you by our Business.
                </p>
                <p className="leading-relaxed mt-2">
                  You may also opt-out of certain other uses of your data by contacting us.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Limiting Collection */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">3. Limiting Collection</h2>
            </div>
            <div className="pl-11 space-y-2">
              <p className="leading-relaxed">
                The Business will limit the collection of personal information to that which reasonably necessary to fulfill the purpose for which it was collected.
              </p>
              <p className="leading-relaxed">
                Research and survey data is reported back to Business as aggregated data with no reference to individual customers.
              </p>
              <p className="leading-relaxed">
                Customers who do not wish to be contacted for research or survey purposes should contact us.
              </p>
            </div>
          </section>

          {/* Section 4: Limiting Use, Disclosure, and Retention */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">4. Limiting Use, Disclosure, and Retention</h2>
            </div>
            <div className="pl-11 space-y-2">
              <p className="leading-relaxed">
                We will not use or disclose your personal information for purposes other than those for which it was collected without your consent or as permitted or required by law.
              </p>
              <p className="leading-relaxed">
                However, we do use the services of third parties to complete certain electronic requests such as reservations, newsletter sign-ups along with any other 3rd party widgets, and your personal information may, therefore, be transmitted to such third parties for such purposes. If your personal data is to be transmitted to another party for processing or storage, we use contractual and other means to ensure that your personal information is protected in accordance with PIPEDA.
              </p>
              <p className="leading-relaxed">
                Your user data will be stored by Retail Marketing Pro, a product developed by Retail Marketing Pro.
              </p>
              <p className="leading-relaxed">
                Your personal information is retained only for as long as necessary to fulfill the purposes for which it was collected unless the law requires longer retention.
              </p>
            </div>
          </section>

          {/* Section 5: Accuracy */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <FileCheck className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">5. Accuracy</h2>
            </div>
            <div className="pl-11">
              <p className="leading-relaxed">
                In order to maintain the highest levels of accuracy regarding your personal information, to the extent possible we permit you to enter such information into our systems yourself. In some instances, however, we are required to enter such information, for instance upon speaking to you over the phone or some other type of communication (provided by you or otherwise).
              </p>
            </div>
          </section>

          {/* Section 6: Safeguards */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">6. Safeguards</h2>
            </div>
            <div className="pl-11 space-y-2">
              <p className="leading-relaxed">
                While in our possession (or the possession of any entity engaged by us to house or store it) and regardless of the format in which it is held, your personal information is protected against theft, loss and/or unauthorized access, disclosure, copying, use or modification by security safeguards appropriate to the sensitivity of the information.
              </p>
              <p className="leading-relaxed">
                Some personal information entered by you into our systems may be encrypted as it travels over the Internet. Depending on your web browser you may see a secure webpage indicator, for example, a closed lock in the lower right-hand corner of your browser. We may use the Secure Socket Layer (SSL) protocol to encrypt some personal information as it travels from your computer to our systems.
              </p>
            </div>
          </section>

          {/* Section 7: Openness */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Eye className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">7. Openness</h2>
            </div>
            <div className="pl-11">
              <p className="leading-relaxed">
                Business`s privacy practices are as outlined within this policy. If you have any questions or comments, please contact us.
              </p>
            </div>
          </section>

          {/* Section 8: Individual Access */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <FileCheck className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">8. Individual Access</h2>
            </div>
            <div className="pl-11">
              <p className="leading-relaxed">
                With certain limited exceptions, you have a right to access your personal information held by the Business. You may access your personal information by contacting us.
              </p>
            </div>
          </section>

          <div className="border-t border-white/10 pt-8"></div>

          {/* Changes to Privacy Policy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Changes to the Privacy Policy</h2>
            <p className="leading-relaxed">
              Business reserves the right to modify this privacy statement at any time, so please review it frequently. If we make material changes to this policy we will notify you on our homepage and other places we deem appropriate so that you are aware of what information we collect how we use it, and under what circumstances, if any, we disclose it.
            </p>
          </section>

          {/* Contact Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="bg-primary/10 rounded-lg border border-primary/20 p-6">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Contact Us</h3>
                  <p className="leading-relaxed mb-2">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <p className="leading-relaxed">
                    Email: <a href="mailto:retailmarketingpro1.0@gmail.com" className="text-primary hover:underline">retailmarketingpro1.0@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;


