import Image from "next/image";
import {
  CheckCircleIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  VideoCameraIcon,
  TrendingUpIcon,
  ClockIcon,
  CogIcon,
  UsersIcon,
  DocumentTextIcon,
  TargetIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  DatabaseIcon,
  BoltIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  CalendarIcon,
} from "../icons";
import kariaLogo from "../assets/Images/karia-logo.png";

export default function Confirmacion() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-16 md:pt-20 pb-10 px-4 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-karia-green/50 bg-karia-green/10 text-karia-green text-sm font-medium mb-8">
          <CheckCircleIcon className="w-5 h-5" />
          Auditoría Confirmada
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Tu asesoría con <span className="bg-gradient-to-r from-karia-green to-yellow-400 bg-clip-text text-transparent">KARIA</span> está
          <br className="hidden md:block" /> casi confirmada
        </h1>

        <p className="text-foreground/60 max-w-2xl mx-auto text-lg md:text-xl">
          En los próximos pasos te mostramos qué esperar y cómo prepararte para
          aprovecharla al máximo.
        </p>
      </section>

      {/* Decision Card */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-card-bg border border-card-border rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-5">
            <div className="p-4 rounded-xl bg-karia-cyan/20 shrink-0">
              <SparklesIcon className="w-7 h-7 text-karia-cyan" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Tomaste una decisión estratégica</h3>
              <p className="text-foreground/60 text-base">
                Estás a un paso de recibir un diagnóstico profesional enfocado en
                mejorar tu operación de cobranzas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Próximos Pasos Section */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="text-center mb-10">
          <span className="text-karia-cyan text-sm font-semibold tracking-widest uppercase">
            PRÓXIMOS PASOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">Qué va a pasar ahora</h2>
        </div>

        <div className="space-y-6">
          {/* Paso 1 */}
          <div className="bg-card-bg border border-card-border rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-5">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-karia-cyan text-background font-bold text-xl shrink-0">
                01
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <MagnifyingGlassIcon className="w-5 h-5 text-foreground/60" />
                  <h3 className="font-semibold text-xl">Revisión interna</h3>
                </div>
                <p className="text-foreground/60 text-base leading-relaxed">
                  Nuestro equipo analiza tu operación de cobranzas actual antes de la
                  llamada para llegar preparados con contexto relevante.
                </p>
              </div>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="bg-card-bg border border-card-border rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-5">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-karia-cyan text-background font-bold text-xl shrink-0">
                02
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <VideoCameraIcon className="w-5 h-5 text-karia-cyan" />
                  <h3 className="font-semibold text-xl">Asesoría estratégica de 45 minutos</h3>
                </div>
                <p className="text-foreground/60 text-base mb-5">
                  Sesión enfocada en los 4 pilares de una operación de cobranza eficiente:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <TrendingUpIcon className="w-5 h-5 text-karia-cyan" />
                    <span className="text-foreground/80">Recupero de cartera</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ClockIcon className="w-5 h-5 text-karia-cyan" />
                    <span className="text-foreground/80">Optimización de costos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CogIcon className="w-5 h-5 text-karia-cyan" />
                    <span className="text-foreground/80">Automatización de procesos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <UsersIcon className="w-5 h-5 text-karia-cyan" />
                    <span className="text-foreground/80">Uso eficiente del equipo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="bg-card-bg border border-card-border rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-5">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-karia-cyan text-background font-bold text-xl shrink-0">
                03
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <DocumentTextIcon className="w-5 h-5 text-foreground/60" />
                  <h3 className="font-semibold text-xl">Diagnóstico claro</h3>
                </div>
                <p className="text-foreground/60 text-base leading-relaxed">
                  Recibirás un análisis con oportunidades concretas de mejora aplicables a tu operación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtro de Cliente Ideal */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-karia-cyan/50 bg-karia-cyan/10 text-karia-cyan text-sm font-medium mb-5">
            <TargetIcon className="w-5 h-5" />
            Filtro de cliente ideal
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">¿Es esta asesoría para vos?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Es para vos */}
          <div className="bg-card-bg border-l-4 border-l-karia-green border border-card-border rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <CheckCircleIcon className="w-7 h-7 text-karia-green" />
              <h3 className="font-semibold text-xl">Es para vos si...</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <TrendingUpIcon className="w-5 h-5 text-karia-green shrink-0 mt-0.5" />
                <span className="text-foreground/80">Carteras medianas y grandes que buscan control, medición y escalabilidad real.</span>
              </li>
              <li className="flex items-start gap-4">
                <CogIcon className="w-5 h-5 text-karia-green shrink-0 mt-0.5" />
                <span className="text-foreground/80">Empresas que deciden ordenar su operación con automatización de cobranzas.</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircleIcon className="w-5 h-5 text-karia-green shrink-0 mt-0.5" />
                <span className="text-foreground/80">Organizaciones con decisión de cambio y compromiso operativo.</span>
              </li>
            </ul>
          </div>

          {/* No es para vos */}
          <div className="bg-card-bg border-l-4 border-l-karia-red border border-card-border rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <XCircleIcon className="w-7 h-7 text-karia-red" />
              <h3 className="font-semibold text-xl">No es para vos si...</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <XCircleIcon className="w-5 h-5 text-karia-red/60 shrink-0 mt-0.5" />
                <span className="text-foreground/60">Solo buscan una demo de producto sin intención de cambio</span>
              </li>
              <li className="flex items-start gap-4">
                <XCircleIcon className="w-5 h-5 text-karia-red/60 shrink-0 mt-0.5" />
                <span className="text-foreground/60">Quieren una llamada de venta genérica</span>
              </li>
              <li className="flex items-start gap-4">
                <XCircleIcon className="w-5 h-5 text-karia-red/60 shrink-0 mt-0.5" />
                <span className="text-foreground/60">No tienen compromiso operativo ni decisión ejecutiva</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Importante */}
        <div className="mt-8 bg-card-bg border border-card-border rounded-2xl p-6 md:p-8 text-center">
          <div className="flex items-center justify-center gap-2 text-karia-yellow mb-3">
            <ExclamationTriangleIcon className="w-6 h-6" />
            <span className="font-medium uppercase tracking-widest">IMPORTANTE</span>
          </div>
          <p className="text-foreground/80 text-base max-w-2xl mx-auto">
            Si cumplís estos criterios,{" "}
            <span className="text-karia-cyan font-medium">continuá con tu reserva</span>. Si no, por favor cancelá para no ocupar un
            cupo que otra empresa podría aprovechar.
          </p>
        </div>
      </section>

      {/* El Problema */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-br from-karia-red/10 to-transparent border border-karia-red/30 rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-3 text-karia-red mb-5">
            <XCircleIcon className="w-7 h-7" />
            <span className="font-medium uppercase tracking-widest">EL PROBLEMA</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            La cobranza dejó de escalar con métodos tradicionales
          </h3>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <ExclamationTriangleIcon className="w-6 h-6 text-karia-red/60 shrink-0 mt-0.5" />
              <span className="text-foreground/80 text-base">El problema no es insistir más, sino no saber a quién, cuándo ni cómo cobrar.</span>
            </li>
            <li className="flex items-start gap-4">
              <svg className="w-6 h-6 text-karia-red/60 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
              <span className="text-foreground/80 text-base">Sin segmentación ni medición en tiempo real, las decisiones se toman a ciegas.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="shrink-0 mt-0.5" style={{ transform: 'scaleY(-1)', display: 'inline-block' }}>
                <TrendingUpIcon className="w-6 h-6 text-karia-red/60" />
              </span>
              <span className="text-foreground/80 text-base">Las llamadas masivas sin priorización generan desgaste sin resultados proporcionales.</span>
            </li>
          </ul>
          <p className="text-foreground/50 italic mt-8">
            Cuando no hay sistema, la cobranza se sostiene por esfuerzo y no por estructura.
          </p>
        </div>
      </section>

      {/* La Solución */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-karia-green/50 bg-karia-green/10 text-karia-green text-sm font-medium mb-5">
            <CheckCircleIcon className="w-5 h-5" />
            La solución
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Qué es <span className="text-karia-cyan">KARIA</span>
          </h2>
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto text-lg">
            Un sistema de cobranza inteligente que transforma tu operación de esfuerzo humano a
            decisión ordenada y eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-card-bg border border-karia-green/30 border-t-2 border-t-karia-green rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-5">
              <div className="p-4 rounded-xl bg-karia-green/20">
                <DatabaseIcon className="w-7 h-7 text-karia-green" />
              </div>
            </div>
            <p className="text-foreground/80">
              Sistema de gestión de cobranza basado en datos, automatización y agentes inteligentes.
            </p>
          </div>

          <div className="bg-card-bg border border-karia-green/30 border-t-2 border-t-karia-green rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-5">
              <div className="p-4 rounded-xl bg-karia-green/20">
                <TargetIcon className="w-7 h-7 text-karia-green" />
              </div>
            </div>
            <p className="text-foreground/80">
              Prioriza deudores, define estrategias y ejecuta acciones sin desgaste humano.
            </p>
          </div>

          <div className="bg-card-bg border border-karia-green/30 border-t-2 border-t-karia-green rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-5">
              <div className="p-4 rounded-xl bg-karia-green/20">
                <BoltIcon className="w-7 h-7 text-karia-green" />
              </div>
            </div>
            <p className="text-foreground/80">
              Permite escalar recupero sin sumar estructura ni costos.
            </p>
          </div>
        </div>

        {/* Resultados Comprobados */}
        <div className="mt-10 bg-card-bg border border-karia-green/30 rounded-2xl p-8 border-l-4 border-l-karia-green">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUpIcon className="w-7 h-7 text-karia-green" />
            <h3 className="font-semibold text-xl">Resultados comprobados</h3>
          </div>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-karia-green/20">
                  <TrendingUpIcon className="w-6 h-6 text-karia-green" />
                </div>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-karia-green">+30%</p>
              <p className="text-foreground/60 text-sm uppercase tracking-wider mt-2">Recuperación</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-karia-green/20">
                  <CurrencyDollarIcon className="w-6 h-6 text-karia-green" />
                </div>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-karia-green">-40%</p>
              <p className="text-foreground/60 text-sm uppercase tracking-wider mt-2">Costos</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-karia-green/20">
                  <UsersIcon className="w-6 h-6 text-karia-green" />
                </div>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-karia-green">3x</p>
              <p className="text-foreground/60 text-sm uppercase tracking-wider mt-2">Eficiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Karia Brand Section */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="border-t border-card-border pt-16">
          <div className="mb-5">
            <Image src={kariaLogo} alt="Karia" width={120} height={120} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Diseñamos soluciones para empresas que buscan cobrar más sin escalar costos
          </h3>
          <p className="text-foreground/60 text-lg">
            En la demo verás el sistema aplicado a{" "}
            <span className="text-karia-cyan font-bold">tu realidad</span>, con un diagnóstico
            personalizado basado en tus datos y procesos actuales.
          </p>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Casos de Éxito</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card-bg border border-card-border rounded-2xl p-8">
            <div className="text-karia-cyan text-5xl font-serif mb-6">"</div>
            <p className="text-foreground/80 text-base mb-6 leading-relaxed">
              "Aumentamos la recuperación en un 15% en solo 3 meses, sin ampliar el equipo."
            </p>
            <p className="font-semibold">Director de Operaciones</p>
            <p className="text-foreground/50 text-sm">Empresa de cobranzas líder</p>
            <div className="mt-6 pt-6 border-t border-card-border">
              <p className="text-3xl font-bold text-karia-green">+15%</p>
              <p className="text-foreground/50 text-sm uppercase tracking-wider mt-1">RECUPERACIÓN</p>
            </div>
          </div>

          <div className="bg-card-bg border border-card-border rounded-2xl p-8">
            <div className="text-karia-cyan text-5xl font-serif mb-6">"</div>
            <p className="text-foreground/80 text-base mb-6 leading-relaxed">
              "Reducimos costos operativos sin sacrificar resultados ni control."
            </p>
            <p className="font-semibold">Gerente de Finanzas</p>
            <p className="text-foreground/50 text-sm">Fintech regional</p>
            <div className="mt-6 pt-6 border-t border-card-border">
              <p className="text-3xl font-bold text-karia-green">-20%</p>
              <p className="text-foreground/50 text-sm uppercase tracking-wider mt-1">COSTOS</p>
            </div>
          </div>

          <div className="bg-card-bg border border-card-border rounded-2xl p-8">
            <div className="text-karia-cyan text-5xl font-serif mb-6">"</div>
            <p className="text-foreground/80 text-base mb-6 leading-relaxed">
              "Hoy gestionamos muchas más cuentas con el mismo equipo, y con mucho más control."
            </p>
            <p className="font-semibold">CEO</p>
            <p className="text-foreground/50 text-sm">Agencia de cobranzas</p>
            <div className="mt-6 pt-6 border-t border-card-border">
              <p className="text-3xl font-bold text-karia-green">3x</p>
              <p className="text-foreground/50 text-sm uppercase tracking-wider mt-1">EFICIENCIA OPERATIVA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preparación */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-karia-cyan/50 bg-karia-cyan/10 text-karia-cyan text-sm font-medium mb-5">
            <DocumentTextIcon className="w-5 h-5" />
            PREPARACIÓN
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Cómo prepararte</h2>
          <p className="text-foreground/60 mt-4 text-lg">
            Para aprovechar al máximo tu auditoría, te recomendamos tener a mano:
          </p>
        </div>

        <div className="space-y-5">
          <div className="bg-card-bg border border-karia-cyan/30 rounded-xl p-5 md:p-6 border-l-4 border-l-karia-cyan">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-karia-cyan shrink-0">
                <CheckCircleIcon className="w-5 h-5 text-background" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Conocer tu volumen de cartera</h4>
                <p className="text-foreground/60">Cuántas cuentas gestionás actualmente</p>
              </div>
            </div>
          </div>

          <div className="bg-card-bg border border-karia-cyan/30 rounded-xl p-5 md:p-6 border-l-4 border-l-karia-cyan">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-karia-cyan shrink-0">
                <CheckCircleIcon className="w-5 h-5 text-background" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Tener claro cómo hacés los seguimientos</h4>
                <p className="text-foreground/60">Métodos actuales de contacto y frecuencia</p>
              </div>
            </div>
          </div>

          <div className="bg-card-bg border border-karia-cyan/30 rounded-xl p-5 md:p-6 border-l-4 border-l-karia-cyan">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-karia-cyan shrink-0">
                <CheckCircleIcon className="w-5 h-5 text-background" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Identificar dónde se pierde tiempo y dinero</h4>
                <p className="text-foreground/60">Puntos de fricción en tu operación actual</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmación Final */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-card-bg border border-card-border rounded-2xl p-10 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-5 rounded-2xl bg-karia-cyan/20">
              <EnvelopeIcon className="w-10 h-10 text-karia-cyan" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            En breve recibirás la confirmación final
          </h3>
          <p className="text-foreground/60 text-lg mb-6 max-w-xl mx-auto">
            Te enviaremos un email con los detalles de tu auditoría con KARIA, incluyendo fecha,
            hora y el enlace para conectarte.
          </p>
          <div className="flex items-center justify-center gap-3 text-foreground/50">
            <CalendarIcon className="w-5 h-5" />
            <span>Revisa tu bandeja de entrada y spam</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-card-border py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-foreground/60 mb-5">
            ¿Tenés alguna pregunta? Escribinos a{" "}
            <a href="mailto:ventas@karia.com" className="text-karia-cyan hover:underline">
              ventas@karia.com
            </a>
          </p>
          <p className="text-foreground/40">
            © 2026 <span className="text-karia-cyan">KARIA</span>. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
