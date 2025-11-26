import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, AlertCircle, Copyright, Link as LinkIcon, CreditCard, Mail } from 'lucide-react';

const Terms = () => {
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
            <h1 className="text-4xl font-black text-white">Terms of Service</h1>
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
              We at Retail Marketing Pro (the "Business" "we" or "us" in this Privacy Policy), operator of the web site at www.retailmarketingpro.in (the "Site"), understand the importance of the privacy of users of the Site, and in particular of protecting their personal information. We have therefore put in place this Privacy Policy, in order to inform you fully of our privacy practices, and to permit you to contact us with any concerns, questions, or corrections regarding your personal information in our possession.
            </p>
          </section>

          <div className="border-t border-white/10 pt-8"></div>

          {/* General Notice */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <AlertCircle className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">General Notice</h2>
            </div>
            <div className="pl-11 space-y-2">
              <p className="leading-relaxed">
                Retail Marketing Pro strives to ensure that the information contained in this web site is accurate and reliable. However, Retail Marketing Pro and the World Wide Web (or Web Site Host) are not infallible and errors may sometimes occur. Therefore, to the fullest extent permissible pursuant to applicable law, Retail Marketing Pro disclaims any warranty of any kind, whether expressed or implied, as to any matter whatsoever relating to this web site. Retail Marketing Pro is not liable or responsible for any damages or injuries caused by use of this web site (such as viruses, omissions or misstatements). Retail Marketing Pro may revise the information, services and the resources contained in this web site from time to time and we reserve the right to make such changes without obligation to notify past, current or prospective visitors. In no event shall Retail Marketing Pro be liable for any indirect, special, incidental, or consequential damages arising out of any use of the information contained herein.
              </p>
            </div>
          </section>

          {/* Copyrights Notice */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Copyright className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Copyrights Notice</h2>
            </div>
            <div className="pl-11 space-y-2">
              <p className="leading-relaxed">
                The text and Html code contained in this web site are the exclusive property of Retail Marketing Pro. Except where otherwise noted, the text and Html code contained here may not be copied, distributed, displayed, reproduced or transmitted in any form or by any means without the prior written permission of Retail Marketing Pro.
              </p>
              <p className="leading-relaxed">
                Unless otherwise stated, the photographic images on http://www.retailmarketingpro.in are owned by Retail Marketing Pro, its licensors, or its third-party image partners. You may not use any of the photographic images or graphic material on http://www.retailmarketingpro.in, in whole or in part, without written permission of Retail Marketing Pro.
              </p>
            </div>
          </section>

          {/* Hyper-Links Notice */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <LinkIcon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Hyper-Links Notice</h2>
            </div>
            <div className="pl-11 space-y-2">
              <p className="leading-relaxed">
                Retail Marketing Pro`s, web site may link to sites not maintained by or related to Retail Marketing Pro. Hypertext links are provided as a service to users and are not sponsored by or affiliated with this web site or Retail Marketing Pro. Retail Marketing Pro has not reviewed the sites hyper-linked to or from this web site and is not responsible for the content of any other site. These links are to be accessed at the user`s own risk. Retail Marketing Pro makes no representations or warranties about the content, completeness, or accuracy of these links or the sites hyper-linked to this web site. Furthermore, Retail Marketing Pro does not implicitly endorse third-party sites hyper-linked to this website.
              </p>
            </div>
          </section>

          <div className="border-t border-white/10 pt-8"></div>

          {/* Refund and Cancellation Policy */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white">Refund and Cancellation Policy</h2>
            </div>
            <div className="pl-11">
              <p className="leading-relaxed">
                All refund amounts shall be credited to your account within 5-7 business days in accordance with the terms that may be stipulated by the bank which has issued the credit/debit card.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="bg-primary/10 rounded-lg border border-primary/20 p-6">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Contact Us</h3>
                  <p className="leading-relaxed mb-2">
                    If you have any questions about these Terms of Service, please contact us:
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

export default Terms;


