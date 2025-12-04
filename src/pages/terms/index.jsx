import React from 'react';
import Hero from '../../components/Hero';
import AIZLogo from "../../assets/AIZLogo.png";

function TermsOfService() {
    return (
        <div className="w-full overflow-x-hidden">
            <Hero
                HeroImg={AIZLogo}
                HeroHeading="Terms of Service"
                HeroText="Please read these terms and conditions carefully before using our service."
            />
            <div className="py-24 bg-white">
                <div className="container w-full md:w-4/5 mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg text-gray-600 leading-relaxed">
                        <p className="mb-6">Last updated: January 01, 2025</p>

                        <h3 className="text-2xl font-bold text-gray-800 mb-4">1. Agreement to Terms</h3>
                        <p className="mb-6">
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and AIZero (“we,” “us” or “our”), concerning your access to and use of the AIZero website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                        </p>

                        <h3 className="text-2xl font-bold text-gray-800 mb-4">2. Intellectual Property Rights</h3>
                        <p className="mb-6">
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-800 mb-4">3. User Representations</h3>
                        <p className="mb-6">
                            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-800 mb-4">4. Prohibited Activities</h3>
                        <p className="mb-6">
                            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-800 mb-4">5. Limitation of Liability</h3>
                        <p className="mb-6">
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Site, even if we have been advised of the possibility of such damages.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-800 mb-4">6. Contact Us</h3>
                        <p className="mb-6">
                            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:connect@aizero.com" className="text-primary hover:underline">connect@aizero.com</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TermsOfService;
