import Card from "./UI/Card";
export default function CoursemateCards(props) {
  return (
    <Card>
      <img className=" " alt="Img of student" src={props.img} />
      <h1 className="">{props.name}</h1>
      <h1 className="">Lorem ipsum dolor sit amet, consectetur</h1>
      <button
        onClick={() => {
          props.addToFavourites(props.id);
        }}
        className=""
      >
        <span>Add Favourite</span>
      </button>
    </Card>
  );
}
