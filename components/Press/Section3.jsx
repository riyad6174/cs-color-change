// import { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Section3 = (props) => {
  // const [sliderValue, setSliderValue] = useState({
  //   0: 2021,
  //   50: 2022,
  //   100: 2023,
  // });

  const sliderValue = {
    0: new Date().getFullYear() - 1,
    100: new Date().getFullYear(),
  };

  // useEffect(() => {
  //   const temp = {};
  //   for (let i = 0; i <= 25; i++) {
  //     temp[i * 4] = i + 2000;
  //   }
  //   setSliderValue(temp);
  // }, []);

  return (
    <div className="container">
      <div className="text-center mb-5">
        <Slider
          className="w-50 mx-auto"
          min={0}
          // defaultValue={0}
          marks={sliderValue}
          step={null}
          onChange={(value) => {
            console.log(value);
            if (value === 0) {
              props.setYear(new Date().getFullYear() - 1);
            } else {
              props.setYear(new Date().getFullYear());
            }
          }}
        />
      </div>
    </div>
  );
};

export default Section3;
