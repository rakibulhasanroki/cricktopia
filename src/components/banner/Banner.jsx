import bannerBg from "../../assets/bg-shadow.png";
import bannerLogo from "../../assets/banner-main.png";
import Button from "../button/Button";

export default function Banner({ claimFreeCredit, resetCoin }) {
  return (
    <section className="mt-6 relative">
      <div className="bg-black rounded-2xl ">
        <img
          src={bannerBg}
          alt=""
          className="rounded-2xl w-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white flex-col xl:space-y-8 md:space-y-2 space-y-0.5">
        <img src={bannerLogo} alt="" className="w-10 md:w-20 2xl:w-52  " />
        <h1 className="text-base md:text-3xl xl:text-5xl text-center leading-4 md:leading-8">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-xs md:text-base lg:text-2xl">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="border border-lime-300 md:p-1 p-0.5 rounded-lg">
          <Button
            name={"Claim Free Credit"}
            className={
              "cursor-pointer bg-lime-300 lg:py-2  lg:px-3 p-1 rounded-lg md:text-base text-xs font-semibold text-black active:scale-95 transform duration-150"
            }
            handleClick={claimFreeCredit}
          ></Button>
        </div>
        <div className="border border-lime-300 md:p-1 p-0.5 rounded-lg">
          <Button
            name={"Reset"}
            className={
              "cursor-pointer bg-lime-300 lg:py-2  lg:px-3 p-1 rounded-lg md:text-base text-xs font-semibold text-black active:scale-95 transform duration-150"
            }
            handleClick={resetCoin}
          ></Button>
        </div>
      </div>
    </section>
  );
}
