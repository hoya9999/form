//kgh
import { useEffect, useState } from "react";
// import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [dark, setDark] = useState(false);

  const age = 23
  const user = { name, age };

  const buttonStyle = {
    backgroundColor: dark && "#000",
    color: dark && "#FFF"
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    setDark((currDark) => !currDark);
  };

  useEffect(() => {
    console.log(user);
  });

  return (
    <div className="App">
      <input value={name} onChange={handleName} />
      <button style={buttonStyle} onClick={handleClick}>
        Toggle Theme
      </button>
    </div>
  );
}