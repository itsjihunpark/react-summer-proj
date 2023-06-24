import Favourite from "../components/Favourite";

export default function Favourites(props) {
  return (
    <>
      <h1>Favourites components go here</h1>
      <h1 className=" mt-5 text-center text-xl font-medium my-3 break-keep">
        Students in your fav list
      </h1>
      <div className=" justify-start flex-wrap flex mx-[7%] ">
        {props.students.map((student) => {
          if (student.favourite === true) {
            return (
              <Favourite
                name={student.name}
                id={student.id}
                img={student.img}
                removeFavourite={props.removeFavourite}
              />
            );
          }
        })}
      </div>
    </>
  );
}
