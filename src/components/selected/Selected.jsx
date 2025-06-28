export default function Selected({ selectedCard }) {
  return (
    <div>
      {selectedCard.map((card) => (
        <h1 key={card.id}>{card.name}</h1>
      ))}
    </div>
  );
}
