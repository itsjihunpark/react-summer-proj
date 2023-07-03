import { useNavigate } from "react-router-dom";
export default function FavouriteCard(props) {
  const navigate = useNavigate();
  return (
    <div className="">
      <img className="" alt="Img of student" src={props.img} />
      <h1 className="">{props.name}</h1>
      <h1 className="">Lorem ipsum dolor sit amet, consectetur</h1>
      <button
        onClick={() => {
          props.removeFavourite(props.id);
        }}
        className=""
      >
        <span>Remove Favourite</span>
      </button>
    </div>
  );
}
