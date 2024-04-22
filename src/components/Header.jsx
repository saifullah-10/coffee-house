import CommonHeader from "../assets/images/more/15.jpg";
import HeaderLogo from "../assets/images/more/logo1.png";
export default function Header() {
  return (
    <div
      className=" font-rancho text-4xl font-semibold text-white flex justify-center  py-4"
      style={{ backgroundImage: `url(${CommonHeader})` }}
    >
      <div className="flex gap-4 items-center">
        <img src={HeaderLogo} alt="" width={50} /> <h1>Espresso Emporium</h1>
      </div>
    </div>
  );
}
