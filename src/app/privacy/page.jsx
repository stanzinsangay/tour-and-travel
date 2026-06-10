import { site } from "@/data/site";
import PolicyPage, { PolicySection } from "@/components/PolicyPage";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How OTSAL Tour & Travel collects, uses and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <PolicyPage
      eyebrow="Policies"
      title="Privacy Policy"
      intro="We respect your privacy. This policy explains what information we collect when you enquire or book, and how we use it."
      updated="10 June 2026"
    >
      <PolicySection heading="1. What we collect">
        <p>
          When you submit an enquiry or booking we collect the details you provide
          — your name, phone / WhatsApp number, email, selected tour, travel dates,
          number of travellers and any message. We may also receive a payment
          screenshot you send us to confirm your advance.
        </p>
      </PolicySection>

      <PolicySection heading="2. How we use it">
        <ul className="ml-5 list-disc space-y-1.5">
          <li>To respond to your enquiry and plan your tour.</li>
          <li>To confirm bookings, payments and travel arrangements.</li>
          <li>To contact you about your trip before, during and after travel.</li>
        </ul>
        <p>
          We do not sell your personal information to anyone.
        </p>
      </PolicySection>

      <PolicySection heading="3. Sharing">
        <p>
          We share your details only with the service providers needed to deliver
          your tour — such as hotels, homestays, drivers and permit authorities —
          and only as far as required to run your trip. We may use messaging
          services like WhatsApp and email to communicate with you.
        </p>
      </PolicySection>

      <PolicySection heading="4. Payment information">
        <p>
          Advance payments are made directly through your own UPI app or bank. We
          do not collect or store your card numbers, UPI PIN or banking
          credentials. Any payment screenshot you share is used only to verify
          your advance.
        </p>
      </PolicySection>

      <PolicySection heading="5. Data retention">
        <p>
          We keep your booking details for as long as needed to provide our
          services and to meet legal or accounting requirements, after which they
          are removed.
        </p>
      </PolicySection>

      <PolicySection heading="6. Your choices">
        <p>
          You can ask us to update or delete your personal information at any time
          by contacting{" "}
          <a href={`mailto:${site.email}`} className="text-brand-700 underline">
            {site.email}
          </a>
          .
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
