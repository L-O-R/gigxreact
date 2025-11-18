import React from "react";

// Helper component for styled policy text
const PolicyText = ({ children }) => (
  <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
    {children}
  </div>
);

// Helper component for the Title of each main section
const PolicyHeading = ({ children }) => (
  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 pt-6 mt-8 border-t border-slate-200">
    {children}
  </h2>
);

export default function RefundPolicy({
  companyName = "STUDX Management Private Limited",
  appName = "GigX",
  websiteUrl = "https://studx.in/",
  contactEmail = "support@studx.in",
  lastUpdated = "January 01, 2025",
  companyAddress = "108, StudX, AMC Avenue, NIBM Annexe, Opp. RAHEJA VISTAS PHASE-3, Pune Maharashtra, India 411060",
  returnAddress = "SN 36(P) Flat no D1101 PRISTINE PACIFIC P AMBEGAON BUDRUK, PUNE, Maharashtra, India - 411046",
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      {/* --- Header --- */}
      <header className="mb-10 border-b border-slate-200 pb-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          Return and Refund Policy
        </h1>
        <p className="mt-2 text-base text-slate-500">
          Last updated: {lastUpdated}
        </p>
      </header>

      {/* --- Introduction --- */}
      <PolicyText>
        <p>
          Thank you for visiting the **{appName}** website
          or App.
        </p>
        <p>
          If, for any reason, You are not completely
          satisfied with a purchase, We invite You to review
          our policy on refunds and returns.
        </p>
        <p>
          The following terms are applicable for any
          products or services that You purchase with Us
          through the Service.
        </p>
      </PolicyText>

      {/* --- Interpretation and Definitions --- */}
      <PolicyHeading>
        Interpretation and Definitions
      </PolicyHeading>

      <h3 className="text-xl font-medium mt-4 mb-2 text-slate-800">
        Interpretation
      </h3>
      <PolicyText>
        <p>
          The words of which the initial letter is
          capitalized have meanings defined under the
          following conditions. The following definitions
          shall have the same meaning regardless of whether
          they appear in singular or in plural.
        </p>
      </PolicyText>

      <h3 className="text-xl font-medium mt-4 mb-3 text-slate-800">
        Definitions
      </h3>
      <PolicyText>
        <p>
          For the purposes of this Return and Refund Policy:
        </p>
      </PolicyText>

      {/* Use a Definition List for better semantics */}
      <dl className="space-y-4 border p-4 rounded-lg bg-slate-50">
        <div className="flex flex-col">
          <dt className="text-lg font-semibold text-slate-900">
            Application
          </dt>
          <dd className="text-slate-700">
            Means the software program provided by the
            Company downloaded by You on any electronic
            device, named **{appName}**.
          </dd>
        </div>
        <div className="flex flex-col">
          <dt className="text-lg font-semibold text-slate-900">
            Company
          </dt>
          <dd className="text-slate-700">
            (Referred to as either "the Company", "We", "Us"
            or "Our" in this Agreement) refers to **
            {companyName}**, located at {companyAddress}.
          </dd>
        </div>
        <div className="flex flex-col">
          <dt className="text-lg font-semibold text-slate-900">
            Goods
          </dt>
          <dd className="text-slate-700">
            Refer to the items offered for sale or the
            services procured on the Service.
          </dd>
        </div>
        <div className="flex flex-col">
          <dt className="text-lg font-semibold text-slate-900">
            Orders
          </dt>
          <dd className="text-slate-700">
            Mean a request by You to purchase Goods or
            Services from Us.
          </dd>
        </div>
        <div className="flex flex-col">
          <dt className="text-lg font-semibold text-slate-900">
            Service
          </dt>
          <dd className="text-slate-700">
            Refers to the **{appName}** Application or the
            Website, or both.
          </dd>
        </div>
        <div className="flex flex-col">
          <dt className="text-lg font-semibold text-slate-900">
            Website
          </dt>
          <dd className="text-slate-700">
            Refers to **{appName}**, accessible from{" "}
            <a
              href={websiteUrl}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer">
              {websiteUrl}
            </a>
            .
          </dd>
        </div>
        <div className="flex flex-col">
          <dt className="text-lg font-semibold text-slate-900">
            You
          </dt>
          <dd className="text-slate-700">
            Means the individual accessing or using the
            Service, or the company, or other legal entity
            on behalf of which such individual is accessing
            or using the Service, as applicable.
          </dd>
        </div>
      </dl>

      {/* --- Order Cancellation Rights --- */}
      <PolicyHeading>
        Your Order Cancellation Rights
      </PolicyHeading>
      <PolicyText>
        <p>
          You are entitled to cancel Your Order within **7
          days** without giving any reason for doing so.
        </p>
        <p>
          The deadline for cancelling an Order is **7 days**
          from the date on which You received the Goods or
          on which a third party you have appointed, who is
          not the carrier, takes possession of the product
          delivered.
        </p>
        <p>
          In order to exercise Your right of cancellation,
          You must inform Us of your decision by means of a
          clear statement. You can inform us of your
          decision by:
        </p>
        <ul className="list-disc pl-5">
          <li>
            By email:{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-blue-600 hover:underline">
              {contactEmail}
            </a>
          </li>
          <li>
            By visiting this page on our website:{" "}
            <a
              href={websiteUrl}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer">
              {websiteUrl}
            </a>
          </li>
        </ul>
        <p className="font-semibold text-green-700">
          We will reimburse You no later than **14 days**
          from the day on which We receive the returned
          Goods. We will use the same means of payment as
          You used for the Order, and You will not incur any
          fees for such reimbursement.
        </p>
      </PolicyText>

      {/* --- Conditions for Returns --- */}
      <PolicyHeading>Conditions for Returns</PolicyHeading>
      <PolicyText>
        <p>
          In order for the Goods to be eligible for a
          return, please make sure that:
        </p>
        <ul className="list-disc pl-5">
          <li>
            The Goods were purchased in the last **7 days**.
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2 text-slate-800">
          Goods that Cannot Be Returned
        </h3>
        <p>The following Goods cannot be returned:</p>
        <ul className="list-disc pl-5">
          <li>
            The supply of Goods made to Your specifications
            or clearly **personalized**.
          </li>
          <li>
            The supply of Goods which according to their
            nature are not suitable to be returned,
            **deteriorate rapidly** or where the date of
            expiry is over.
          </li>
          <li>
            The supply of Goods which are not suitable for
            return due to **health protection or hygiene
            reasons** and were unsealed after delivery.
          </li>
          <li>
            The supply of Goods which are, after delivery,
            according to their nature, **inseparably mixed
            with other items**.
          </li>
        </ul>
        <p className="italic">
          We reserve the right to refuse returns of any
          merchandise that does not meet the above return
          conditions in our sole discretion.
        </p>
        <p>
          Only **regular priced** Goods may be refunded.
          Unfortunately, Goods on **sale** cannot be
          refunded. This exclusion may not apply to You if
          it is not permitted by applicable law.
        </p>
      </PolicyText>

      {/* --- Returning Goods --- */}
      <PolicyHeading>Returning Goods</PolicyHeading>
      <PolicyText>
        <p>
          You are responsible for the **cost and risk** of
          returning the Goods to Us. You should send the
          Goods at the following address:
        </p>
        <div className="p-3 bg-slate-100 rounded-lg max-w-sm font-mono text-sm border border-slate-200">
          {returnAddress.split(", ").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <p>
          We cannot be held responsible for Goods damaged or
          lost in return shipment. Therefore, We recommend
          an **insured and trackable mail service**. We are
          unable to issue a refund without actual receipt of
          the Goods or proof of received return delivery.
        </p>
      </PolicyText>

      {/* --- Gifts --- */}
      <PolicyHeading>Gifts</PolicyHeading>
      <PolicyText>
        <p>
          If the Goods were marked as a gift when purchased
          and then shipped directly to you, **You'll receive
          a gift credit** for the value of your return. Once
          the returned product is received, a gift
          certificate will be mailed to You.
        </p>
        <p>
          If the Goods weren't marked as a gift when
          purchased, or the gift giver had the Order shipped
          to themselves to give it to You later, **We will
          send the refund to the gift giver.**
        </p>
      </PolicyText>

      {/* --- Contact Us --- */}
      <PolicyHeading>Contact Us</PolicyHeading>
      <PolicyText>
        <p>
          If you have any questions about our Returns and
          Refunds Policy, please contact us:
        </p>
        <ul className="list-disc pl-5">
          <li>
            By email:{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-blue-600 hover:underline">
              {contactEmail}
            </a>
          </li>
          <li>
            By visiting this page on our website:{" "}
            <a
              href={websiteUrl}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer">
              {websiteUrl}
            </a>
          </li>
        </ul>
      </PolicyText>
    </section>
  );
}
