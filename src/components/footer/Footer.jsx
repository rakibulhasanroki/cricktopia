import Button from "../button/Button";
import logoFooter from "../../assets/logo-footer.png";
export default function Footer() {
  return (
    <section className=" bg-blue-950 md:p-10 lg:p-20 p-4 text-white ">
      <div className="flex justify-center mt-30">
        <img src={logoFooter} alt="" />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 justify-between mt-12">
        <div className="space-y-2">
          <h3>About Us</h3>
          <p className="xl:w-2/4 md:w-3/4 text-gray-400 ">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div className="justify-self-start space-y-2 ">
          <h3>Quick Links</h3>
          <ul className="text-gray-400">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3>Subscribe</h3>
          <p className="xl:w-2/4 text-gray-400">
            Subscribe to our newsletter for the latest updates.
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
    </section>
  );
}
