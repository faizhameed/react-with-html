function Hi() {
  const [state, setState] = React.useState({
    name: "",
  });
  const inputGreet = React.createRef((e) => {
    console.log(e);
  });
  const greet = () => {
    console.log("hi", inputGreet.current.value);
  };

  const selectUpdate = (e) => {
    setState({ ...state, name: e.target.value });
  };
  return (
    <div>
      <p>This is a try</p>
      <select onChange={selectUpdate}>
        <option>Faiz</option>
        <option>Hameed</option>
      </select>
      <h1>Shown Name:{state.name}</h1>
      <input ref={inputGreet} type="text" />
      <button onClick={greet}>greet</button>
      <Button inputRef={inputGreet} />
    </div>
  );
}
function Button({ inputRef }) {
  const greet = () => {
    console.log("hi", inputRef.current.value);
  };
  return <button onClick={greet}>click from </button>;
}
ReactDOM.render(
  <div>
    <h1>Learn React</h1>
    <Hi />
  </div>,
  document.getElementById("root")
);
