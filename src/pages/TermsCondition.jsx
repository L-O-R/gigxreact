import React from "react";

const toc = [
  { id: "services", title: "1. Our Services" },
  { id: "ip", title: "2. Intellectual Property Rights" },
  { id: "user-reps", title: "3. User Representations" },
  { id: "prohibited", title: "4. Prohibited Activities" },
  { id: "ugc", title: "5. User Generated Contributions" },
  { id: "license", title: "6. Contribution License" },
  { id: "reviews", title: "7. Services Management" },
  { id: "term", title: "8. Term and Termination" },
  {
    id: "interruptions",
    title: "9. Modifications and Interruptions",
  },
  { id: "law", title: "10. Governing Law" },
  { id: "disputes", title: "11. Dispute Resolution" },
  { id: "corrections", title: "12. Corrections" },
  { id: "disclaimer", title: "13. Disclaimer" },
  {
    id: "liability",
    title: "14. Limitations of Liability",
  },
  { id: "indemnification", title: "15. Indemnification" },
  { id: "userdata", title: "16. User Data" },
  {
    id: "electronic",
    title: "17. Electronic Communications",
  },
  { id: "misc", title: "18. Miscellaneous" },
  { id: "contact", title: "19. Contact Us" },
];

export default function TermsCondition({
  orgName = "STUDX Management Private Limited",
  productName = "GigX",
  websiteUrl = "https://studx.in",
  contactEmail = "support@studx.in",
  lastUpdated = "January 01, 2025",
}) {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-7xl px-4 py-12">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">
            Terms of Use
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last updated {lastUpdated}
          </p>
        </header>

        <p className="mb-8 text-slate-700">
          These Legal Terms are a binding agreement between
          you and {orgName} concerning your access to and
          use of {productName} and related services; if you
          do not agree, discontinue use immediately.
        </p>

        <nav
          aria-label="Table of contents"
          className="mb-12">
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-blue-600 hover:underline">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="prose prose-slate max-w-none">
          <section id="services" className="scroll-mt-24">
            <h2>1. Our Services</h2>
            <p>
              Information provided via the Services is not
              intended for distribution or use where such
              would be unlawful; users accessing from other
              jurisdictions are responsible for local
              compliance.
            </p>
          </section>

          <section id="ip" className="mt-10 scroll-mt-24">
            <h2>2. Intellectual Property Rights</h2>
            <h3>Our intellectual property</h3>
            <p>
              The Services, including source code,
              databases, software, designs, text, media, and
              trademarks, are owned or licensed by us and
              protected by applicable law; provided “as is”
              for personal, non-commercial or internal
              business use.
            </p>
            <h3>Your use of our Services</h3>
            <ul>
              <li>
                Access the Services and download/print
                permitted Content you properly access.
              </li>
              <li>
                No other copying, distribution, display, or
                exploitation without prior written
                permission.
              </li>
            </ul>
          </section>

          <section
            id="user-reps"
            className="mt-10 scroll-mt-24">
            <h2>3. User Representations</h2>
            <ul>
              <li>
                You have legal capacity and agree to these
                Terms.
              </li>
              <li>You are not a minor where you reside.</li>
              <li>
                No automated/non-human access methods.
              </li>
              <li>
                No unlawful or unauthorized purpose; comply
                with laws.
              </li>
            </ul>
          </section>

          <section
            id="prohibited"
            className="mt-10 scroll-mt-24">
            <h2>4. Prohibited Activities</h2>
            <ul>
              <li>
                No data scraping or compiling without
                permission.
              </li>
              <li>
                No deception, security interference,
                disparagement, or harassment.
              </li>
              <li>
                No malware, spam, or automated system abuse.
              </li>
              <li>
                Comply with all applicable laws and
                restrictions.
              </li>
            </ul>
          </section>

          <section id="ugc" className="mt-10 scroll-mt-24">
            <h2>5. User Generated Contributions</h2>
            <p>
              If contributions are allowed, you are
              responsible for content and grant rights as
              applicable; do not submit unlawful or
              infringing content.
            </p>
          </section>

          <section
            id="license"
            className="mt-10 scroll-mt-24">
            <h2>6. Contribution License</h2>
            <p>
              By submitting feedback or contributions, you
              grant rights to use and share as permitted by
              law without compensation, subject to posted
              policies.
            </p>
          </section>

          <section
            id="reviews"
            className="mt-10 scroll-mt-24">
            <h2>7. Services Management</h2>
            <p>
              We may monitor, restrict, or remove content,
              manage load, and enforce policies to protect
              the Services.
            </p>
          </section>

          <section id="term" className="mt-10 scroll-mt-24">
            <h2>8. Term and Termination</h2>
            <p>
              We may deny access at our discretion for
              violations; termination can include removal of
              content and legal action where appropriate.
            </p>
          </section>

          <section
            id="interruptions"
            className="mt-10 scroll-mt-24">
            <h2>9. Modifications and Interruptions</h2>
            <p>
              Content and availability may change without
              notice; we are not liable for downtime or
              discontinuance.
            </p>
          </section>

          <section id="law" className="mt-10 scroll-mt-24">
            <h2>10. Governing Law</h2>
            <p>
              These Terms are governed by applicable law in
              the relevant jurisdiction as specified by your
              policy.
            </p>
          </section>

          <section
            id="disputes"
            className="mt-10 scroll-mt-24">
            <h2>11. Dispute Resolution</h2>
            <p>
              Disputes may involve informal negotiations,
              arbitration limits, and enumerated exceptions
              per your finalized policy.
            </p>
          </section>

          <section
            id="corrections"
            className="mt-10 scroll-mt-24">
            <h2>12. Corrections</h2>
            <p>
              Errors or omissions can be corrected and
              information updated at any time without prior
              notice.
            </p>
          </section>

          <section
            id="disclaimer"
            className="mt-10 scroll-mt-24">
            <h2>13. Disclaimer</h2>
            <p>
              Services are provided “as is” and “as
              available”; warranties are disclaimed to the
              fullest extent permitted by law.
            </p>
          </section>

          <section
            id="liability"
            className="mt-10 scroll-mt-24">
            <h2>14. Limitations of Liability</h2>
            <p>
              Liability is limited as specified in your
              finalized policy language and applicable law.
            </p>
          </section>

          <section
            id="indemnification"
            className="mt-10 scroll-mt-24">
            <h2>15. Indemnification</h2>
            <p>
              You agree to defend and hold harmless the
              organization from claims arising from your use
              and violations of these Terms.
            </p>
          </section>

          <section
            id="userdata"
            className="mt-10 scroll-mt-24">
            <h2>16. User Data</h2>
            <p>
              We may retain certain data for operations; you
              are responsible for your backups and
              acknowledge risks of loss or corruption.
            </p>
          </section>

          <section
            id="electronic"
            className="mt-10 scroll-mt-24">
            <h2>17. Electronic Communications</h2>
            <p>
              You consent to electronic records, notices,
              and signatures where legally valid, waiving
              requirements for non-electronic originals.
            </p>
          </section>

          <section id="misc" className="mt-10 scroll-mt-24">
            <h2>18. Miscellaneous</h2>
            <p>
              These Terms constitute the entire agreement;
              non-enforcement is not a waiver; severability
              and assignment provisions apply.
            </p>
          </section>

          <section
            id="contact"
            className="mt-10 scroll-mt-24">
            <h2>19. Contact Us</h2>
            <p className="mb-2">
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
        </article>
      </div>
    </section>
  );
}
