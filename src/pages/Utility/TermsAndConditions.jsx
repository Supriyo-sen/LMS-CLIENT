// src/pages/TermsAndConditions.jsx
const TermsAndConditions = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-gray-700 leading-7 mb-4">
          By accessing and using this platform, you agree to comply with and be
          bound by the following terms and conditions. Please read them
          carefully.
        </p>
        <h2 className="text-xl font-semibold mb-2">1. Use of the Platform</h2>
        <p className="text-gray-700 leading-7 mb-4">
          This platform is intended for personal, non-commercial use only. Users
          are responsible for maintaining the confidentiality of their account
          and password.
        </p>
        <h2 className="text-xl font-semibold mb-2">2. Course Content</h2>
        <p className="text-gray-700 leading-7 mb-4">
          All course materials, including videos, eBooks, and assignments, are
          the intellectual property of their respective authors. Unauthorized
          distribution is prohibited.
        </p>
        <h2 className="text-xl font-semibold mb-2">3. Privacy Policy</h2>
        <p className="text-gray-700 leading-7">
          Your personal information is protected and will not be shared with
          third parties without your consent. Please review our Privacy Policy
          for more details.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
