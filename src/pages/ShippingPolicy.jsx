import React from "react";

// Reusable styling for the main content block
const PolicyContent = ({ children }) => (
  <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
    {children}
  </div>
);

// Reusable styling for the section headings
const PolicyHeading = ({ children }) => (
  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 pt-6 mt-8 border-t border-slate-200">
    {children}
  </h2>
);

export default function ShippingPolicy({
  lastUpdated = "January 01, 2025",
  termsUrl = "/terms-of-use.html",
  refundUrl = "/refund-policy.html",
  contactEmail = "support@studx.in",
  contactPhone = "+91 7559 28 7198",
  domesticOnly = true,
  rates = [
    {
      method: "Standard Courier",
      eta: "3–5 business days",
      fee: "Rs.50",
    },
    {
      method: "Express Shipping",
      eta: "1–2 business days",
      fee: "Rs.150",
    },
  ],
  processingTime = "1–2 business days",
}) {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <header className="mb-10 border-b border-slate-200 pb-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Shipping & Delivery Policy
          </h1>
          <p className="mt-2 text-base text-slate-500">
            Last updated: {lastUpdated}
          </p>
        </header>

        <article className="space-y-10 text-slate-800">
          <PolicyContent>
            <p>
              This Shipping &amp; Delivery Policy is part of
              our **Terms of Use** and should be read
              alongside the Terms. Please review our{" "}
              <a
                href={termsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline">
                Terms of Use
              </a>
              .
            </p>
            <p>
              Please carefully review this policy when
              purchasing our products. This policy applies
              to any order you place with us.
            </p>
          </PolicyContent>

          <PolicyHeading>
            Order Processing Time
          </PolicyHeading>
          <PolicyContent>
            <p>
              All orders are processed and shipped from our
              warehouse within **{processingTime}**
              (excluding weekends and holidays) after
              receiving your order confirmation email. You
              will receive another notification when your
              order has shipped, which will include tracking
              information.
            </p>
            <p>
              During peak seasons or promotional periods,
              processing times may be slightly extended.
            </p>
          </PolicyContent>

          <PolicyHeading>
            Shipping Options and Rates
          </PolicyHeading>
          <PolicyContent>
            <p>
              We offer various shipping options. In some
              cases, a third-party supplier or courier
              service may manage our inventory and handle
              shipping for your order.
            </p>
          </PolicyContent>

          {/* Shipping Rates Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-[480px] w-full border-collapse border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-50">
                <tr className="border-b border-slate-300 text-left">
                  <th className="py-3 px-4 text-slate-600 font-semibold">
                    Shipping Method
                  </th>
                  <th className="py-3 px-4 text-slate-600 font-semibold">
                    Estimated Delivery Time (ETA)
                  </th>
                  <th className="py-3 px-4 text-slate-600 font-semibold">
                    Shipping Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-medium">
                      {r.method}
                    </td>
                    <td className="py-3 px-4 text-slate-600">
                      {r.eta ?? "—"}
                    </td>
                    <td className="py-3 px-4 font-semibold text-green-700">
                      {r.fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <PolicyContent>
            <p>
              All times and dates for delivery are provided
              in good faith and are **estimates only**. The
              actual delivery time may vary due to external
              factors like weather conditions, courier
              delays, or local holidays.
            </p>
          </PolicyContent>

          <PolicyHeading>
            International Shipping Policy
          </PolicyHeading>
          <PolicyContent>
            {domesticOnly ? (
              <p className="font-semibold text-red-700">
                We currently **do not offer international
                shipping**. We only ship within the domestic
                region. Any orders placed with international
                destinations will be canceled and refunded.
              </p>
            ) : (
              <>
                <p>
                  Yes, we offer international shipping to
                  selected countries.
                </p>
                <p>
                  Your order may be subject to **import
                  duties and taxes** (including VAT), which
                  are incurred once a shipment reaches your
                  destination country. We are not
                  responsible for these charges if they are
                  applied and are your responsibility as the
                  customer.
                </p>
              </>
            )}
          </PolicyContent>

          <PolicyHeading>Tracking Your Order</PolicyHeading>
          <PolicyContent>
            <p>
              Once your order has shipped, we will send you
              an email notification including a tracking
              number you can use to check its status. Please
              allow **48 hours** for the tracking
              information to become available.
            </p>
            <p>
              If you haven't received your order within **
              {rates[0].eta.split("–")[1].trim()}** of
              receiving your shipping confirmation email,
              please contact us at{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-blue-600 hover:underline">
                {contactEmail}
              </a>{" "}
              with your name and order number, and we will
              look into it for you.
            </p>
          </PolicyContent>

          <PolicyHeading>
            Lost or Damaged Packages
          </PolicyHeading>
          <PolicyContent>
            <p>
              If you received your order **damaged**, please
              contact us immediately to file a claim. Please
              save all packaging materials and damaged goods
              before filing a claim.
            </p>
            <p>
              If a package is confirmed lost, we will work
              with the carrier to initiate a recovery or
              replacement process.
            </p>
          </PolicyContent>

          <PolicyHeading>
            Questions About Returns?
          </PolicyHeading>
          <PolicyContent>
            <p>
              If you have questions about returns, please
              review our comprehensive{" "}
              <a
                href={refundUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline">
                Refund and Return Policy
              </a>
              .
            </p>
          </PolicyContent>

          <PolicyHeading>How to Contact Us</PolicyHeading>
          <PolicyContent>
            <p>
              If you have any further questions or comments
              regarding this policy, please reach out:
            </p>
            <ul className="mt-2 space-y-1 text-slate-700 list-none pl-0">
              <li>**Phone:** {contactPhone}</li>
              <li>
                **Email:**{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-blue-600 hover:underline">
                  {contactEmail}
                </a>
              </li>
            </ul>
          </PolicyContent>
        </article>
      </div>
    </section>
  );
}
