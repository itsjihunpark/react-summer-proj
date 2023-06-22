import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Coursemates from "./views/Coursemates";
import Groups from "./views/Groups";
import Favourites from "./views/Favourites";
import { useEffect, useState } from "react";
function App() {
  //this state array will need to be replaced by an API that will be provided by the mentors
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Jihun Park",
      img: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg",
    },
    {
      id: 2,
      name: "George Carter",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
    {
      id: 3,
      name: "Camila Berg",
      img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg",
    },
    {
      id: 4,
      name: "Adrian Wong",
      img: "https://images.pexels.com/photos/3460478/pexels-photo-3460478.jpeg",
    },
    {
      id: 5,
      name: "Jihun Park",
      img: "https://images.pexels.com/photos/3008355/pexels-photo-3008355.jpeg",
    },
    {
      id: 6,
      name: "George Carter",
      img: "https://images.pexels.com/photos/2110858/pexels-photo-2110858.jpeg",
    },
    {
      id: 7,
      name: "Camila Berg",
      img: "https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg",
    },
    {
      id: 8,
      name: "Adrian Wong",
      img: "https://images.pexels.com/photos/5160850/pexels-photo-5160850.jpeg",
    },
    {
      id: 9,
      name: "Jihun Park",
      img: "https://images.pexels.com/photos/1804514/pexels-photo-1804514.jpeg",
    },
    {
      id: 10,
      name: "George Carter",
      img: "https://images.pexels.com/photos/2080322/pexels-photo-2080322.jpeg",
    },
    {
      id: 11,
      name: "Camila Berg",
      img: "https://images.pexels.com/photos/2177013/pexels-photo-2177013.jpeg",
    },
    {
      id: 12,
      name: "Adrian Wong",
      img: "https://images.pexels.com/photos/4684260/pexels-photo-4684260.jpeg",
    },
    {
      id: 13,
      name: "Adrian Wong",
      img: "https://images.pexels.com/photos/4684260/pexels-photo-4684260.jpeg",
    },
  ]);
  const [favourites, setFavourites] = useState([]); //also will need to be persisted in the back end
  function addToFavourites(id) {
    let exists = false;
    favourites.forEach((favourite) => {
      if (id === favourite.id) {
        exists = true;
      }
    });
    if (!exists) {
      console.log(id);
      let student = students[id - 1];
      setFavourites([...favourites, student]);
    } else {
      alert("Already added to favourites");
    }
  }
  function removeFavourite(id) {
    let index;
    const deletedList = favourites.map((favourite) => {
      if (favourite.id === id) {
        index = favourites.indexOf(favourite);
      }
      return favourite;
    });
    deletedList.splice(index, 1);
    setFavourites(deletedList);
    console.log(deletedList);
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
                  favourites={favourites}
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
