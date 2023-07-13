import Searchbar from "../Searchbar";
import View from "../UI/View";
import CoursemateCard from "../CoursemateCard";
import { useEffect, useState } from "react";
export default function Coursemates(props) {
  const [students, setStudents] = useState();

  function searchCoursemate(search) {}
  const url = "http://softwarehub.uk/unibase/api/users/modules/1";
  const get = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStudents(data);
  };
  useEffect(() => {
    get();
  }, []);
  return (
    <View>
      <div className="title">
        <h1>Students in your course</h1>
        <Searchbar searchCoursemate={searchCoursemate} />
      </div>
      <div className="card-container ">
        {students
          ? students.map((student) => {
              const name = student.UserFirstname + " " + student.UserLastname;
              return (
                <>
                  <CoursemateCard
                    name={name}
                    id={student.UserID}
                    img={student.UserImageURL}
                  />
                </>
              );
            })
          : null}
      </div>
    </View>
  );
}
