import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="bg-white dark:bg-neutral-900 py-16 px-6 md:px-12 lg:px-24 text-gray-700 dark:text-gray-300">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Privacy Policy</h1>

        <p className="mb-6">
          At <strong>HRPulse</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We collect personal information you provide directly, such as your name, email, role, and other profile details. We may also collect system data such as browser type, IP address, and device information for security and analytics purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          The data we collect is used to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide and improve our services</li>
          <li>Authenticate and manage user accounts</li>
          <li>Process payroll and HR-related tasks</li>
          <li>Communicate with users</li>
          <li>Ensure security and prevent unauthorized access</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Data Sharing</h2>
        <p className="mb-4">
          We do not sell or rent your personal data. We may share information with:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Trusted service providers who help us operate our platform</li>
          <li>Legal authorities, if required by law</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Cookies & Tracking</h2>
        <p className="mb-4">
          We use cookies to enhance user experience and analyze usage. You can control cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Data Security</h2>
        <p className="mb-4">
          We implement modern security measures to protect your data, including encrypted connections, access controls, and secure authentication.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal information. For requests, please email us at <a href="mailto:support@hrpulse.com" className="text-blue-600 dark:text-blue-400 underline">support@hrpulse.com</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Changes will be reflected on this page with a revised effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, contact us at: <a href="mailto:support@hrpulse.com" className="text-blue-600 dark:text-blue-400 underline">support@hrpulse.com</a>.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
