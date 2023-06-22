export default function Searchbar(props) {
  function handleChange(e) {
    var value = e.target.value;
    props.searchCoursemate(value);
  }
  return (
    <>
      <div>
        <div className="relative mt-2 mb-4 rounded-md shadow-sm md:mx-[25%] mx-[10%] ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            type="text"
            name="name"
            id="name"
            className=" block w-full rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Try type a name?"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
      </div>
    </>
  );
}
