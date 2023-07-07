import Card from "./UI/Card";
export default function CoursemateCards(props) {
  return (
    <Card>
      <img alt="Img of student" src={props.img} />
      <h1>{props.name}</h1>
      <h1>Lorem ipsum dolor sit amet, consectetur</h1>
      <button
        onClick={() => {
          props.addToFavourites(props.id);
        }}
      >
        <span>Add Favourite</span>
      </button>
    </Card>
  );
}
