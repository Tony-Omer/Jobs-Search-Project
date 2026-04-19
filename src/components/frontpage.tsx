import img1 from "../assets/images/image 1.jpg";
import img2 from "../assets/images/image 2.jpg";
import img3 from "../assets/images/image 3.jpg";
import img4 from "../assets/images/image 4.jpg";

const FRONTPAGE = () => {
  return (
    <div className="frontpage">
      <div className="slider">

        <div className="box">
          <img src={img1} alt="" />
        </div>

        <div className="box">
          <img src={img2} alt="" />
        </div>

        <div className="box">
          <img src={img3} alt="" />
        </div>

        <div className="box">
          <img src={img4} alt="" />
        </div>

        <div className="box">
          <img src={img1} alt="" />
        </div>

      </div>
    </div>
  );
};

export default FRONTPAGE;