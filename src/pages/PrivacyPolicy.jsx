import React from "react";

// --- 1. Structured Policy Content and Sections ---

// Defines the structure for the Table of Contents and anchors
const sections = [
  {
    id: "infocollect",
    title: "What information do we collect?",
    summary:
      "We collect personal and technical data, including information you provide upon registration and usage data from your devices.",
  },
  {
    id: "infouse",
    title: "How do we process your information?",
    summary:
      "We process your data to provide, improve, and secure our Services (account management, service delivery, fraud prevention, marketing).",
  },
  {
    id: "whoshare",
    title:
      "When and with whom do we share your personal information?",
    summary:
      "We share data with service providers, affiliates, business partners, or when legally required.",
  },
  {
    id: "cookies",
    title:
      "Do we use cookies and other tracking technologies?",
    summary:
      "Yes, we use cookies and similar technologies for functionality, analytics, and personalization. You have control over these via your browser settings.",
  },
  {
    id: "inforetain",
    title: "How long do we keep your information?",
    summary:
      "We retain your data only as long as necessary to fulfill the purpose, or as required by law.",
  },
  {
    id: "infosafe",
    title: "How do we keep your information safe?",
    summary:
      "We implement appropriate organizational and technical safeguards, but no system is 100% secure.",
  },
  {
    id: "infominors",
    title: "Do we collect information from minors?",
    summary:
      "No, we do not knowingly collect data from or market to children under 18.",
  },
  {
    id: "privacyrights",
    title: "What are your privacy rights?",
    summary:
      "You have rights to access, correct, delete, object, and withdraw consent, depending on your location.",
  },
  {
    id: "DNT",
    title: "Controls for Do-Not-Track features",
    summary:
      "We currently do not respond to DNT signals as a uniform technical standard has not been established.",
  },
  {
    id: "policyupdates",
    title: "Do we make updates to this notice?",
    summary:
      "Yes, we update this notice as necessary. The latest version is effective upon posting with an updated 'Last Updated' date.",
  },
  {
    id: "contact",
    title: "How can you contact us about this notice?",
    summary:
      "You can contact us via email or the provided website link.",
  },
  {
    id: "request",
    title:
      "How can you review, update, or delete the data we collect from you?",
    summary:
      "You can submit a request via the provided contact information to exercise your data rights.",
  },
];

// Reusable component to render a single section of the policy
const PolicySection = ({ id, title, children }) => (
  <section
    id={id}
    className="pt-6 md:pt-10 mb-8 border-t border-slate-200">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="text-slate-700 space-y-4">
      {children}
    </div>
  </section>
);

// --- 2. Main Privacy Policy Component ---

export default function PrivacyPolicy({
  orgName = "STUDX Management Private Limited",
  appName = "GigX",
  websiteUrl = "https://studx.in",
  contactEmail = "support@studx.in",
  lastUpdated = "January 01, 2025",
}) {
  const contactDetails = (
    <>
      <p>You can contact us by email or post at:</p>
      <p className="font-semibold text-slate-800">
        {orgName}
        <br />
        [Your Address Here - e.g., K-6, Sector 18, Noida]
      </p>
      <p>
        Website:{" "}
        <a
          className="text-blue-600 hover:underline"
          href={websiteUrl}
          target="_blank"
          rel="noreferrer">
          {websiteUrl}
        </a>
      </p>
      <p>
        Email:{" "}
        <a
          className="text-blue-600 hover:underline"
          href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
      </p>
    </>
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      <header className="mb-10 border-b border-slate-200 pb-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-base text-slate-500">
          Last updated {lastUpdated}
        </p>
      </header>

      <p className="mb-8 text-slate-600 leading-relaxed">
        This Privacy Notice for{" "}
        <strong className="text-slate-700">
          {orgName}
        </strong>{" "}
        (“we”, “us”, or “our”) describes how and why we
        access, collect, store, use, and share (“process”)
        personal information when you use our services
        (“Services”), including when you visit our website,
        download or use our mobile application{" "}
        <strong className="text-slate-700">
          {appName}
        </strong>
        , or engage with us in related ways such as sales,
        marketing, or events. If you do not agree with our
        policies and practices, please{" "}
        <strong className="text-red-600">
          do not use our Services.
        </strong>
      </p>

      {/* --- SUMMARY BOX --- */}
      <div className="mb-10 rounded-xl border border-blue-200 bg-blue-50 p-6 shadow-md">
        <h2 className="mb-4 text-xl font-bold text-blue-800">
          ✨ Key Points Summary
        </h2>
        <p className="text-blue-700 mb-4">
          This summary highlights the most important
          details, but please click on any topic below for
          the full information.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-blue-700">
          {sections.map((s) => (
            <li key={s.id} className="text-sm">
              <a
                href={`#${s.id}`}
                className="font-medium hover:text-blue-900 hover:underline transition-colors">
                {s.title}
              </a>
              : {s.summary}
            </li>
          ))}
        </ul>
      </div>
      {/* --- END SUMMARY BOX --- */}

      {/* --- TABLE OF CONTENTS --- */}
      <nav
        aria-label="Table of contents"
        className="mb-10 p-4 border rounded-lg bg-white shadow-sm">
        <h3 className="mb-3 text-lg font-semibold text-slate-800">
          Table of Contents
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-blue-600 hover:text-blue-800 transition-colors text-sm">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* --- END TABLE OF CONTENTS --- */}

      {/* --- FULL POLICY TEXT (Using PolicySection Component) --- */}
      <div className="space-y-12">
        <PolicySection
          id="infocollect"
          title="1. What information do we collect?">
          <h3 className="text-xl font-medium mt-6 text-slate-800">
            Personal information you disclose to us
          </h3>
          <p>
            We collect personal information that you provide
            to us, such as **names, phone numbers, email
            addresses, passwords, and similar contact data**
            when you register for the Services, express
            interest in obtaining information about us or
            our products and Services, participate in
            activities on the Services, or contact us.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Personal information provided by you (e.g.,
              name, phone, email, passwords).
            </li>
            <li>
              Sensitive information (when permitted by
              applicable law or with your explicit consent),
              e.g., **PAN, bank or UPI number** for payment
              and payout purposes.
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 text-slate-800">
            Information automatically collected
          </h3>
          <p>
            We automatically collect certain information
            when you visit, use, or navigate the Services.
            This information does not reveal your specific
            identity but includes technical data like your
            **IP address, device and browser
            characteristics, operating system, language
            preferences**, and usage logs for security,
            operation, and analytics.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              **Log and usage data** (timestamps,
              pages/files viewed, searches, errors).
            </li>
            <li>
              **Device data** (IDs, OS, model, carrier/ISP,
              system configuration).
            </li>
            <li>
              **Location data** (precise or imprecise,
              depending on device/app permissions).
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 text-slate-800">
            Information from other sources
          </h3>
          <p>
            We may collect limited data from public
            databases, marketing partners, affiliate
            programs, data providers, social platforms, and
            other third parties to **improve relevance and
            keep our records updated** and accurate.
          </p>
        </PolicySection>

        <PolicySection
          id="infouse"
          title="2. How do we process your information?">
          <p>
            We process information to **provide, improve,
            and administer the Services**, communicate with
            you, ensure security and fraud prevention,
            comply with law, and for other purposes with
            your consent.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              To **facilitate account creation and
              management** of user accounts.
            </li>
            <li>
              To **deliver and facilitate delivery of
              services** to the user (e.g., connecting
              students and companies for gigs).
            </li>
            <li>
              To **send marketing and promotional
              communications** (per your preferences).
            </li>
            <li>
              To **ensure security, fraud prevention**, and
              legal compliance.
            </li>
          </ul>
        </PolicySection>

        <PolicySection
          id="whoshare"
          title="3. When and with whom do we share personal information?">
          <p>We share in specific situations with:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              **Vendors, Consultants, and Third-Party
              Service Providers** (e.g., payment processors,
              hosting providers, analytics).
            </li>
            <li>
              **Business Partners** (e.g., companies posting
              gigs, if you are a student).
            </li>
            <li>
              **Affiliates** (our group companies) or during
              **Business Transfers** (merger, sale of
              assets).
            </li>
            <li>
              **Legal Authorities** when legally required,
              to respond to court orders, or to protect our
              rights and safety.
            </li>
          </ul>
        </PolicySection>

        <PolicySection
          id="cookies"
          title="4. Do we use cookies and other tracking technologies?">
          <p>
            Yes, we use **cookies, web beacons, and similar
            tracking technologies** to access or store
            information. Specific details on how we use such
            technologies and how you can refuse certain
            cookies are set out in our separate Cookie
            Policy (if applicable) or through your browser
            settings and consent tools.
          </p>
        </PolicySection>

        <PolicySection
          id="inforetain"
          title="5. How long do we keep your information?">
          <p>
            We keep personal information for as long as
            necessary to **fulfill the purposes described in
            this notice**, unless a longer retention period
            is required or permitted by law (e.g., tax,
            accounting, or other legal requirements). When
            we no longer have a legitimate business need to
            process your personal information, we will
            either delete or anonymize it.
          </p>
        </PolicySection>

        <PolicySection
          id="infosafe"
          title="6. How do we keep your information safe?">
          <p>
            We use **organizational and technical security
            measures** appropriate to the risk of processing
            your personal information. However, please
            remember that we cannot guarantee that the
            internet itself is 100% secure. Any transmission
            of personal information to our Services is at
            your own risk.
          </p>
        </PolicySection>

        <PolicySection
          id="infominors"
          title="7. Do we collect information from minors?">
          <p>
            We do not knowingly solicit data from or market
            to **children under 18 years of age**. By using
            the Services, you represent that you are at
            least 18 or that you are the parent/guardian of
            such a minor and consent to the minor’s use of
            the Services.
          </p>
        </PolicySection>

        <PolicySection
          id="privacyrights"
          title="8. What are your privacy rights?">
          <p>
            Depending on your location and applicable law,
            you may have rights including:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              The right to **Access** your personal data.
            </li>
            <li>
              The right to **Correct** inaccurate data.
            </li>
            <li>
              The right to **Delete** your data ("right to
              be forgotten").
            </li>
            <li>
              The right to **Object** to the processing of
              your data.
            </li>
            <li>
              The right to **Withdraw Consent** (where
              consent is the basis for processing).
            </li>
          </ul>
          <p className="mt-4">
            You may exercise these rights by submitting a
            data subject request using the contact details
            provided below.
          </p>
        </PolicySection>

        <PolicySection
          id="DNT"
          title="9. Controls for Do-Not-Track features">
          <p>
            Most web browsers and some mobile operating
            systems include a **Do-Not-Track (“DNT”) feature
            or setting** you can activate to signal your
            privacy preference not to have data about your
            online browsing activities monitored and
            collected. Because there is no common technology
            standard for recognizing and implementing DNT
            signals, we currently do not respond to DNT
            browser signals or any other mechanism that
            automatically communicates your choice not to be
            tracked online.
          </p>
        </PolicySection>

        <PolicySection
          id="policyupdates"
          title="10. Do we make updates to this notice?">
          <p>
            We may update this privacy notice from time to
            time. The updated version will be indicated by
            an updated **“Last Updated”** date and is
            effective as soon as it is accessible. We
            encourage you to review this privacy notice
            frequently to be informed of how we are
            protecting your information.
          </p>
        </PolicySection>

        <PolicySection
          id="contact"
          title="11. How can you contact us about this notice?">
          {contactDetails}
        </PolicySection>

        <PolicySection
          id="request"
          title="12. How can you review, update, or delete the data we collect?">
          <p>
            Based on the applicable laws of your country,
            you may have the right to request access to the
            personal information we collect from you, change
            that information, or delete it. To submit a
            request, please contact us using the methods in
            section 11 (How can you contact us about this
            notice?). We will consider and act on any
            request in accordance with applicable data
            protection laws.
          </p>
        </PolicySection>
      </div>
      {/* --- END FULL POLICY TEXT --- */}
    </section>
  );
}
