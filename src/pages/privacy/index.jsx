import React from 'react';
import Hero from '../../components/Hero';
import AIZLogo from "../../assets/AIZLogo.png";

function PrivacyPolicy() {
    return (
        <div className="w-full overflow-x-hidden">
            <Hero
                HeroImg={AIZLogo}
                HeroHeading="Privacy Policy"
                HeroText="Your privacy is important to us. Learn how we collect, use, and protect your information."
            />
            <div className="py-24 bg-white">
                <div className="container w-full md:w-4/5 mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg text-gray-600 leading-relaxed">
                        <p className="mb-6">Last updated: January 01, 2025</p>

                        <h3 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h3>
                        <p className="mb-6">
                            Welcome to AIZero. We respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website
                            (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h3>
                        <p className="mb-6">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h3>
                        <p className="mb-6">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security</h3>
                        <p className="mb-6">
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-800 mb-4">5. Contact Us</h3>
                        <p className="mb-6">
                            If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:connect@aizero.com" className="text-primary hover:underline">connect@aizero.com</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
