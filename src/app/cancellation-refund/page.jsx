import { site } from "@/data/site";
import PolicyPage, { PolicySection } from "@/components/PolicyPage";

export const metadata = {
  title: "Cancellation & Refund Policy",
  description:
    "Cancellation and refund terms for OTHSAL Tour & Travel bookings. The booking advance is non-refundable; please read before you confirm a tour.",
};

export default function CancellationRefundPage() {
  return (
    <PolicyPage
      eyebrow="Policies"
      title="Cancellation & Refund Policy"
      intro="Please read these terms carefully before confirming a booking. By paying the advance you agree to the cancellation and refund terms below."
      updated="10 June 2026"
    >
      <PolicySection heading="1. Booking advance is non-refundable">
        <p>
          To confirm a tour you pay a small advance which locks your dates and
          lets us begin arranging permits, transport and accommodation.{" "}
          <strong className="text-stone-900">
            This advance payment is non-refundable.
          </strong>{" "}
          If you cancel your tour for any reason after paying the advance, the
          advance amount will not be returned.
        </p>
        <p>
          The advance covers the cost of holding your booking and the
          non-recoverable arrangements we make on your behalf as soon as you
          confirm.
        </p>
      </PolicySection>

      <PolicySection heading="2. Cancellation by you">
        <p>
          To cancel a confirmed booking, notify us as early as possible by phone,
          email or WhatsApp. Cancellation takes effect from the time we receive
          your written request (email or WhatsApp message).
        </p>
        <ul className="ml-5 list-disc space-y-1.5">
          <li>The booking advance is non-refundable in all cases.</li>
          <li>
            Any balance amount you have paid beyond the advance may be eligible
            for a partial refund depending on how close to the travel date you
            cancel and what costs we have already committed (permits, hotel and
            transport bookings, etc.).
          </li>
          <li>
            Refunds of any eligible balance are processed to the original payment
            method within 7–10 working days of confirming the cancellation.
          </li>
        </ul>
      </PolicySection>

      <PolicySection heading="3. Cancellation by us">
        <p>
          In rare cases we may have to cancel or reschedule a tour due to reasons
          beyond our control — extreme weather, road or pass closures, natural
          events, government restrictions or other force-majeure situations.
        </p>
        <ul className="ml-5 list-disc space-y-1.5">
          <li>
            Wherever possible we will offer you an alternative date, an alternative
            itinerary of similar value, or a travel credit.
          </li>
          <li>
            If no alternative works for you and we cancel the trip entirely, we
            will refund the amounts you have paid for services we are still able
            to cancel without loss. Costs already spent on non-refundable permits
            or third-party bookings may be deducted.
          </li>
        </ul>
      </PolicySection>

      <PolicySection heading="4. No-shows & early departure">
        <p>
          If you fail to join the tour at the scheduled start without prior
          notice, or you leave the tour part-way through for personal reasons, no
          refund will be given for the unused portion of the trip.
        </p>
      </PolicySection>

      <PolicySection heading="5. Mountain & high-altitude conditions">
        <p>
          Ladakh is a remote, high-altitude region. Itineraries may change on the
          ground for your safety or due to conditions outside our control. Such
          changes are not grounds for a refund, though we will always do our best
          to deliver an equivalent experience.
        </p>
      </PolicySection>

      <PolicySection heading="6. How to request a cancellation">
        <p>
          Send your cancellation request with your name, tour and travel dates to:
        </p>
        <ul className="ml-5 list-disc space-y-1.5">
          <li>
            Email:{" "}
            <a href={`mailto:${site.email}`} className="text-brand-700 underline">
              {site.email}
            </a>
          </li>
          <li>
            Phone / WhatsApp:{" "}
            <a href={`tel:${site.phone}`} className="text-brand-700 underline">
              {site.phone}
            </a>
          </li>
        </ul>
      </PolicySection>
    </PolicyPage>
  );
}
