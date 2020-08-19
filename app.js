function Hi() {
  const [state, setState] = React.useState({
    name: "React",
  });
  const handleChange = () => {
    setState((pre) => ({ ...pre, name: "Wow React" }));
  };
  React.useEffect(() => {
    setState((pre) => ({ ...pre, name: "WaterMelon" }));
  }, []);
  return (
    <div>
      <p>This is a try</p>
      <p>{state.name}</p>
      <button onClick={handleChange}>click</button>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>Learn React</h1>
    <Hi />
  </div>,
  document.getElementById("root")
);
