export default function Searchbar(props) {
  function handleChange(e) {
    var value = e.target.value;
    props.searchCoursemate(value);
  }
  return (
    <>
      <div>
        <div className="">
          <div className=""></div>
          <input
            type="text"
            name="name"
            id="name"
            className=""
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
