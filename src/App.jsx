import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const [available, setAvialable] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setAvialable(data));
  }, []);
  return (
    <section className="max-w-11/12 mx-auto">
      <Header></Header>
      <Main available={available}></Main>
    </section>
  );
}

export default App;
