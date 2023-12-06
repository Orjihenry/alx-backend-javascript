/**
* Retrieves ids from a list of students.
* @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - List of students with grades.
* @returns
*/

export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students)) {
    const noGrade = { grade: 'N/A' };
    return students.filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || noGrade).grade,
      }));
  }
  return [];
}
