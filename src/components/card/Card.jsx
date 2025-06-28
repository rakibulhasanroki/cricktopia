import Button from "../button/Button";

export default function Card({ card, choosePlayerButton, choosePlayer }) {
  const { img, name, flag, country, role, rating, hand, price } = card;

  return (
    <div className="flex p-5 flex-col border border-gray-300 rounded-2xl space-y-4">
      <div className="">
        <img
          src={img}
          alt=""
          className="w-96 h-72 2xl:w-full object-cover rounded-2xl"
        />
      </div>
      <div>
        <h2 className=" flex gap-2 items-center text-base font-bold xl:text-xl">
          <img
            src={img}
            alt=""
            className="w-5 h-5  object-cover rounded-full"
          />
          <span>{name}</span>
        </h2>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-base text-gray-400">
            <img src={flag} alt="" className="w-5 h-3 object-cover " />
            <span>{country}</span>
          </div>
          <div>
            <p className="px-4 py-1.5 border border-gray-300 rounded-xl bg-gray-100">
              {role}
            </p>
          </div>
        </div>
      </div>
      <hr className="text-gray-200" />
      <div>
        <div>
          <h4>Rating: {rating}</h4>
          <div className="flex justify-between ">
            <h4>{hand[0]}</h4>
          </div>
          <div className="flex flex-col">
            <h4 className="justify-self-start">Price: ${price}</h4>
            <Button
              handleClick={() => choosePlayerButton(card)}
              className="px-3 py-1 border border-gray-300 rounded-xl active:scale-95 transform  duration-150 cursor-pointer  justify-self-center"
              name={
                choosePlayer.includes(card.id) ? "Selected" : "Choose Player"
              }
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
