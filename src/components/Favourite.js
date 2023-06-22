import { Alert } from "bootstrap";
import { useNavigate } from "react-router-dom";
export default function Favourite(props) {
  const navigate = useNavigate();
  return (
    <div className=" items-center flex-col flex p-3 m-4 w-[220px] h-[280px] bg-gray-200 shadow-xl rounded-lg">
      <img
        className=" overflow-hidden w-[100%] h-[130px] rounded-lg my-2"
        alt="Img of student"
        src={props.img}
      />
      <h1 className=" text-sm font-bold">{props.name}</h1>
      <h1 className="text-center text-sm">
        Lorem ipsum dolor sit amet, consectetur
      </h1>
      <button
        onClick={() => {
          props.removeFavourite(props.id);
          navigate("/");
        }}
        className=" text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded inline-flex items-center"
      >
        <span>Remove Favourite</span>
      </button>
    </div>
  );
}
