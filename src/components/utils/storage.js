const getCoinStorage = () => {
  const getItems = sessionStorage.getItem("coin");
  if (getItems) {
    return JSON.parse(getItems);
  }
  return;
};

const setCoinStorage = (coin = 0) => {
  if (coin) {
    sessionStorage.setItem("coin", JSON.stringify(coin));
  }
};

const getSeletecStorage = () => {
  const item = sessionStorage.getItem("selected");
  if (item) {
    return JSON.parse(item);
  }
  return [];
};

const setSelectedStorage = (id) => {
  const items = getSeletecStorage();
  if (items.includes(id)) {
    return;
  } else {
    items.push(id);
    sessionStorage.setItem("selected", JSON.stringify(items));
  }
};

const getSeletecStorageCard = () => {
  const item = sessionStorage.getItem("card");
  if (item) {
    return JSON.parse(item);
  }
  return [];
};

const setSelectedStorageCard = (card) => {
  const items = getSeletecStorageCard();

  if (items.includes(card)) {
    return;
  } else {
    items.push(card);
    sessionStorage.setItem("card", JSON.stringify(items));
  }
};

export {
  getCoinStorage,
  setCoinStorage,
  setSelectedStorage,
  getSeletecStorage,
  getSeletecStorageCard,
  setSelectedStorageCard,
};
