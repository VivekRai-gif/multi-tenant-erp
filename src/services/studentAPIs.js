import api from "./api";

export const getStudentProfile = async (studentId) => {
  const response = await api.get(`/profiles/students/${studentId}/`);
  return response.data;
};

export const getStudentDashboardData = async (studentId) => {
  const [attendanceRes, gradesRes, examsRes] = await Promise.all([
    api.get(`/operations/attendance/?student=${studentId}`),
    api.get(`/operations/grades/?student=${studentId}`),
    api.get(`/operations/exams/?student=${studentId}`),
  ]);

  return {
    attendance: attendanceRes.data,
    grades: gradesRes.data,
    exams: examsRes.data,
  };
};

export const getStudentAttendanceRecords = async (studentId) => {
  const response = await api.get(`/operations/attendance/?student=${studentId}`,);
  return response.data.results;
};

export const getAcademicYear = async (studentId) => {
  const [years, subs] = await Promise.all([
    api.get(`academics/academic-years/`),
    api.get(`academics/subjects/`),
  ]);

  return {
    years: years.data.results,
    subs: subs.data.results
  }
  
}
