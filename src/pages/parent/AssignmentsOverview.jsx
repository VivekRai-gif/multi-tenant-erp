import React from "react";
import DashboardLayout from "../../components/erp/parent/DashboardLayout";

const AssignmentsOverview = () => {
  return (
    <DashboardLayout>
      <div className="p-8 max-w-7xl mx-auto space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Assignments
          </h1>
          <p className="text-gray-500 dark:text-slate-200 mt-1">
            Track, review, and manage upcoming and completed coursework.
          </p>
        </div>

        {/* AI INSIGHT */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-800 dark:to-blue-600 rounded-xl p-6 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-lg">
              <span className="material-symbols-outlined text-white">psychology</span>
            </div>
            <div>
              <p className="text-xs text-blue-100 uppercase tracking-wider">
                AI Intelligence Insight
              </p>
              <p className="text-white font-semibold text-lg">
                Physics lab report is due tomorrow.
              </p>
            </div>
          </div>

          <button className="bg-white text-blue-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-50 transition">
            Review Now
          </button>
        </div>

        {/* METRICS */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex justify-between transition-colors duration-300">
            <div>
              <p className="text-gray-500 dark:text-slate-200 text-sm">Total Assignments</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">24</p>
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg h-fit">
              <span className="material-symbols-outlined text-blue-600 dark:text-blue-300">analytics</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex justify-between transition-colors duration-300">
            <div>
              <p className="text-gray-500 dark:text-slate-200 text-sm">Submitted</p>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-300">22</p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded-lg h-fit">
              <span className="material-symbols-outlined text-purple-600 dark:text-purple-300">check_circle</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex justify-between transition-colors duration-300">
            <div>
              <p className="text-gray-500 dark:text-slate-200 text-sm">Pending</p>
              <p className="text-3xl font-bold text-amber-700 dark:text-amber-400">2</p>
            </div>
            <div className="bg-amber-100 dark:bg-amber-900/40 p-3 rounded-lg h-fit">
              <span className="material-symbols-outlined text-amber-700 dark:text-amber-400">pending_actions</span>
            </div>
          </div>

        </div>

        {/* ROADMAP + SIDEBAR */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* ROADMAP */}
          <div className="lg:col-span-2 space-y-4">

            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Assignment Roadmap
              </h3>

              <div className="flex gap-2">
                <select className="border border-slate-300 dark:border-slate-600 rounded-md px-3 py-1 text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white">
                  <option>All Subjects</option>
                </select>
                <select className="border border-slate-300 dark:border-slate-600 rounded-md px-3 py-1 text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white">
                  <option>All Status</option>
                </select>
              </div>
            </div>

            {/* ITEM 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center gap-5 hover:shadow-md transition">
              <div className="bg-blue-50 dark:bg-blue-900/40 p-3 rounded-lg">
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-300">science</span>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 dark:text-slate-200 uppercase">
                  Physics • Lab Experiment #4
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Quantum Mechanics Introduction Lab Report
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 dark:text-slate-200">Deadline</p>
                <p className="text-red-500 dark:text-red-400 text-sm font-semibold">
                  Tomorrow, 11:59 PM
                </p>
              </div>
              <span className="bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs px-3 py-1 rounded-full font-semibold">
                Pending
              </span>
              <span className="material-symbols-outlined text-gray-300 dark:text-slate-400">
                chevron_right
              </span>
            </div>

            {/* ITEM 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center gap-5 hover:shadow-md transition">
              <div className="bg-purple-50 dark:bg-purple-900/40 p-3 rounded-lg">
                <span className="material-symbols-outlined text-purple-600 dark:text-purple-300">calculate</span>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 dark:text-slate-200 uppercase">
                  Mathematics • Unit 3
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Advanced Calculus - Complex Integrals
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 dark:text-slate-200">Completed</p>
                <p className="text-gray-700 dark:text-slate-200 text-sm font-semibold">
                  Oct 24, 2023
                </p>
              </div>
              <span className="bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs px-3 py-1 rounded-full font-semibold">
                Submitted
              </span>
              <span className="material-symbols-outlined text-gray-300 dark:text-slate-400">
                chevron_right
              </span>
            </div>

            {/* ITEM 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center gap-5 hover:shadow-md transition">
              <div className="bg-orange-50 dark:bg-orange-900/40 p-3 rounded-lg">
                <span className="material-symbols-outlined text-orange-600 dark:text-orange-300">menu_book</span>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 dark:text-slate-200 uppercase">
                  Literature • Weekly Essay
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Themes of Rebellion in 'The Great Gatsby'
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 dark:text-slate-200">Grade</p>
                <p className="text-blue-600 dark:text-blue-300 font-semibold">94 / 100</p>
              </div>
              <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full font-semibold">
                Graded
              </span>
              <span className="material-symbols-outlined text-gray-300 dark:text-slate-400">
                chevron_right
              </span>
            </div>

          </div>

          {/* SIDEBAR */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 h-fit transition-colors duration-300">

            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Statistics
            </h4>

            <div className="mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 dark:text-slate-200">Submission Rate</span>
                <span className="font-semibold text-blue-600 dark:text-blue-300">91.6%</span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-slate-700 rounded-full mt-2">
                <div className="h-2 bg-blue-600 dark:bg-blue-400 rounded-full w-[91%]"></div>
              </div>
            </div>

            <div className="flex justify-between text-sm mb-4">
              <span className="text-gray-500 dark:text-slate-200">Avg. Grade (Overall)</span>
              <span className="text-purple-600 dark:text-purple-300 font-semibold">A- (89%)</span>
            </div>

            <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
              <p className="text-xs text-gray-400 dark:text-slate-200 uppercase mb-2">
                Upcoming Tests
              </p>
              <div className="flex gap-2 items-center text-sm text-gray-700 dark:text-slate-200">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                World History Midterm
              </div>
              <p className="text-xs text-gray-400 dark:text-slate-200 ml-4">
                Oct 28, 2023
              </p>
            </div>

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default AssignmentsOverview;