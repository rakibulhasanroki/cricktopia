import Button from "../button/Button";
export default function Newsletter() {
  return (
    <div className="mt-60 relative">
      <div className="max-w-11/12 mx-auto relative ">
        <div className="absolute inset-x-0  -top-30 md:-top-25 lg:-top-35 z-40">
          <div className="space-y-4 max-w-full bg-gradient-to-r from-white via-white to-yellow-600 text-black border rounded-2xl p-5 text-center md:text-normal md:p-10 lg:p-20 w-full flex justify-center items-center flex-col">
            <h1 className="text-3xl md:text-4xl text-center font-bold">
              Subscribe to our Newsletter
            </h1>
            <p className="text-gray-600">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex ">
              <input
                type="text"
                placeholder="Type here"
                className="p-2 focus:outline-none  rounded-l text-xs xs:w-3/4 lg:w-3/4 bg-amber-50 text-black"
              />
              <Button
                name={"Subscribe"}
                className=" p-1.5 rounded-r text-xs cursor-pointer bg-gradient-to-r from-yellow-500 to-purple-400 text-black font-bold"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
