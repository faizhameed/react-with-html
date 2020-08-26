function Hi() {
  return (
    <div>
      <select>
        <option selected disabled hidden>
          Choose here
        </option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
      </select>
    </div>
  );
}

function Button() {
  return <button>click from </button>;
}
function render(data) {
  ReactDOM.render(
    <div>
      <h1>Learn React</h1>
      <a href={data.linkAddress} target="_blank">
        {data.linkText}
      </a>
      <Hi />
    </div>,
    document.getElementById("root")
  );
}
var data = {
  linkAddress: "https://www.google.com",
  linkText: "google",
  min: -5,
  max: 5,
  color: "maroon",
  "font-weight": "bold",
  buttonText: "click me",
};

render(data);
