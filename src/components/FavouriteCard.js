import Card from "./UI/Card";
export default function FavouriteCard(props) {
  return (
    <Card>
      <img alt="Img of student" src={props.img} />
      <h1>{props.name}</h1>
      <h1>Lorem ipsum dolor sit amet, consectetur</h1>
      <button
        onClick={() => {
          props.removeFavourite(props.id);
        }}
      >
        <span>Remove Favourite</span>
      </button>
    </Card>
  );
}
