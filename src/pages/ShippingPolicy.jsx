import React from "react";

export default function ShippingPolicy({
  lastUpdated = "January 01, 2025",
  termsUrl = "https://studx.in/terms-of-use.html",
  refundUrl = "https://studx.in/refund-policy.html",
  contactEmail = "support@studx.in",
  contactPhone = "+91 7559 28 7198",
  domesticOnly = true,
  rates = [
    { method: "Courier", eta: "3–5 days", fee: "Rs.50" },
  ],
}) {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">
            Shipping & Delivery Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last updated: {lastUpdated}
          </p>
        </header>

        <article className="space-y-10 text-slate-800">
          <section>
            <p className="text-slate-700">
              This Shipping &amp; Delivery Policy is part of
              our Terms of Use and should be read alongside
              the Terms. See{" "}
              <a
                href={termsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline">
                Terms of Use
              </a>
              .
            </p>
            <p className="mt-4 text-slate-700">
              Please carefully review this policy when
              purchasing our products. This policy applies
              to any order you place with us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium">
              What are my shipping options?
            </h2>
            <p className="mt-2 text-slate-700">
              We offer various shipping options. In some
              cases, a third‑party supplier may manage our
              inventory and handle shipping for your order.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="min-w-[480px] w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-300 text-left">
                    <th className="py-2 pr-4 text-slate-600">
                      Shipping Method
                    </th>
                    <th className="py-2 pr-4 text-slate-600">
                      Estimated Time
                    </th>
                    <th className="py-2 text-slate-600">
                      Shipping Fee
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rates.map((r, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-slate-200">
                      <td className="py-3 pr-4">
                        {r.method}
                      </td>
                      <td className="py-3 pr-4">
                        {r.eta ?? "—"}
                      </td>
                      <td className="py-3">{r.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-slate-700">
              All times and dates for delivery are provided
              in good faith and are estimates only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium">
              Do you deliver internationally?
            </h2>
            <p className="mt-2 text-slate-700">
              {domesticOnly
                ? "We currently do not offer international shipping."
                : "Yes, we offer international shipping to selected countries. Duties and taxes may apply at delivery."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium">
              Questions about returns?
            </h2>
            <p className="mt-2 text-slate-700">
              If you have questions about returns, please
              review our{" "}
              <a
                href={refundUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline">
                Refund Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium">
              How can you contact us about this policy?
            </h2>
            <ul className="mt-2 space-y-1 text-slate-700">
              <li>Phone: {contactPhone}</li>
              <li>
                Email:{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-blue-600 hover:underline">
                  {contactEmail}
                </a>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </section>
  );
}
