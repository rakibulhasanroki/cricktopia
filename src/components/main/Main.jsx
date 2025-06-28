import { useState } from "react";
import AvaiablePlayer from "../availablePlayer/AvailablePlayer";
import Card from "../card/Card";
import Selected from "../selected/Selected";

export default function Main({ available }) {
  const [isAvailable, setAvailable] = useState(true);
  const [isSelected, setSelected] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);
  const [choosePlayer, setChoosePlayer] = useState([]);

  const choosePlayerButton = (selectCard) => {
    if (
      choosePlayer.includes(selectCard.id) &&
      selectedCard.includes(selectCard)
    ) {
      return;
    } else {
      setChoosePlayer([...choosePlayer, selectCard.id]);
      setSelectedCard([...selectedCard, selectCard]);
    }
  };

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
        {<Selected selectedCard={selectedCard}></Selected>}
      </section>
    </main>
  );
}
