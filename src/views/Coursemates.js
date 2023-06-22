import Searchbar from "../components/Searchbar";
import Coursemate from "../components/Coursemate";
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
      <h1 className=" mt-5 text-center text-xl font-medium my-3 break-keep">
        Students in your course
      </h1>
      <Searchbar searchCoursemate={searchCoursemate} />
      <div className=" justify-start flex-wrap flex mx-[7%] ">
        {searchedStudent.map((student) => {
          return (
            <Coursemate
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
