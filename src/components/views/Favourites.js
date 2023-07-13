import FavouriteCard from "../FavouriteCard";

export default function Favourites(props) {
  return (
    <>
      <h1>Students in your fav list</h1>
      <div className="card-container">
        {props.students.map((student) => {})}
      </div>
    </>
  );
}
