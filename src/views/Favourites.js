import { useState } from "react";
import Coursemate from "../components/Coursemate";
import Searchbar from "../components/Searchbar";

export default function Favourites(props) {
  const [searchedFavourite, setSearchedFavourite] = useState(props.favourites);
  function searchFavourite(search) {
    if (search === "") {
      setSearchedFavourite(props.favourites);
    } else {
      const filteredStudents = props.favourites.filter((student) => {
        return student.name.toLowerCase().includes(search.toLowerCase());
      });
      setSearchedFavourite(filteredStudents);
      console.log(filteredStudents);
    }
  }
  return (
    <>
      <h1>Favourites components go here</h1>
      <h1 className=" mt-5 text-center text-xl font-medium my-3 break-keep">
        Students in your fav list
      </h1>
      <Searchbar searchCoursemate={searchFavourite} />
      <div className=" justify-start flex-wrap flex mx-[7%] ">
        {searchedFavourite.map((favourite) => {
          return (
            <Coursemate
              name={favourite.name}
              id={favourite.id}
              img={favourite.img}
            />
          );
        })}
      </div>
    </>
  );
}
