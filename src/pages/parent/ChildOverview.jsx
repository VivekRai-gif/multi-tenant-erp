import React from 'react';
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/erp/parent/DashboardLayout";

const ChildOverview = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div className="p-8 max-w-7xl mx-auto space-y-8">

        {/* Page Header */}
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-xl font-bold tracking-tight text-blue-800 dark:text-blue-300 font-headline">
            Child Overview
          </h1>
        </div>

        {/* Hero Grid: Profile & Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* STUDENT PROFILE CARD */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-800 rounded-xl p-6 relative overflow-hidden flex flex-col items-center text-center shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">

            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10"></div>

            <div className="relative mt-4">
              <img
                alt="Alex Rivera"
                className="w-32 h-32 rounded-2xl object-cover ring-4 ring-white dark:ring-slate-700 shadow-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo2KICqBL7TUsP9s1PmtqbHGlme-JkhOQPFaHD_zu19zo9Yap-MwQQW3C9Ar9XTwZr7wpaCec0Sms2hWiyuCi_iTiPejDPY5Vrhu9VOqkOavRqsXZo8a5-ZHE4tqqaOPHQS6nkWfilqW8eHiC1ks94LMmsgy-Z65aEvZpmvM5PBqkT_WMSMcnWkuK6hcP5RTbWmgeDn7BDdV0Yot2angb1y6wmuMw05rcEPAELqPKNpVGF1X0Nd0nlSy6UOkdvQHSowRnMVXv1RA"
              />
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-bold">
                Grade 11-A
              </div>
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
              Alex Rivera
            </h2>

            <p className="text-gray-500 dark:text-slate-200 font-medium">
              Roll #8821
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => navigate("/parent/grades")}
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition"
              >
                <span className="material-symbols-outlined text-sm">badge</span>
                View Report Card
              </button>

              <button
                onClick={() => navigate("/parent/attendance")}
                className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-md text-sm font-semibold flex items-center gap-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition"
              >
                <span className="material-symbols-outlined text-sm">event_available</span>
                Attendance
              </button>
            </div>
          </div>

          {/* ACADEMIC SUMMARY (Bento Style) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div className="bg-surface-container-lowest dark:bg-slate-800 rounded-xl p-6 shadow-sm flex flex-col justify-between border-l-4 border-primary transition-colors duration-300">
              <div>
                <span className="material-symbols-outlined text-primary dark:text-blue-300 mb-2">menu_book</span>
                <p className="text-sm font-medium text-on-surface-variant dark:text-slate-200 font-label">Total Subjects</p>
              </div>
              <h3 className="text-4xl font-extrabold font-headline text-on-surface dark:text-white">8</h3>
              <p className="text-xs text-green-600 dark:text-green-400 font-bold mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">trending_up</span> Consistent
              </p>
            </div>

            <div className="bg-surface-container-lowest dark:bg-slate-800 rounded-xl p-6 shadow-sm flex flex-col justify-between border-l-4 border-secondary transition-colors duration-300">
              <div>
                <span className="material-symbols-outlined text-secondary dark:text-purple-300 mb-2">auto_awesome</span>
                <p className="text-sm font-medium text-on-surface-variant dark:text-slate-200 font-label">Avg Grade</p>
              </div>
              <h3 className="text-4xl font-extrabold font-headline text-on-surface dark:text-white">B+</h3>
              <p className="text-xs text-on-surface-variant dark:text-slate-200 mt-2">Top 15% of Class</p>
            </div>

            <div className="bg-surface-container-lowest dark:bg-slate-800 rounded-xl p-6 shadow-sm flex flex-col justify-between border-l-4 border-tertiary transition-colors duration-300">
              <div>
                <span className="material-symbols-outlined text-tertiary dark:text-teal-300 mb-2">check_circle</span>
                <p className="text-sm font-medium text-on-surface-variant dark:text-slate-200 font-label">Attendance</p>
              </div>
              <h3 className="text-4xl font-extrabold font-headline text-on-surface dark:text-white">92%</h3>
              <p className="text-xs text-green-600 dark:text-green-400 font-bold mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">verified</span> Excellent
              </p>
            </div>

            <div className="sm:col-span-3 bg-gradient-to-br from-surface-container-low to-surface-container-high dark:from-slate-800 dark:to-slate-900 rounded-xl p-8 relative overflow-hidden group transition-colors duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-9xl dark:text-white">psychology</span>
              </div>
              <div className="relative z-10">
                <h4 className="text-tertiary dark:text-teal-300 font-bold flex items-center gap-2 mb-4 font-label">
                  <span className="material-symbols-outlined text-lg">lightbulb</span> TEACHER REMARK
                </h4>
                <p className="text-xl font-headline font-semibold text-on-surface dark:text-white leading-relaxed italic max-w-2xl">
                  "Alex shows strong interest in science subjects. His participation in laboratory exercises has been exemplary this term."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    alt="Dr. Sarah Miller"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-slate-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVB9XhotKvz6xY0TDOjZ2wOepSH9G1y3z2GDvuc0tfv8lWqeCNYoCVtwJXBlpjCvROozveBsUgQMZn4cA5AbwAT7csuYaqgUZlUVscg1bfLSrbhaQecGFzI2v5S6IhWtXC6v204g1C4OKGmIoFjh8Ir8j7uA1vWLLsB134wbR_2MpBONq2IfmCgHXaBA1_uPJxS6opLB3yB5-rGHuqjijd-TeBq2RXRpWxyluSfSdzniRy9Sf7l9nuuBFIiYGP7NgqZULB7OO62g"
                  />
                  <div>
                    <p className="text-sm font-bold text-on-surface dark:text-white">Dr. Sarah Miller</p>
                    <p className="text-xs text-on-surface-variant dark:text-slate-200">Lead Science Educator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PERFORMANCE SUMMARY TABLE */}
        <div className="bg-surface-container-lowest dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden mt-8 transition-colors duration-300">
          <div className="p-6 flex justify-between items-center border-b border-surface-container-low dark:border-slate-700">
            <h3 className="text-lg font-bold font-headline text-on-surface dark:text-white">
              Subject-wise Performance
            </h3>
            <button className="text-primary dark:text-blue-300 text-sm font-bold hover:underline flex items-center gap-1">
              Download Report <span className="material-symbols-outlined text-sm">download</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50 dark:bg-slate-900/50">
                  <th className="px-6 py-4 text-xs font-bold text-on-surface-variant dark:text-slate-200 uppercase tracking-wider font-label">Subject</th>
                  <th className="px-6 py-4 text-xs font-bold text-on-surface-variant dark:text-slate-200 uppercase tracking-wider font-label text-center">Average Score</th>
                  <th className="px-6 py-4 text-xs font-bold text-on-surface-variant dark:text-slate-200 uppercase tracking-wider font-label">Performance Level</th>
                  <th className="px-6 py-4 text-xs font-bold text-on-surface-variant dark:text-slate-200 uppercase tracking-wider font-label">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-low dark:divide-slate-700">

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-700 dark:text-blue-300">
                        <span className="material-symbols-outlined text-lg">calculate</span>
                      </div>
                      <span className="font-semibold text-on-surface dark:text-white">Mathematics</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-lg text-primary dark:text-blue-300">85%</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-xs font-bold">Good</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="material-symbols-outlined text-green-600 dark:text-green-400">trending_up</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-700 dark:text-purple-300">
                        <span className="material-symbols-outlined text-lg">biotech</span>
                      </div>
                      <span className="font-semibold text-on-surface dark:text-white">Science</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-lg text-primary dark:text-blue-300">78%</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold">Average</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-300">trending_flat</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center text-orange-700 dark:text-orange-300">
                        <span className="material-symbols-outlined text-lg">history_edu</span>
                      </div>
                      <span className="font-semibold text-on-surface dark:text-white">English Literature</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-lg text-primary dark:text-blue-300">91%</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-xs font-bold">Excellent</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="material-symbols-outlined text-green-600 dark:text-green-400">trending_up</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/40 flex items-center justify-center text-red-700 dark:text-red-300">
                        <span className="material-symbols-outlined text-lg">public</span>
                      </div>
                      <span className="font-semibold text-on-surface dark:text-white">Social Studies</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-lg text-primary dark:text-blue-300">65%</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded-full text-xs font-bold">Needs Improvement</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="material-symbols-outlined text-red-600 dark:text-red-400">trending_down</span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        <div className="h-12"></div>
      </div>
    </DashboardLayout>
  );
};

export default ChildOverview;