import Button from "../button/Button";
import { FaRegTrashCan } from "react-icons/fa6";

export default function Selected({
  selectedCard,
  removePlayer,
  toggleAvailable,
}) {
  return (
    <div>
      {selectedCard.map((card) => (
        <div
          className="p-4 border rounded-lg border-gray-200 mb-10 flex justify-between items-center"
          key={card.id}
        >
          <div className="flex gap-5 ">
            <img
              src={card.img}
              className="w-15 h-15 object-cover rounded-lg "
            />
            <div>
              <h1 className="text-xl font-bold">{card.name}</h1>
              <p className="text-base text-gray-400">{card.role}</p>
            </div>
          </div>
          <div>
            <Button
              handleClick={() => removePlayer(card.id)}
              className="active:scale-95 transform duration-150 cursor-pointer"
            >
              <FaRegTrashCan className="text-red-400 h-10" />
            </Button>
          </div>
        </div>
      ))}
      <div className="flex justify-self-start border border-lime-300 md:p-1 p-0.5 rounded-lg">
        <Button
          name={"Add more player"}
          className={
            "cursor-pointer bg-lime-300 lg:py-2  lg:px-3 p-1 rounded-lg md:text-base text-xs font-semibold text-black active:scale-95 transform duration-150"
          }
          handleClick={toggleAvailable}
        ></Button>
      </div>
    </div>
  );
}
