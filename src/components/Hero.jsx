import Appbar from "./Appbar";
import Qoutesbar from "./Qoutesbar";
import backgroundImage from "../assets/Background.png";
const Hero = () => {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div>
          <Appbar />
          <Qoutesbar />
        </div>
      </div>
    </>
  );
};

export default Hero;
