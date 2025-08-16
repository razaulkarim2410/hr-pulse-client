import React from 'react';

const TermsOfUse = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 text-gray-700">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Terms of Use</h1>

        <p className="mb-6">
          Welcome to <strong>HRPulse</strong>. By accessing or using our platform, services, and features, you agree to be bound by the following Terms of Use. Please read them carefully. If you do not agree with any part of these terms, you must not use HRPulse.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By using HRPulse, you acknowledge that you have read, understood, and agree to comply with these terms and any future modifications.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. User Responsibilities</h2>
        <p className="mb-4">
          You agree to use the platform responsibly and not to engage in any activity that may harm the security, integrity, or availability of the service. You are responsible for maintaining the confidentiality of your login credentials and for any activities that occur under your account.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Privacy and Data</h2>
        <p className="mb-4">
          Your use of HRPulse is also governed by our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>. We are committed to protecting your data and using it in compliance with applicable laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Intellectual Property</h2>
        <p className="mb-4">
          All content, logos, features, and functionality of HRPulse are the intellectual property of HRPulse and its licensors. You may not copy, modify, or distribute any part of the service without explicit written permission.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Account Suspension or Termination</h2>
        <p className="mb-4">
          HRPulse reserves the right to suspend or terminate user accounts that violate these terms or engage in unauthorized use of the platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Limitation of Liability</h2>
        <p className="mb-4">
          HRPulse will not be liable for any indirect, incidental, special, or consequential damages resulting from your use of the platform. The service is provided "as is" without warranties of any kind.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Modifications to the Terms</h2>
        <p className="mb-4">
          HRPulse may update these terms at any time. Continued use of the platform following changes constitutes your acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. Contact</h2>
        <p>
          If you have any questions about these Terms of Use, please contact us at: <a href="mailto:support@hrpulse.com" className="text-blue-600 underline">support@hrpulse.com</a>.
        </p>
      </div>
    </section>
  );
};

export default TermsOfUse;
