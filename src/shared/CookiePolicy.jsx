import React from 'react';

const CookiePolicy = () => {
  return (
    <section className="bg-white dark:bg-neutral-900 py-16 px-6 md:px-12 lg:px-24 text-gray-700 dark:text-gray-300">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Cookie Policy</h1>

        <p className="mb-6">
          This Cookie Policy explains how <strong>HRPulse</strong> uses cookies and similar technologies when you visit or interact with our website and services. By continuing to use our platform, you consent to the use of cookies in accordance with this policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. What Are Cookies?</h2>
        <p className="mb-4">
          Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, improve performance, and provide a better user experience.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Types of Cookies We Use</h2>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Essential Cookies:</strong> Required for core site functionality like authentication and session management.</li>
          <li><strong>Performance Cookies:</strong> Help us understand how users interact with the site to improve its performance.</li>
          <li><strong>Functionality Cookies:</strong> Remember your preferences and choices to provide personalized features.</li>
          <li><strong>Analytics Cookies:</strong> Used to collect anonymized data for usage and behavior insights.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Third-Party Cookies</h2>
        <p className="mb-4">
          We may use third-party services (such as Google Analytics) that set their own cookies to analyze traffic and usage patterns. These cookies are managed by the respective third parties and governed by their privacy policies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. How to Manage Cookies</h2>
        <p className="mb-4">
          Most browsers allow you to manage or disable cookies through settings. However, disabling cookies may impact your ability to use certain features on HRPulse.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Check your browser settings for cookie preferences</li>
          <li>Use incognito/private browsing modes if preferred</li>
          <li>Clear cookies periodically if needed</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Consent</h2>
        <p className="mb-4">
          By using our site, you agree to our use of cookies as outlined in this policy. You may withdraw consent at any time by adjusting your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Updates to This Policy</h2>
        <p className="mb-4">
          We may update this Cookie Policy to reflect changes in our practices or legal requirements. Please check this page periodically for the latest information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Contact Us</h2>
        <p>
          If you have any questions about our use of cookies, feel free to contact us at: 
          <a href="mailto:support@hrpulse.com" className="text-blue-600 dark:text-blue-400 underline">support@hrpulse.com</a>
        </p>
      </div>
    </section>
  );
};

export default CookiePolicy;
