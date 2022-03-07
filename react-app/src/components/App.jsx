function App() {
  const name = "0";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    <>
      {name === "리액트" ? (
        <h1>리액트 입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
      {name === "리액트" && <h1>리액트입니다.</h1>}
      {name || <h1>값이 유효하지 않습니다.</h1>}

      <div style={style} className="" id="idtest">
        {name}
      </div>
      <input />
      <br />
    </>
  );
}

export default App;
