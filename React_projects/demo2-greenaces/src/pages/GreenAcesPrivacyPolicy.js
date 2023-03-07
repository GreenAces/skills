import React from 'react';
import PrivacyPolicyPage from  '../styles/PrivacyPolicy.module.css';
import { Helmet } from 'react-helmet';

function PrivacyPolicy()  {







  return (<React.Fragment>

    <Helmet>
      <title>GreenAces -- Privacy Policy</title>
    </Helmet>

<div className={PrivacyPolicyPage.privacyPolicyScrollable}>
      <p>
        We at GreenAces are committed to protecting the privacy and security of our users. This Privacy Policy outlines how we collect, use, and protect your personal
        information. By using our website, you consent to our Privacy Policy.
      </p>

      <h2 className={PrivacyPolicyPage.policySectionTitle}>Information We Collect</h2>
      <p>
        When you visit our website, we may collect the following information:
      </p>
      <ul>
        <li>Personal information such as your name, email address, and date of birth</li>
        <li>Contact information such as your address and phone number</li>
        <li>Payment information such as credit card details</li>
        <li>Usage information such as your IP address, browser type, and device information</li>
        <li>Any other information you choose to provide to us</li>
      </ul>

      <h2 className={PrivacyPolicyPage.policySectionTitle}>How We Use Your Information</h2>
      <p>
        We use the information we collect to provide and improve our services, personalize your user experience, process payments,
        communicate with you, and fulfill legal obligations. Specifically, we may use your information to:
      </p>
      <ul>
        <li>Set up and maintain your account</li>
        <li>Process payments and refunds</li>
        <li>Respond to your inquiries and provide customer support</li>
        <li>Send you promotional emails or other marketing materials</li>
        <li>Improve our website and services</li>
        <li>Detect and prevent fraud and illegal activity</li>
      </ul>

      <h2 className={PrivacyPolicyPage.policySectionTitle}>How We Protect Your Information</h2>
      <p>
        We take security seriously and take steps to protect your personal information from unauthorized access, alteration, or
        disclosure. We use reasonable security measures such as firewalls, encryption, and access controls to protect your information. We do not sell, rent, or share your
        personal information with third parties except as necessary to provide our services or as required by law.
      </p>

      <h2 className={PrivacyPolicyPage.policySectionTitle}>Cookies</h2>
      <p>
        We may use cookies, web beacons, or other tracking technologies to improve your user experience and provide targeted advertising. You can choose to disable
        cookies through your browser settings, but this may affect some website functionality.
      </p>

      <h2 className={PrivacyPolicyPage.policySectionTitle}>Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these sites and
        encourage you to review their policies before providing any personal information.
      </p>

      <h2 className={PrivacyPolicyPage.policySectionTitle}>Updates to Privacy Policy</h2>
      <p>
        We reserve the right to update this Privacy Policy at any time. We will notify you of any material changes by posting the updated policy on
        our website.
      </p>

      <h2 className={PrivacyPolicyPage.policySectionTitle}>Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or our practices, please contact us at [greenaces@greenaces.site].
      </p>

      <p className={PrivacyPolicyPage.policyEffectiveDate}>Effective Date: [02/17/2023]</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      
    </div>

    








  </React.Fragment>) 


};

export default PrivacyPolicy;