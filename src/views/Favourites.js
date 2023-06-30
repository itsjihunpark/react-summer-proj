import Favourite from "../components/Favourite";

export default function Favourites(props) {
  return (
    <>
      <h1>Favourites components go here</h1>
      <h1 className="">Students in your fav list</h1>
      <div className="">
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
