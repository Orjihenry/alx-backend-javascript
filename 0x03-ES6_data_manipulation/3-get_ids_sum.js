/**
* Retrieves ids from a list of students.
* @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students.id - Add students' id.
* @returns
*/

export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce(
      (currStudent, nextStudent) => currStudent.id || currStudent + nextStudent.id, 0,
    );
  }
  return 0;
}
