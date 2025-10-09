import { RSVPForm } from "../../forms/Rsvp-form";

export default function FormSection() {
  return (
    <section className="m-2">
      <h3 className="text-4xl font-semibold text-center elegant">
        Confirmacion de asistencia
      </h3>
      <RSVPForm />
    </section>
  );
}
