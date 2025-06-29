import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import {
  setCoinStorage,
  getCoinStorage,
  setSelectedStorage,
  getSeletecStorage,
  setSelectedStorageCard,
  getSeletecStorageCard,
} from "./components/utils/storage";
import Newsletter from "./components/newsletter/Newsletter";

function App() {
  const [available, setAvialable] = useState([]);
  const [coin, setCoin] = useState(0);
  const [selectedCard, setSelectedCard] = useState([]);
  const [choosePlayer, setChoosePlayer] = useState([]);

  const choosePlayerButton = (selectCard) => {
    const preventCliam = getSeletecStorage();

    if (preventCliam.includes(selectCard.id)) {
      return;
    }

    if (
      choosePlayer.includes(selectCard.id) &&
      selectedCard.includes(selectCard)
    ) {
      return;
    } else {
      if (choosePlayer.length >= 6 && selectedCard.length >= 6) {
        return toast("You have exceeded the player selection limit!", {
          position: "top-center",
          autoClose: 3000,
        });
      } else {
        if (coin <= 0) {
          return toast("Not enough coin!", {
            position: "top-center",
            autoClose: 3000,
          });
        } else {
          const updateCoin = coin - selectCard.price;
          setCoin(updateCoin);
          setChoosePlayer([...choosePlayer, selectCard.id]);
          setSelectedCard([...selectedCard, selectCard]);
          setSelectedStorage(`${selectCard.id}`);
          setSelectedStorageCard(selectCard);
          setCoinStorage(updateCoin);
          return toast(
            `${selectCard.name} selected. ${selectCard.price} credits deducted from your balance.`,
            {
              position: "top-center",
              autoClose: 3000,
            }
          );
        }
      }
    }
  };

  const removePlayer = (id) => {
    if (choosePlayer.includes(id)) {
      const update = choosePlayer.filter((idx) => idx !== id);
      const find = choosePlayer.find((idx) => idx == id);
      sessionStorage.removeItem(find);
      sessionStorage.setItem("selected", JSON.stringify(update));
      setChoosePlayer(update);
    }

    selectedCard.forEach((card) => {
      if (id === card.id) {
        const reverseCoin = coin + card.price;
        setCoin(reverseCoin);
        const update = selectedCard.filter((card) => card.id !== id);
        const find = selectedCard.find((card) => card.id == id);
        sessionStorage.removeItem(find);
        sessionStorage.setItem("card", JSON.stringify(update));

        setSelectedCard(update);
        setCoinStorage(reverseCoin);
        return toast(
          `${card.name} deselected. ${card.price} credits added back to your balance.`,
          {
            position: "top-center",
          }
        );
      }
    });
  };

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setAvialable(data));
  }, []);

  useEffect(() => {
    const getCoin = getCoinStorage();
    if (getCoin) {
      setCoin(getCoin);
    }
  }, []);

  useEffect(() => {
    const storage = getSeletecStorage();
    const storageCard = getSeletecStorageCard();
    setSelectedCard(storageCard);
    setChoosePlayer(storage);
  }, []);

  const claimFreeCredit = () => {
    let newCoin = coin + 16000000;
    setCoin(newCoin);
    setCoinStorage(newCoin);
  };
  const resetCoin = () => {
    const initCoin = getCoinStorage();
    if (initCoin >= 0) {
      const updateCoin = coin * 0;
      sessionStorage.setItem("coin", JSON.stringify(updateCoin));
      setCoin(updateCoin);
    }
  };

  return (
    <section>
      <section className="max-w-11/12 mx-auto">
        <Header
          claimFreeCredit={claimFreeCredit}
          coin={coin}
          resetCoin={resetCoin}
        ></Header>
        <Main
          available={available}
          selectedCard={selectedCard}
          choosePlayer={choosePlayer}
          choosePlayerButton={choosePlayerButton}
          removePlayer={removePlayer}
        ></Main>

        <ToastContainer position="top-center" />
      </section>
      <section>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </section>
    </section>
  );
}

export default App;
