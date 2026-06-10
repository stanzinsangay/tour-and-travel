import { site } from "@/data/site";
import PolicyPage, { PolicySection } from "@/components/PolicyPage";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for booking tours with OTHSAL Tour & Travel, Leh, Ladakh.",
};

export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Policies"
      title="Terms & Conditions"
      intro="These terms govern your booking and travel with OTHSAL Tour & Travel. By booking a tour with us you agree to the conditions below."
      updated="10 June 2026"
    >
      <PolicySection heading="1. Bookings & confirmation">
        <p>
          A booking is confirmed only once we receive your advance payment and
          send you a confirmation. Quoted prices are per person and may change
          until a booking is confirmed. The advance is non-refundable — see our{" "}
          <a href="/cancellation-refund" className="text-brand-700 underline">
            Cancellation & Refund Policy
          </a>
          .
        </p>
      </PolicySection>

      <PolicySection heading="2. Payments">
        <p>
          You pay a small advance to confirm your dates; the balance is payable
          on arrival in Leh unless agreed otherwise. We currently accept payment
          by UPI and bank transfer. Your booking is treated as confirmed once we
          have verified your advance payment.
        </p>
      </PolicySection>

      <PolicySection heading="3. What's included & excluded">
        <p>
          Each tour page lists exactly what is included and excluded. Anything not
          listed as included — such as airfare, personal expenses, tips, travel
          insurance and entry fees not mentioned — is payable by you.
        </p>
      </PolicySection>

      <PolicySection heading="4. Your responsibilities">
        <ul className="ml-5 list-disc space-y-1.5">
          <li>
            Carry valid government photo ID and any permits we advise; some areas
            of Ladakh require Inner Line Permits.
          </li>
          <li>
            Ensure you are medically fit for high-altitude travel and disclose any
            condition that may affect your trip.
          </li>
          <li>
            Arrange your own travel and medical insurance — we strongly recommend
            it for all Himalayan travel.
          </li>
          <li>Respect local customs, monasteries, wildlife and the environment.</li>
        </ul>
      </PolicySection>

      <PolicySection heading="5. Itinerary changes">
        <p>
          Itineraries may change due to weather, road or pass conditions, permit
          availability or other factors beyond our control. We will always aim to
          provide an equivalent experience, but cannot be held liable for changes
          caused by such circumstances.
        </p>
      </PolicySection>

      <PolicySection heading="6. Liability">
        <p>
          OTHSAL Tour & Travel acts in good faith to arrange safe, well-run trips.
          We are not liable for loss, injury, delay or damage arising from events
          beyond our reasonable control, including force-majeure events, acts of
          government, illness, or your own actions. Travel in Ladakh is undertaken
          at your own risk.
        </p>
      </PolicySection>

      <PolicySection heading="7. Contact">
        <p>
          For any questions about these terms, reach us at{" "}
          <a href={`mailto:${site.email}`} className="text-brand-700 underline">
            {site.email}
          </a>{" "}
          or{" "}
          <a href={`tel:${site.phone}`} className="text-brand-700 underline">
            {site.phone}
          </a>
          .
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
