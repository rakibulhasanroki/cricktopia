import Button from "../button/Button";

export default function AvaiablePlayer({
  toggleAvailable,
  toggleSelected,
  isAvailable,
  isSelected,
  selectedCard,
}) {
  return (
    <section className="flex flex-col md:flex-row md:justify-between items-center  mt-12 gap-4">
      <div>
        <h2 className="font-bold">
          {isAvailable
            ? "Avaialable Player"
            : isSelected
            ? `Selected Players (${selectedCard.length}/6)`
            : ""}
        </h2>
      </div>
      <div>
        <Button
          handleClick={toggleAvailable}
          name={"Available"}
          className={
            isAvailable
              ? "px-4 py-1.5 border rounded-l-lg border-gray-200 cursor-pointer active:scale-95 transition transform duration-150 font-semibold bg-amber-300 "
              : "px-4 py-1.5  border rounded-l-lg border-gray-200 cursor-pointer active:scale-95 transition transform duration-150 font-semibold"
          }
        ></Button>
        <Button
          handleClick={toggleSelected}
          name={"Selected"}
          className={
            isSelected
              ? "px-4 py-1.5  border rounded-r-lg border-gray-200 cursor-pointer active:scale-95 transition transform duration-150 font-semibold bg-amber-300"
              : "px-4 py-1.5  border rounded-r-lg border-gray-200 cursor-pointer active:scale-95 transition transform duration-150 font-semibold"
          }
        ></Button>
      </div>
    </section>
  );
}
