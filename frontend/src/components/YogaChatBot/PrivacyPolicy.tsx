
import { useNavigate } from "react-router-dom";
import icon from "../../assets/details/fluent-mdl2_navigate-back (1).png";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-auto bg-[#18212C] text-white flex justify-center gap-[100px]  p-4 overflow-y-auto">
      <div className="">
        <button onClick={handleBackClick}>
          <img src={icon} alt="Back Icon" />
        </button>
      </div>
      <div className=" rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center  mb-6">Privacy Policy for YogasanaAI</h1>
        <p className="text-lg  mb-4">Effective Date: <strong>[01/01/2025]</strong></p>
        
        <p className="text-lg  mb-4">
          At Yoga Pose Detector, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our Yoga Pose Detection Application ("the App"). By using the App, you agree to the collection and use of information in accordance with this policy.
        </p>

        <h2 className="text-2xl font-semibold  mt-6 mb-2">1. Information We Collect</h2>
        <p className="text-lg  mb-4">
          We may collect the following types of information when you use the App:
        </p>
        <ul className="list-disc pl-6 text-lg  mb-4">
          <li><strong>Personal Information:</strong> We do not collect any personally identifiable information (PII) unless you provide it directly, such as through contact forms or support requests. This may include your name, email address, or other contact information you voluntarily provide.</li>
          <li><strong>Usage Data:</strong> We automatically collect usage data when you interact with the App. This includes:
            <ul className="list-inside pl-6">
              <li><strong>Device Information:</strong> Information about your device, including device type, operating system, browser type, and version.</li>
              <li><strong>App Interaction:</strong> Data about how you use the App, including the frequency and duration of your use, the features you interact with, and your activity within the App.</li>
            </ul>
          </li>
          <li><strong>Yoga Pose Data:</strong> The App may collect visual data of your yoga poses, but this information is processed only for the purpose of pose detection and is not stored permanently. Pose data may be processed in real-time to provide feedback and help improve your yoga practice.</li>
        </ul>

        <h2 className="text-2xl font-semibold  mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-lg  mb-4">
          <li><strong>To provide and improve the App:</strong> We use your usage data to improve the functionality, performance, and user experience of the App.</li>
          <li><strong>To provide personalized feedback:</strong> We process yoga pose data to offer personalized suggestions for improving your practice.</li>
          <li><strong>To communicate with you:</strong> If you provide contact information, we may use it to respond to your inquiries or to send important updates about the App.</li>
          <li><strong>For analytics and research:</strong> We may use anonymous usage data to analyze trends and improve our services.</li>
        </ul>

        <h2 className="text-2xl font-semibold  mt-6 mb-2">3. Data Security</h2>
        <p className="text-lg  mb-4">
          We take reasonable measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold  mt-6 mb-2">4. Data Retention</h2>
        <p className="text-lg  mb-4">
          We retain usage data and yoga pose data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. We do not store any personal data unless you explicitly provide it (e.g., through contact forms).
        </p>

        <h2 className="text-2xl font-semibold  mt-6 mb-2">5. Third-Party Services</h2>
        <p className="text-lg  mb-4">
          The App may integrate with third-party services, such as analytics tools, social media platforms, or external libraries. These services may have their own privacy policies, which we recommend you review. We are not responsible for the privacy practices of third-party services.
        </p>

        <h2 className="text-2xl font-semibold  mt-6 mb-2">6. Your Rights</h2>
        <p className="text-lg mb-4">
          Depending on your location, you may have the following rights regarding your data:
        </p>
        <ul className="list-disc pl-6 text-lg  mb-4">
          <li><strong>Access:</strong> You can request to access the personal information we hold about you.</li>
          <li><strong>Correction:</strong> You can request correction of any inaccurate or incomplete personal information.</li>
          <li><strong>Deletion:</strong> You can request that we delete your personal information (if applicable).</li>
          <li><strong>Opt-out:</strong> You can choose not to provide certain personal information, but this may limit some features of the App.</li>
        </ul>
        <p className="text-lg  mb-4">
          To exercise any of these rights, please contact us at <strong>[Insert contact email or address]</strong>.
        </p>

        <h2 className="text-2xl font-semibold  mt-6 mb-2">7. Changes to This Privacy Policy</h2>
        <p className="text-lg  mb-4">
          We may update this Privacy Policy from time to time. Any changes will be reflected in this document with the updated "Effective Date." We recommend that you review this policy periodically to stay informed about how we are protecting your data.
        </p>

        <h2 className="text-2xl font-semibold  mt-6 mb-2">8. Contact Us</h2>
        <p className="text-lg  mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="text-lg  mb-4">
          <strong>Email:</strong> [Insert Email Address]
        </p>
        <p className="text-lg  mb-4">
          <strong>Mailing Address:</strong> [Insert Address]
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
