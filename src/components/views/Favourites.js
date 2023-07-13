import FavouriteCard from "../FavouriteCard";

export default function Favourites(props) {
  return (
    <>
      <h1>Students in your fav list</h1>
      <div className="card-container">
        {props.students.map((student) => {
          return student.favourite ? (
            <FavouriteCard
              name={student.name}
              id={student.id}
              img={student.img}
              removeFavourite={props.removeFavourite}
            />
          ) : null;
        })}
      </div>
    </>
  );
}
