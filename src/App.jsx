import "@picocss/pico/css/pico.min.css";
import "@picocss/pico/css/pico.colors.css";

import { useState, useEffect } from "react";

import Nav from "./components/Nav";
import ListCast from "./components/ListCast";
import Modal from "./components/Modal";

function App() {
  const [cast, setCast] = useState([]);
  const [selectedCast, setSelectedCast] = useState(null);
  const name = "Stargazers";

  useEffect(() => {
    async function fetchCast() {
      const response = await fetch("cast.json");
      setCast(await response.json());
    }

    fetchCast();
  }, []);

  return (
    <div className="container">
      <Nav cast={cast} setSelectedCast={setSelectedCast} />
      <img src="images/group.svg" alt="StarGazers Group" />
      <h1 style={{ marginTop: "20px" }}>
        Meet the <i style={{ color: "#e82269", fontSize: "3rem" }}>{name}</i>
      </h1>
      <p>
        Members of an <b style={{ color: "#995bc2" }}>intergalactic alliance</b>{" "}
        paving the way for peace and benevolence among all species. They are
        known for their enthusiasm for science, for their love of fun, and their
        dedication to education.
      </p>
      <ListCast cast={cast} setSelectedCast={setSelectedCast} />
      {selectedCast && (
        <Modal
          cast={cast}
          member={selectedCast}
          setSelectedCast={setSelectedCast}
        />
      )}
    </div>
  );
}

export default App;
