import Header from "../components/Header";
import BackgroundImg from "../assets/images/more/3.png";
import BackgroundImgHero from "../assets/images/more/1.png";
import Aroma from "../assets/images/icons/1.png";
import Quality from "../assets/images/icons/2.png";
import Grades from "../assets/images/icons/3.png";
import Roasting from "../assets/images/icons/4.png";
import CoffeeCard from "../components/CoffeeCard";

export default function Home() {
  return (
    <div className=" font-rancho">
      <div>
        <Header></Header>
      </div>
      <div>
        <div
          className=" bg-center object-cover flex justify-end  py-60"
          style={{ backgroundImage: `url(${BackgroundImg})` }}
        >
          <div className=" w-1/2 pr-20  ">
            <h1 className=" text-4xl text-white font-bold">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className=" font-raleway text-white my-4">
              It is coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="py-2 px-4 bg-[#E3B577] f">Learn More</button>
          </div>
        </div>
        <div className=" bg-[#ECEAE3] flex gap-5 py-10 justify-evenly">
          <div>
            <img src={Aroma} alt="" />
            <h2>Awesome Aroma</h2>
            <p>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div>
            <img src={Quality} alt="" />
            <h2>High Quality</h2>
            <p>We served the coffee to you maintaining the best quality</p>
          </div>
          <div>
            <img src={Grades} alt="" />
            <h2>Pure Grades</h2>
            <p>
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div>
            <img src={Roasting} alt="" />
            <h2>Proper Roasting</h2>
            <p>
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
        <div
          className=" bg-cover"
          style={{ backgroundImage: `url(${BackgroundImgHero})` }}
        >
          <div className="flex flex-col items-center mt-20 gap-3">
            <p>--- Sip & Savor ---</p>
            <h2 className=" text-4xl font-semibold">Our Popular Products</h2>
            <button className=" flex items-center gap-2 bg-[#E3B577] border-2 border-[#331A15] px-4 py-1">
              Add Coffee <img className=" inline w-4" src={Aroma} alt="" />
            </button>
          </div>
          <div className="p-20 grid grid-cols-3 gap-5">
            <CoffeeCard></CoffeeCard>
            <CoffeeCard></CoffeeCard>
            <CoffeeCard></CoffeeCard>
            <CoffeeCard></CoffeeCard>
            <CoffeeCard></CoffeeCard>
            <CoffeeCard></CoffeeCard>
          </div>
        </div>
      </div>
    </div>
  );
}
