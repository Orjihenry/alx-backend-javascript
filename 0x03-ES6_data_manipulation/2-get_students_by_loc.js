/**
* Retrieves ids from a list of students.
* @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students.city - List of students from a particular city.
* @returns
*/

export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
