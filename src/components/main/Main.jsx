import { useState } from "react";
import AvaiablePlayer from "../availablePlayer/AvailablePlayer";
import Card from "../card/Card";
import Selected from "../selected/Selected";

export default function Main({
  available,
  selectedCard,
  choosePlayer,
  choosePlayerButton,
  removePlayer,
}) {
  const [isAvailable, setAvailable] = useState(true);
  const [isSelected, setSelected] = useState(false);

  const toggleAvailable = () => {
    setAvailable(true);
    setSelected(false);
  };

  const toggleSelected = () => {
    setAvailable(false);
    setSelected(true);
  };
  return (
    <main>
      <AvaiablePlayer
        isAvailable={isAvailable}
        isSelected={isSelected}
        toggleAvailable={toggleAvailable}
        toggleSelected={toggleSelected}
        selectedCard={selectedCard}
      ></AvaiablePlayer>
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 ">
        {isAvailable &&
          available.map((card) => (
            <Card
              card={card}
              key={card.id}
              choosePlayerButton={choosePlayerButton}
              choosePlayer={choosePlayer}
            ></Card>
          ))}
      </section>
      <section>
        {isSelected && (
          <Selected
            selectedCard={selectedCard}
            removePlayer={removePlayer}
            toggleAvailable={toggleAvailable}
          ></Selected>
        )}
      </section>
    </main>
  );
}
