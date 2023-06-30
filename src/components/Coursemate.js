export default function Coursemate(props) {
  return (
    <div className="">
      <img className=" " alt="Img of student" src={props.img} />
      <h1 className=" text-sm font-bold">{props.name}</h1>
      <h1 className="text-center text-sm">
        Lorem ipsum dolor sit amet, consectetur
      </h1>
      <button
        onClick={() => {
          props.addToFavourites(props.id);
        }}
        className=" text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded inline-flex items-center"
      >
        <span>Add Favourite</span>
      </button>
    </div>
  );
}
