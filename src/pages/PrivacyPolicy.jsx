import React from "react";

const sections = [
  {
    id: "infocollect",
    title: "What information do we collect?",
  },
  {
    id: "infouse",
    title: "How do we process your information?",
  },
  {
    id: "whoshare",
    title:
      "When and with whom do we share your personal information?",
  },
  {
    id: "cookies",
    title:
      "Do we use cookies and other tracking technologies?",
  },
  {
    id: "inforetain",
    title: "How long do we keep your information?",
  },
  {
    id: "infosafe",
    title: "How do we keep your information safe?",
  },
  {
    id: "infominors",
    title: "Do we collect information from minors?",
  },
  {
    id: "privacyrights",
    title: "What are your privacy rights?",
  },
  {
    id: "DNT",
    title: "Controls for Do-Not-Track features",
  },
  {
    id: "policyupdates",
    title: "Do we make updates to this notice?",
  },
  {
    id: "contact",
    title: "How can you contact us about this notice?",
  },
  {
    id: "request",
    title:
      "How can you review, update, or delete the data we collect from you?",
  },
];

export default function PrivacyPolicy({
  orgName = "STUDX Management Private Limited",
  appName = "GigX",
  websiteUrl = "https://studx.in",
  contactEmail = "support@studx.in",
  lastUpdated = "January 01, 2025",
}) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 text-slate-800">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Last updated {lastUpdated}
        </p>
      </header>

      <p className="mb-6 text-slate-600">
        This Privacy Notice for {orgName} (“we”, “us”, or
        “our”) describes how and why we access, collect,
        store, use, and share (“process”) personal
        information when you use our services (“Services”),
        including when you visit our website, download or
        use our mobile application {appName}, or engage with
        us in related ways such as sales, marketing, or
        events. If you do not agree with our policies and
        practices, please do not use our Services.
      </p>

      <div className="mb-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
        <h2 className="mb-3 text-xl font-medium">
          Summary of key points
        </h2>
        <p className="text-slate-600">
          This summary highlights key points, but you can
          click a topic below to jump to details.
        </p>
      </div>

      <nav aria-label="Table of contents" className="mb-10">
        <h3 className="mb-3 text-lg font-medium">
          Table of contents
        </h3>
        <ul className="list-inside list-disc space-y-2">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-blue-600 hover:underline">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <article className="prose prose-slate max-w-none">
        <section id="infocollect">
          <h2>1. What information do we collect?</h2>
          <h3>Personal information you disclose to us</h3>
          <p>
            <em>In short:</em> We collect personal
            information that you provide to us, such as
            names, phone numbers, email addresses,
            passwords, and similar data when you register,
            express interest, participate in activities, or
            contact us.
          </p>
          <ul>
            <li>
              Personal information provided by you (e.g.,
              name, phone, email, passwords).
            </li>
            <li>
              Sensitive information (when permitted or with
              consent), e.g., PAN, bank or UPI number.
            </li>
          </ul>
          <h3>Information automatically collected</h3>
          <p>
            <em>In short:</em> We automatically collect
            technical data like IP address, device/browser
            characteristics, OS, language preferences, and
            usage logs for security, operations, analytics,
            and reporting.
          </p>
          <ul>
            <li>
              Log and usage data (timestamps, pages, files
              viewed, searches, errors).
            </li>
            <li>
              Device data (IDs, OS, model, carrier/ISP,
              system configuration).
            </li>
            <li>
              Location data (precise or imprecise, depending
              on device/app permissions).
            </li>
          </ul>
          <h3>Information from other sources</h3>
          <p>
            <em>In short:</em> We may collect limited data
            from public databases, marketing partners,
            affiliate programs, data providers, social
            platforms, and other third parties to improve
            relevance and keep records updated.
          </p>
        </section>

        <section id="infouse">
          <h2>2. How do we process your information?</h2>
          <p>
            <em>In short:</em> We process information to
            provide, improve, and administer the Services,
            communicate with you, ensure security and fraud
            prevention, comply with law, and for other
            purposes with consent.
          </p>
          <ul>
            <li>
              Account creation/authentication and user
              account management.
            </li>
            <li>
              Service delivery, support, troubleshooting,
              and analytics.
            </li>
            <li>
              Security, fraud prevention, and legal
              compliance.
            </li>
            <li>
              Marketing and promotional communications per
              your preferences.
            </li>
          </ul>
        </section>

        <section id="whoshare">
          <h2>
            3. When and with whom do we share personal
            information?
          </h2>
          <p>
            We share in specific situations with service
            providers, affiliates, business partners, or
            when legally required, to operate the Services,
            fulfill contracts, protect rights, or comply
            with laws.
          </p>
        </section>

        <section id="cookies">
          <h2>
            4. Do we use cookies and other tracking
            technologies?
          </h2>
          <p>
            We may use cookies, web beacons, and similar
            technologies for functionality, analytics, and
            personalization. You can control cookies via
            browser settings and consent tools.
          </p>
        </section>

        <section id="inforetain">
          <h2>5. How long do we keep your information?</h2>
          <p>
            We keep personal information for as long as
            necessary to fulfill the purposes described in
            this notice, unless a longer retention period is
            required or permitted by law.
          </p>
        </section>

        <section id="infosafe">
          <h2>6. How do we keep your information safe?</h2>
          <p>
            We use organizational and technical safeguards
            appropriate to the risk. However, no method of
            transmission or storage is 100% secure.
          </p>
        </section>

        <section id="infominors">
          <h2>7. Do we collect information from minors?</h2>
          <p>
            We do not knowingly collect data from or market
            to children. If we learn a minor’s data was
            collected, we will take reasonable steps to
            delete it.
          </p>
        </section>

        <section id="privacyrights">
          <h2>8. What are your privacy rights?</h2>
          <p>
            Depending on your location, you may have rights
            to access, correct, delete, object, restrict
            processing, portability, and withdraw consent
            where applicable.
          </p>
        </section>

        <section id="DNT">
          <h2>9. Controls for Do-Not-Track features</h2>
          <p>
            Most browsers and some mobile OS include a
            Do-Not-Track setting; there is no common
            standard for responding to DNT signals. We will
            update this notice if a standard is adopted.
          </p>
        </section>

        <section id="policyupdates">
          <h2>10. Do we make updates to this notice?</h2>
          <p>
            We may update this notice from time to time. The
            updated version will be indicated by an updated
            “Last Updated” date and is effective when
            posted.
          </p>
        </section>

        <section id="contact">
          <h2>
            11. How can you contact us about this notice?
          </h2>
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
        </section>

        <section id="request">
          <h2>
            12. How can you review, update, or delete the
            data we collect?
          </h2>
          <p>
            You can submit a request to exercise your rights
            via the contact methods above. We will consider
            and act on any request in accordance with
            applicable data protection laws.
          </p>
        </section>
      </article>
    </section>
  );
}
