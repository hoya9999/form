import { useEffect, useMemo, useState } from "react";
// import "./styles.css";

export default function App() {
  const age = 23;
  const [name, setName] = useState("");
  const [dark, setDark] = useState(false);

  const user = useMemo(() => {
    return { name, age };
  }, [name, age]);

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
  }, [user]);

  return (
    <div className="App">
      <input value={name} onChange={handleName} />
      <button style={buttonStyle} onClick={handleClick}>
        Toggle Theme
      </button>
    </div>
  );
}