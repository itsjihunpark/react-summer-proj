export default function Searchbar(props) {
  function handleChange(e) {
    var value = e.target.value;
    props.searchCoursemate(value);
  }
  return (
    <>
      <div>
        <div>
          <div></div>
          <input
            type="text"
            name="name"
            id="name"
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
