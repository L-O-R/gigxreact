import React from "react";

// --- Helper Component for Consistent Section Rendering ---
const PolicySection = ({ id, title, children }) => (
  <section
    id={id}
    className="pt-6 md:pt-10 mb-8 border-t border-slate-200 scroll-mt-24">
    <h2 className="text-2xl font-semibold mb-4 text-slate-900">
      {title}
    </h2>
    <div className="text-slate-700 space-y-4">
      {children}
    </div>
  </section>
);

// --- Content Structure ---
// Defines the structure for the Table of Contents and anchors
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

// Content for the body of the terms (JSX is used for complex content like lists)
const termsContent = ({
  productName,
  orgName,
  websiteUrl,
  contactEmail,
}) => ({
  services: (
    <p>
      The Services are intended for users who are at least
      18 years old. All information provided on the Services
      is not intended for distribution to or use by any
      person or entity in any jurisdiction or country where
      such distribution or use would be contrary to law or
      regulation. Users accessing the Services from other
      jurisdictions are responsible for compliance with
      local laws.
    </p>
  ),
  ip: (
    <>
      <h3 className="text-xl font-medium mt-6 text-slate-800">
        Our Intellectual Property
      </h3>
      <p>
        The Services, including all source code, databases,
        functionality, software, website designs, audio,
        video, text, photographs, and graphics
        (collectively, the "Content") and the trademarks,
        service marks, and logos contained therein (the
        "Marks"), are owned or controlled by us or licensed
        to us, and are protected by copyright and trademark
        laws.
      </p>

      <h3 className="text-xl font-medium mt-6 text-slate-800">
        Your Use of Our Services
      </h3>
      <p>
        You are granted a non-exclusive, non-transferable,
        revocable license to access and use the Services
        strictly for your personal, non-commercial or
        internal business use.
      </p>
      <ul className="list-disc pl-5">
        <li>
          You may not copy, reproduce, distribute, or
          otherwise exploit the Content or Marks without our
          prior written permission.
        </li>
        <li>
          You agree not to modify, translate, adapt, edit,
          or decompile any portion of the Services.
        </li>
      </ul>
    </>
  ),
  userReps: (
    <>
      <p>
        By using the Services, you represent and warrant
        that:
      </p>
      <ul className="list-disc pl-5">
        <li>
          You have the legal capacity and you agree to
          comply with these Legal Terms.
        </li>
        <li>
          You are **not a minor** in the jurisdiction in
          which you reside.
        </li>
        <li>
          You will not access the Services through automated
          or non-human means (e.g., bot, script) unless
          explicitly permitted.
        </li>
        <li>
          Your use of the Services will not violate any
          applicable law or regulation.
        </li>
      </ul>
    </>
  ),
  prohibited: (
    <>
      <p>
        You may not access or use the Services for any
        purpose other than that for which we make the
        Services available. The following activities are
        **prohibited**:
      </p>
      <ul className="list-disc pl-5">
        <li>
          No **systematic retrieval** of data or content
          (scraping) without written permission.
        </li>
        <li>
          No **deception, interference with security
          features**, or unauthorized attempts to bypass
          measures.
        </li>
        <li>
          No **harassment, abuse, or disparagement** of any
          person using the Services.
        </li>
        <li>
          No **uploading or transmission** of viruses,
          malware, or excessive spam.
        </li>
        <li>
          No unauthorized **framing or linking** to the
          Services.
        </li>
      </ul>
    </>
  ),
  ugc: (
    <p>
      If the Services allow you to post or submit content
      (e.g., job reviews, profile details, comments), You
      are solely responsible for the content you create and
      submit ("Contributions"). By providing Contributions,
      you affirm that you own or have the necessary
      licenses, rights, and permissions to use and authorize
      us to use your Contributions as described in these
      Terms. Do not submit unlawful or infringing content.
    </p>
  ),
  license: (
    <p>
      You grant us a **non-exclusive, royalty-free,
      perpetual, and irrevocable license** to use,
      reproduce, adapt, publish, translate, and distribute
      any feedback, suggestions, or Contributions you
      provide, without compensation to you. This license is
      necessary for operating, promoting, and improving the
      Services.
    </p>
  ),
  reviews: (
    <p>
      We reserve the right, but not the obligation, to: (1)
      monitor the Services for violations; (2) take
      appropriate legal action against anyone who violates
      the law or these Terms; (3) restrict or remove
      content; and (4) otherwise manage the Services in a
      manner designed to protect our rights and property and
      to facilitate their proper functioning.
    </p>
  ),
  term: (
    <p>
      These Legal Terms shall remain in full force and
      effect while you use the Services. We may **terminate
      or suspend your rights to use the Services** at any
      time, for any reason, or for no reason, at our sole
      discretion, and without notice or liability.
    </p>
  ),
  interruptions: (
    <p>
      We may modify, suspend, or discontinue the Services
      (or any part thereof) at any time, for any reason,
      without notice. We will **not be liable to you for any
      loss or damage** caused by such modifications, price
      changes, suspension, or discontinuance. We cannot
      guarantee the Services will be available at all times.
    </p>
  ),
  law: (
    <p>
      These Legal Terms and your use of the Services are
      governed by and construed in accordance with the laws
      of **India**, without regard to its conflict of law
      principles.
    </p>
  ),
  disputes: (
    <p>
      Any legal dispute, action, or proceeding arising out
      of or related to these Terms shall be subject to the
      exclusive jurisdiction of the courts located in
      **Pune, Maharashtra, India**. The parties agree to
      first attempt informal negotiation of any dispute for
      at least thirty (30) days before initiating
      arbitration or court proceedings.
    </p>
  ),
  corrections: (
    <p>
      There may be information on the Services that contains
      typographical errors, inaccuracies, or omissions. We
      reserve the right to correct any errors, inaccuracies,
      or omissions and to change or update the information
      at any time, without prior notice.
    </p>
  ),
  disclaimer: (
    <>
      <p>
        The Services are provided on an **"as-is" and
        "as-available"** basis. You agree that your use of
        the Services will be at your sole risk.
      </p>
      <p className="font-bold text-red-700">
        WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
        INCLUDING, WITHOUT LIMITATION, THE IMPLIED
        WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
      </p>
      <p>
        We make no warranties or representations about the
        accuracy or completeness of the Services' content.
      </p>
    </>
  ),
  liability: (
    <p>
      In no event will we or our directors, employees, or
      agents be liable to you or any third party for any
      direct, indirect, consequential, exemplary,
      incidental, special, or punitive damages, including
      lost profit, lost revenue, loss of data, or other
      damages arising from your use of the Services, **even
      if we have been advised of the possibility of such
      damages.**
    </p>
  ),
  indemnification: (
    <p>
      You agree to defend, indemnify, and hold us harmless
      from and against any loss, damage, liability, claim,
      or demand made by any third party due to or arising
      out of: (1) your Contributions; (2) your use of the
      Services; (3) your breach of these Legal Terms; (4)
      any breach of your representations and warranties; or
      (5) your violation of the rights of a third party,
      including intellectual property rights.
    </p>
  ),
  userdata: (
    <p>
      We will maintain certain data that you transmit to the
      Services for the purpose of managing the performance
      of the Services. Although we perform regular routine
      backups, **you are solely responsible for all data
      that you transmit** or that relates to any activity
      you have undertaken using the Services. You agree that
      we shall have no liability to you for any loss or
      corruption of any such data.
    </p>
  ),
  electronic: (
    <p>
      You consent to receive electronic communications, and
      you agree that all agreements, notices, disclosures,
      and other communications we provide to you
      electronically, satisfy any legal requirement that
      such communications be in writing. You hereby agree to
      the use of electronic signatures, contracts, and
      records.
    </p>
  ),
  misc: (
    <p>
      These Legal Terms constitute the entire agreement
      between you and us. Our failure to exercise or enforce
      any right or provision of these Legal Terms shall not
      operate as a waiver of such right or provision. If any
      provision is deemed unlawful, void, or unenforceable,
      that provision is deemed severable and does not affect
      the validity and enforceability of any remaining
      provisions.
    </p>
  ),
  contact: (
    <>
      <p>
        In order to resolve a complaint or receive further
        information regarding use of the Services, please
        contact us at:
      </p>
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
    </>
  ),
});

// --- Main Component ---
export default function TermsCondition({
  orgName = "STUDX Management Private Limited",
  productName = "GigX",
  websiteUrl = "https://studx.in",
  contactEmail = "support@studx.in",
  lastUpdated = "January 01, 2025",
}) {
  const content = termsContent({
    orgName,
    productName,
    websiteUrl,
    contactEmail,
  });

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-7xl px-4 py-12">
        <header className="mb-10 border-b border-slate-200 pb-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Terms of Use
          </h1>
          <p className="mt-2 text-base text-slate-500">
            Last updated {lastUpdated}
          </p>
        </header>

        <p className="mb-8 text-slate-700 leading-relaxed text-lg">
          These Legal Terms constitute a **binding
          agreement** between you (the user) and **{orgName}
          ** concerning your access to and use of **
          {productName}** (the "Services"). By accessing or
          using the Services, you agree to be bound by these
          Legal Terms. **If you do not agree with all of
          these Legal Terms, then you are expressly
          prohibited from using the Services and must
          discontinue use immediately.**
        </p>

        {/* --- Table of Contents --- */}
        <nav
          aria-label="Table of contents"
          className="mb-12 p-4 border rounded-lg bg-white shadow-md">
          <h3 className="mb-3 text-lg font-semibold text-slate-800">
            Table of Contents
          </h3>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors text-sm">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* --- End Table of Contents --- */}

        {/* --- Content Sections --- */}
        <div className="space-y-12">
          <PolicySection
            id="services"
            title={
              toc.find((i) => i.id === "services").title
            }>
            {content.services}
          </PolicySection>

          <PolicySection
            id="ip"
            title={toc.find((i) => i.id === "ip").title}>
            {content.ip}
          </PolicySection>

          <PolicySection
            id="user-reps"
            title={
              toc.find((i) => i.id === "user-reps").title
            }>
            {content.userReps}
          </PolicySection>

          <PolicySection
            id="prohibited"
            title={
              toc.find((i) => i.id === "prohibited").title
            }>
            {content.prohibited}
          </PolicySection>

          <PolicySection
            id="ugc"
            title={toc.find((i) => i.id === "ugc").title}>
            {content.ugc}
          </PolicySection>

          <PolicySection
            id="license"
            title={
              toc.find((i) => i.id === "license").title
            }>
            {content.license}
          </PolicySection>

          <PolicySection
            id="reviews"
            title={
              toc.find((i) => i.id === "reviews").title
            }>
            {content.reviews}
          </PolicySection>

          <PolicySection
            id="term"
            title={toc.find((i) => i.id === "term").title}>
            {content.term}
          </PolicySection>

          <PolicySection
            id="interruptions"
            title={
              toc.find((i) => i.id === "interruptions")
                .title
            }>
            {content.interruptions}
          </PolicySection>

          <PolicySection
            id="law"
            title={toc.find((i) => i.id === "law").title}>
            {content.law}
          </PolicySection>

          <PolicySection
            id="disputes"
            title={
              toc.find((i) => i.id === "disputes").title
            }>
            {content.disputes}
          </PolicySection>

          <PolicySection
            id="corrections"
            title={
              toc.find((i) => i.id === "corrections").title
            }>
            {content.corrections}
          </PolicySection>

          <PolicySection
            id="disclaimer"
            title={
              toc.find((i) => i.id === "disclaimer").title
            }>
            {content.disclaimer}
          </PolicySection>

          <PolicySection
            id="liability"
            title={
              toc.find((i) => i.id === "liability").title
            }>
            {content.liability}
          </PolicySection>

          <PolicySection
            id="indemnification"
            title={
              toc.find((i) => i.id === "indemnification")
                .title
            }>
            {content.indemnification}
          </PolicySection>

          <PolicySection
            id="userdata"
            title={
              toc.find((i) => i.id === "userdata").title
            }>
            {content.userdata}
          </PolicySection>

          <PolicySection
            id="electronic"
            title={
              toc.find((i) => i.id === "electronic").title
            }>
            {content.electronic}
          </PolicySection>

          <PolicySection
            id="misc"
            title={toc.find((i) => i.id === "misc").title}>
            {content.misc}
          </PolicySection>

          <PolicySection
            id="contact"
            title={
              toc.find((i) => i.id === "contact").title
            }>
            {content.contact}
          </PolicySection>
        </div>
        {/* --- End Content Sections --- */}
      </div>
    </section>
  );
}
