import { Award, BookOpen, Globe, Users } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    { icon: Award, value: "AICTE Approved", label: "National Accreditation" },
    { icon: Award, value: "State University", label: "Govt. of Uttarakhand" },
    { icon: Globe, value: "20+ Years", label: "Of Excellence" },
    { icon: Users, value: "100K+", label: "Alumni Network" },
  ];

  const programs = [
    {
      image: "/assets/generated/course-btech.dim_400x300.jpg",
      name: "B.Tech Engineering",
      desc: "World-class engineering education with hands-on labs and industry exposure.",
      duration: "4 Years",
    },
    {
      image: "/assets/generated/course-mba.dim_400x300.jpg",
      name: "MBA",
      desc: "Transform your business acumen with our globally ranked MBA program.",
      duration: "2 Years",
    },
    {
      image: "/assets/generated/course-bba.dim_400x300.jpg",
      name: "B.Pharm",
      desc: "Comprehensive pharmacy education preparing professionals for healthcare industry.",
      duration: "4 Years",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: About text */}
          <div>
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3 fade-in-up">
              About UTU
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-6 fade-in-up">
              Uttarakhand's Premier Technical University
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 fade-in-up">
              Veer Madho Singh Bhandari Uttarakhand Technical University (UTU),
              formerly Uttarakhand Technical University, was established by Act
              No. 415/2005 by the Uttarakhand Government. Located in Dehradun,
              UTU is committed to providing quality technical education across
              engineering, management, pharmacy, and architecture disciplines.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 fade-in-up">
              With affiliated colleges across Uttarakhand and a robust academic
              framework, UTU ensures accessible, high-quality education that
              meets national and international standards.
            </p>

            {/* Achievement badges */}
            <div className="grid grid-cols-2 gap-4 fade-in-up">
              {highlights.map((h) => (
                <div
                  key={h.value}
                  className="flex items-start gap-3 p-4 bg-light-bg rounded-lg border border-gray-100"
                >
                  <div className="p-2 bg-gold/10 rounded-md">
                    <h.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-bold text-navy text-base">
                      {h.value}
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5">
                      {h.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Program cards */}
          <div className="space-y-4">
            {programs.map((p) => (
              <div
                key={p.name}
                className="flex gap-4 bg-white rounded-xl shadow-card border border-gray-100 overflow-hidden card-lift fade-in-up"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-28 h-24 object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex flex-col justify-center py-3 pr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-navy text-base">
                      {p.name}
                    </span>
                    <span className="text-xs bg-gold/15 text-gold font-semibold px-2 py-0.5 rounded-full">
                      {p.duration}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-snug mb-2">
                    {p.desc}
                  </p>
                  <a
                    href="#courses"
                    className="text-gold hover:text-navy text-sm font-semibold transition-colors flex items-center gap-1"
                  >
                    View Course →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
