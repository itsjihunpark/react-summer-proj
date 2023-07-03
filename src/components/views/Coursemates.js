import Searchbar from "../Searchbar";
import CoursemateCard from "../CoursemateCard";
import { useState } from "react";
export default function Coursemates(props) {
  const [searchedStudent, setSearchedStudent] = useState(props.students);

  function searchCoursemate(search) {
    if (search === "") {
      setSearchedStudent(props.students);
    } else {
      const filteredStudents = props.students.filter((student) => {
        return student.name.toLowerCase().includes(search.toLowerCase());
      });
      setSearchedStudent(filteredStudents);
      console.log(filteredStudents);
    }
  }

  return (
    <>
      <h1 className="">Students in your course</h1>
      <Searchbar searchCoursemate={searchCoursemate} />
      <div className="card-container">
        {searchedStudent.map((student) => {
          return (
            <CoursemateCard
              key={student.id}
              name={student.name}
              id={student.id}
              img={student.img}
              addToFavourites={props.addToFavourites}
            />
          );
        })}
      </div>
    </>
  );
}
