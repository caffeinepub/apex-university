import { Award, Building2, TrendingUp, Users } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "95%+",
    label: "Placement Rate",
    sub: "Consistent for 10+ years",
  },
  {
    icon: Award,
    value: "₹18 LPA",
    label: "Average Package",
    sub: "Across all programs",
  },
  {
    icon: Award,
    value: "₹42 LPA",
    label: "Highest Package",
    sub: "Google, 2025 batch",
  },
  {
    icon: Building2,
    value: "500+",
    label: "Recruiting Companies",
    sub: "MNCs & startups",
  },
];

const companies = [
  { name: "TCS", color: "bg-blue-50 text-blue-700 border-blue-200" },
  { name: "Infosys", color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
  { name: "Wipro", color: "bg-gray-50 text-gray-700 border-gray-200" },
  {
    name: "Accenture",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  { name: "Google", color: "bg-red-50 text-red-700 border-red-200" },
  { name: "Amazon", color: "bg-orange-50 text-orange-700 border-orange-200" },
  { name: "Microsoft", color: "bg-sky-50 text-sky-700 border-sky-200" },
  { name: "Deloitte", color: "bg-green-50 text-green-700 border-green-200" },
  { name: "IBM", color: "bg-blue-50 text-blue-800 border-blue-200" },
  { name: "HCL", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { name: "Cognizant", color: "bg-blue-50 text-blue-600 border-blue-200" },
  {
    name: "Capgemini",
    color: "bg-violet-50 text-violet-700 border-violet-200",
  },
];

export default function PlacementsSection() {
  return (
    <section id="placements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: stats */}
          <div>
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2 fade-in-up">
              Placements 2025
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 fade-in-up">
              Career That Starts Here
            </h2>
            <p className="text-gray-500 mb-8 fade-in-up">
              Our dedicated placement cell and strong industry network ensure
              every student lands their dream job. Our placement record speaks
              for itself.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="bg-light-bg rounded-xl p-5 border border-gray-100 card-lift fade-in-up"
                  style={{ transitionDelay: `${i * 80}ms` }}
                  data-ocid={`placements.item.${i + 1}`}
                >
                  <div className="p-2 bg-gold/10 rounded-md w-fit mb-3">
                    <s.icon size={20} className="text-gold" />
                  </div>
                  <div className="text-2xl font-bold text-navy">{s.value}</div>
                  <div className="text-gray-700 font-semibold text-sm mt-0.5">
                    {s.label}
                  </div>
                  <div className="text-gray-400 text-xs mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Company logos */}
          <div className="fade-in-up">
            <div className="flex items-center gap-2 mb-6">
              <Users size={20} className="text-gold" />
              <h3 className="text-navy font-bold text-xl">Top Recruiters</h3>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {companies.map((c, i) => (
                <div
                  key={c.name}
                  className={`${c.color} border rounded-lg px-3 py-3 text-center font-bold text-sm card-lift`}
                  data-ocid={`placements.item.${i + 1}`}
                >
                  {c.name}
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4 text-center">
              ...and 500+ more companies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
