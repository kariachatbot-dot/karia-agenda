import {
  CheckCircleIcon,
  ChartBarIcon,
  GiftIcon,
  ExclamationTriangleIcon,
  CalendarDaysIcon,
} from "./icons";
import BookingCalendar from "./components/BookingCalendar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-16 pb-10 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Agendar Auditoría <span className="text-karia-cyan">KARIA</span>
        </h1>
        <p className="text-foreground/70 max-w-xl mx-auto text-lg">
          Sistema de cobranza automatizada diseñado para empresas de gestión de
          deuda
        </p>
      </section>

      {/* Card Section */}
      <section className="max-w-2xl mx-auto px-4 pb-8">
        <div className="bg-card-bg border border-card-border rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            AUDITORÍA ESTRATÉGICA DE 45 MINUTOS CON{" "}
            <span className="text-karia-cyan">KARIA</span>
          </h2>
          <p className="text-foreground/60 text-center mb-8 max-w-lg mx-auto">
            Descubrimos cómo el sistema KARIA puede ayudarte a cobrar más,
            reducir costos y ordenar tu operación de cobranzas.
          </p>

          {/* Checklist */}
          <ul className="space-y-5 mb-8">
            {[
              "Diseño de un sistema de cobranza automatizada adaptado a tu operación",
              "Contacto automático con deudores 24/7 priorizando intención real de pago",
              "Seguimientos inteligentes sin cargar al equipo humano",
              "Optimización del uso del equipo para enfocarse solo en dinero real",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-karia-green shrink-0 mt-0.5" />
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>

          {/* Alert boxes */}
          <div className="space-y-4">
            <div className="flex items-start gap-3 border border-alert-green-border bg-alert-green-bg rounded-lg p-4">
              <ChartBarIcon className="w-6 h-6 text-karia-cyan shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/90">
                <span className="font-semibold text-karia-cyan">DATO CLAVE:</span>{" "}
                reducir tiempos de respuesta y automatizar seguimientos aumenta
                significativamente la tasa de recupero en cobranzas.
              </p>
            </div>

            <div className="flex items-start gap-3 border border-alert-green-border bg-alert-green-bg rounded-lg p-4">
              <GiftIcon className="w-6 h-6 text-karia-green shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/90">
                <span className="font-semibold text-karia-green">BONUS:</span>{" "}
                Recibís un diagnóstico personalizado con oportunidades concretas
                de mejora en tu operación.
              </p>
            </div>

            <div className="flex items-start gap-3 border border-alert-red-border bg-alert-red-bg rounded-lg p-4">
              <ExclamationTriangleIcon className="w-6 h-6 text-karia-red shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/90">
                <span className="font-semibold text-karia-red">
                  SISTEMA LIMITADO:
                </span>{" "}
                KARIA trabaja con un número reducido de empresas por mes para
                garantizar resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="max-w-2xl mx-auto px-4 pb-8">
        <div className="flex items-center justify-center gap-3 border border-alert-yellow-border bg-alert-yellow-bg rounded-lg p-4">
          <ExclamationTriangleIcon className="w-6 h-6 text-karia-yellow shrink-0" />
          <p className="text-sm text-karia-red font-medium">
            Si no confirmás tu auditoría en las próximas horas, el cupo se
            libera automáticamente.
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="max-w-2xl mx-auto px-4 pb-16">
        <div className="border border-karia-cyan/30 rounded-2xl p-8 md:p-10 bg-card-bg/50">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-karia-cyan/30 rounded-full scale-150" />
              <CalendarDaysIcon className="w-12 h-12 text-karia-cyan relative z-10" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            A continuación podrás agendar tu auditoría con{" "}
            <span className="text-karia-cyan">KARIA</span>
          </h2>
          <p className="text-foreground/60 text-center mb-8 max-w-md mx-auto">
            Seleccioná el horario que mejor se adapte a tu agenda para iniciar
            el proceso de optimización de tu cobranza.
          </p>

          <BookingCalendar />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-foreground/40 text-sm border-t border-card-border">
        © 2026 KARIA. Todos los derechos reservados.
      </footer>
    </main>
  );
}
