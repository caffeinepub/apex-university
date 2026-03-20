import { Calendar, CheckCircle, FileText } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Register",
    desc: "Create your account on our admission portal",
  },
  {
    number: "02",
    title: "Apply Online",
    desc: "Fill in your personal and academic details",
  },
  {
    number: "03",
    title: "Upload Documents",
    desc: "Submit marksheets, ID proof, and passport photo",
  },
  {
    number: "04",
    title: "Pay Fee",
    desc: "Pay the application fee online securely",
  },
  {
    number: "05",
    title: "Confirmation",
    desc: "Receive your admission confirmation via email",
  },
];

const eligibility = [
  { program: "B.Tech", criteria: "10+2 with PCM, min 60% aggregate" },
  {
    program: "MBA",
    criteria: "Graduation in any discipline, valid CAT/MAT score",
  },
  { program: "BBA", criteria: "10+2 in any stream, min 55% aggregate" },
  { program: "M.Tech", criteria: "B.Tech/B.E. with min 60%, valid GATE score" },
  { program: "MCA", criteria: "BCA/B.Sc (CS/IT), min 55% aggregate" },
];

const importantDates = [
  { event: "Application Opens", date: "March 1, 2026" },
  { event: "Last Date to Apply", date: "May 31, 2026" },
  { event: "Entrance Test", date: "June 15, 2026" },
  { event: "Merit List", date: "June 25, 2026" },
  { event: "Classes Begin", date: "August 1, 2026" },
];

export default function AdmissionsSection() {
  return (
    <section id="admissions" className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2 fade-in-up">
            Admissions 2026
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 fade-in-up">
            Your Path to Veer Madho Singh Bhandari Uttarakhand Technical
            University
          </h2>
          <p className="text-white/60 max-w-xl mx-auto fade-in-up">
            Follow these simple steps to begin your journey toward academic
            excellence.
          </p>
        </div>

        {/* Stepper */}
        <div className="relative flex flex-col sm:flex-row justify-between gap-6 mb-16 fade-in-up">
          {/* Connector line */}
          <div
            className="hidden sm:block absolute top-9 left-0 right-0 h-0.5 bg-white/10 z-0"
            style={{ left: "8%", right: "8%" }}
          />
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-center text-center flex-1"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mb-3 border-2"
                style={{
                  backgroundColor:
                    i === 0 ? "oklch(0.70 0.12 75)" : "rgba(255,255,255,0.05)",
                  borderColor:
                    i === 0 ? "oklch(0.70 0.12 75)" : "rgba(255,255,255,0.2)",
                  color: i === 0 ? "white" : "rgba(255,255,255,0.7)",
                }}
              >
                {step.number}
              </div>
              <div className="text-white font-semibold text-sm mb-1">
                {step.title}
              </div>
              <div className="text-white/50 text-xs max-w-[120px] leading-relaxed">
                {step.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Eligibility & Dates */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Eligibility */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle size={20} className="text-gold" />
              <h3 className="text-white font-bold text-lg">
                Eligibility Criteria
              </h3>
            </div>
            <div className="space-y-3">
              {eligibility.map((e) => (
                <div
                  key={e.program}
                  className="flex gap-3 pb-3 border-b border-white/10 last:border-0"
                >
                  <span className="text-gold font-semibold text-sm min-w-[60px]">
                    {e.program}
                  </span>
                  <span className="text-white/70 text-sm">{e.criteria}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Important Dates */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <Calendar size={20} className="text-gold" />
              <h3 className="text-white font-bold text-lg">Important Dates</h3>
            </div>
            <div className="space-y-3">
              {importantDates.map((d) => (
                <div
                  key={d.event}
                  className="flex justify-between pb-3 border-b border-white/10 last:border-0"
                >
                  <span className="text-white/70 text-sm">{d.event}</span>
                  <span className="text-gold font-semibold text-sm">
                    {d.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center fade-in-up">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-bold px-10 py-3 rounded-md transition-colors duration-200 shadow-lg"
            data-ocid="admissions.primary_button"
          >
            <FileText size={18} /> Start Application
          </a>
        </div>
      </div>
    </section>
  );
}
