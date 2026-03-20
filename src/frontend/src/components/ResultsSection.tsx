import { BookOpen, GraduationCap, Hash, Search, User } from "lucide-react";
import { useState } from "react";

const student = {
  name: "Pravin Kumar",
  enrollmentNo: "210054400538",
  degreeNo: "2401004840275",
  rollNo: "220504250731",
  course: "Bachelor of Business Administration (BBA)",
  university: "Veer Madho Singh Bhandari Uttarakhand Technical University",
  semesters: [
    { sem: "1st Semester", obtained: 354, total: 500 },
    { sem: "2nd Semester", obtained: 444, total: 600 },
    { sem: "3rd Semester", obtained: 399, total: 500 },
    { sem: "4th Semester", obtained: 385, total: 500 },
    { sem: "5th Semester", obtained: 393, total: 500 },
    { sem: "6th Semester", obtained: 395, total: 500 },
  ],
};

const totalObtained = student.semesters.reduce((s, r) => s + r.obtained, 0);
const totalMax = student.semesters.reduce((s, r) => s + r.total, 0);
const overallPercent = ((totalObtained / totalMax) * 100).toFixed(2);

function getGrade(obtained: number, total: number) {
  const pct = (obtained / total) * 100;
  if (pct >= 90) return { grade: "A+", color: "#34d399" };
  if (pct >= 80) return { grade: "A", color: "#6ee7b7" };
  if (pct >= 70) return { grade: "B+", color: "#60a5fa" };
  if (pct >= 60) return { grade: "B", color: "#93c5fd" };
  if (pct >= 50) return { grade: "C", color: "#fcd34d" };
  return { grade: "D", color: "#f87171" };
}

export default function ResultsSection() {
  const [form, setForm] = useState({
    degreeNo: "",
    rollNo: "",
    enrollmentNo: "",
  });
  const [result, setResult] = useState<null | "found" | "notfound">(null);
  const [error, setError] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const { degreeNo, rollNo, enrollmentNo } = form;
    if (!degreeNo.trim() || !rollNo.trim() || !enrollmentNo.trim()) {
      setError("Please fill in all three fields.");
      return;
    }
    setError("");
    if (
      degreeNo.trim() === student.degreeNo &&
      rollNo.trim() === student.rollNo &&
      enrollmentNo.trim() === student.enrollmentNo
    ) {
      setResult("found");
    } else {
      setResult("notfound");
    }
  }

  function handleReset() {
    setForm({ degreeNo: "", rollNo: "", enrollmentNo: "" });
    setResult(null);
    setError("");
  }

  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2 fade-in-up">
            Examination Results
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 fade-in-up">
            Student Result Portal
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto fade-in-up">
            Enter your credentials to view your official semester-wise result
            from Veer Madho Singh Bhandari Uttarakhand Technical University.
          </p>
        </div>

        {/* Search Form */}
        {result === null || result === "notfound" ? (
          <div className="bg-navy rounded-2xl shadow-2xl overflow-hidden mb-8 fade-in-up">
            <div className="bg-gold px-6 py-3 flex items-center gap-3">
              <Search size={20} className="text-white" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">
                Verify Your Identity
              </span>
            </div>
            <form onSubmit={handleSearch} className="p-6 sm:p-8 space-y-5">
              <div>
                <label
                  htmlFor="degreeNo"
                  className="text-white/60 text-xs uppercase tracking-wider mb-1 block"
                >
                  Degree Number
                </label>
                <input
                  id="degreeNo"
                  type="text"
                  placeholder="Enter your Degree No."
                  value={form.degreeNo}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, degreeNo: e.target.value }))
                  }
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-gold font-mono"
                />
              </div>
              <div>
                <label
                  htmlFor="rollNo"
                  className="text-white/60 text-xs uppercase tracking-wider mb-1 block"
                >
                  Roll Number
                </label>
                <input
                  id="rollNo"
                  type="text"
                  placeholder="Enter your Roll No."
                  value={form.rollNo}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, rollNo: e.target.value }))
                  }
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-gold font-mono"
                />
              </div>
              <div>
                <label
                  htmlFor="enrollmentNo"
                  className="text-white/60 text-xs uppercase tracking-wider mb-1 block"
                >
                  Enrollment Number
                </label>
                <input
                  id="enrollmentNo"
                  type="text"
                  placeholder="Enter your Enrollment No."
                  value={form.enrollmentNo}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, enrollmentNo: e.target.value }))
                  }
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-gold font-mono"
                />
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              {result === "notfound" && (
                <p className="text-red-400 text-sm">
                  No record found. Please check your details and try again.
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-gold hover:bg-yellow-500 text-white font-bold py-3 rounded-lg transition-colors text-sm uppercase tracking-wider"
              >
                View Result
              </button>
            </form>
          </div>
        ) : (
          /* Result Card */
          <div className="bg-navy rounded-2xl shadow-2xl overflow-hidden mb-8 fade-in-up">
            <div className="bg-gold px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <GraduationCap size={20} className="text-white" />
                <span className="text-white font-bold text-sm uppercase tracking-wider">
                  Official Academic Transcript
                </span>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="text-white/80 hover:text-white text-xs underline underline-offset-2"
              >
                Search Again
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <User
                      size={18}
                      className="text-gold flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-white/50 text-xs uppercase tracking-wider">
                        Student Name
                      </div>
                      <div className="text-white font-bold text-lg">
                        {student.name}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen
                      size={18}
                      className="text-gold flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-white/50 text-xs uppercase tracking-wider">
                        Course
                      </div>
                      <div className="text-white font-semibold">
                        {student.course}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Hash
                      size={18}
                      className="text-gold flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-white/50 text-xs uppercase tracking-wider">
                        Enrollment No.
                      </div>
                      <div className="text-white font-semibold font-mono">
                        {student.enrollmentNo}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Hash
                      size={18}
                      className="text-gold flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-white/50 text-xs uppercase tracking-wider">
                        Roll No.
                      </div>
                      <div className="text-white font-semibold font-mono">
                        {student.rollNo}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Hash
                      size={18}
                      className="text-gold flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-white/50 text-xs uppercase tracking-wider">
                        Degree No.
                      </div>
                      <div className="text-white font-semibold font-mono">
                        {student.degreeNo}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marks Table */}
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-white/10">
                      <th className="text-left px-4 py-3 text-gold font-semibold uppercase text-xs tracking-wider">
                        Semester
                      </th>
                      <th className="text-center px-4 py-3 text-gold font-semibold uppercase text-xs tracking-wider">
                        Marks Obtained
                      </th>
                      <th className="text-center px-4 py-3 text-gold font-semibold uppercase text-xs tracking-wider">
                        Max Marks
                      </th>
                      <th className="text-center px-4 py-3 text-gold font-semibold uppercase text-xs tracking-wider">
                        Percentage
                      </th>
                      <th className="text-center px-4 py-3 text-gold font-semibold uppercase text-xs tracking-wider">
                        Grade
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {student.semesters.map((r, i) => {
                      const pct = ((r.obtained / r.total) * 100).toFixed(1);
                      const { grade, color } = getGrade(r.obtained, r.total);
                      return (
                        <tr
                          key={r.sem}
                          className={`border-t border-white/10 ${i % 2 === 0 ? "bg-white/5" : ""}`}
                        >
                          <td className="px-4 py-3 text-white font-medium">
                            {r.sem}
                          </td>
                          <td className="px-4 py-3 text-center text-white">
                            {r.obtained}
                          </td>
                          <td className="px-4 py-3 text-center text-white/60">
                            {r.total}
                          </td>
                          <td className="px-4 py-3 text-center text-white">
                            {pct}%
                          </td>
                          <td
                            className="px-4 py-3 text-center font-bold"
                            style={{ color }}
                          >
                            {grade}
                          </td>
                        </tr>
                      );
                    })}
                    <tr className="border-t-2 border-gold/40 bg-gold/10">
                      <td className="px-4 py-3 text-gold font-bold">Total</td>
                      <td className="px-4 py-3 text-center text-gold font-bold">
                        {totalObtained}
                      </td>
                      <td className="px-4 py-3 text-center text-gold font-bold">
                        {totalMax}
                      </td>
                      <td className="px-4 py-3 text-center text-gold font-bold">
                        {overallPercent}%
                      </td>
                      <td className="px-4 py-3 text-center text-gold font-bold">
                        {getGrade(totalObtained, totalMax).grade}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 rounded-xl px-6 py-4 border border-white/10">
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-1">
                    Overall Performance
                  </div>
                  <div className="text-white font-semibold">
                    {overallPercent}% —{" "}
                    {getGrade(totalObtained, totalMax).grade} Grade
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-1">
                    University
                  </div>
                  <div className="text-gold font-semibold text-sm">
                    Veer Madho Singh Bhandari Uttarakhand Technical University
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
