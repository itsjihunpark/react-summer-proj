import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Coursemates from "./views/Coursemates";
import Groups from "./views/Groups";
import Favourites from "./views/Favourites";
import { useState } from "react";
function App() {
  //this state array will need to be replaced by an API that will be provided by the mentors
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Jihun Park",
      img: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg",
      favourite: false,
    },
    {
      id: 2,
      name: "George Carter",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
      favourite: false,
    },
    {
      id: 3,
      name: "Camila Berg",
      img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg",
      favourite: false,
    },
    {
      id: 4,
      name: "Adrian Wong",
      img: "https://images.pexels.com/photos/3460478/pexels-photo-3460478.jpeg",
      favourite: false,
    },
    {
      id: 5,
      name: "Jihun Park",
      img: "https://images.pexels.com/photos/3008355/pexels-photo-3008355.jpeg",
      favourite: false,
    },
    {
      id: 6,
      name: "George Carter",
      img: "https://images.pexels.com/photos/2110858/pexels-photo-2110858.jpeg",
      favourite: false,
    },
    {
      id: 7,
      name: "Camila Berg",
      img: "https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg",
      favourite: false,
    },
    {
      id: 8,
      name: "Adrian Wong",
      img: "https://images.pexels.com/photos/5160850/pexels-photo-5160850.jpeg",
      favourite: false,
    },
    {
      id: 9,
      name: "Jihun Park",
      img: "https://images.pexels.com/photos/1804514/pexels-photo-1804514.jpeg",
      favourite: false,
    },
    {
      id: 10,
      name: "George Carter",
      img: "https://images.pexels.com/photos/2080322/pexels-photo-2080322.jpeg",
      favourite: false,
    },
    {
      id: 11,
      name: "Camila Berg",
      img: "https://images.pexels.com/photos/2177013/pexels-photo-2177013.jpeg",
      favourite: false,
    },
    {
      id: 12,
      name: "Adrian Wong",
      img: "https://images.pexels.com/photos/4684260/pexels-photo-4684260.jpeg",
      favourite: false,
    },
    {
      id: 13,
      name: "Adrian Wong",
      img: "https://images.pexels.com/photos/4684260/pexels-photo-4684260.jpeg",
      favourite: false,
    },
  ]);

  function addToFavourites(id) {
    const updatedFavourites = students.map((student) => {
      if (id === student.id && student.favourite !== true) {
        alert("Student added to favourites");
        return { ...student, favourite: true };
      } else if (id === student.id && student.favourite === true) {
        alert("You've already added this student to favourite");
      }
      return student;
    });
    setStudents(updatedFavourites);
  }
  function removeFavourite(id) {
    const updatedFavourites = students.map((student) => {
      if (id === student.id) {
        return { ...student, favourite: false };
      }
      return student;
    });
    setStudents(updatedFavourites);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route
              path="/"
              element={
                <Coursemates
                  addToFavourites={addToFavourites}
                  students={students}
                />
              }
            />
            <Route path="/groups" element={<Groups />} />
            <Route
              path="/favourites"
              element={
                <Favourites
                  students={students}
                  removeFavourite={removeFavourite}
                />
              }
            />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
