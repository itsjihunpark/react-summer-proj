export default function Card(props) {
  return (
    <div className=" items-center flex-col flex p-3 m-4 w-[220px] h-[280px] bg-gray-200 shadow-xl rounded-lg">
      {props.children}
    </div>
  );
}
