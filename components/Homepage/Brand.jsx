import { Grid } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import Brand4Hover from "../../public/assets/images/colonelsaab-Hover.png";
import Brand4 from "../../public/assets/images/colonelsaab.png";
import Brand2Hover from "../../public/assets/images/jewaels-Hover.png";
import Brand2 from "../../public/assets/images/jewaels.png";
import Brand1Hover from "../../public/assets/images/Noor mahal-Hover.png";
import Brand1 from "../../public/assets/images/Noor mahal.png";
import Brand3Hover from "../../public/assets/images/Only-Hazuri-Bagh-Logo-Hover.png";
import Brand3 from "../../public/assets/images/Only-Hazuri-Bagh-Logo.png";

const Brand = () => {
  const [brand1Image, setBrand1Image] = useState(Brand1);
  const [brand2Image, setBrand2Image] = useState(Brand2);
  const [brand3Image, setBrand3Image] = useState(Brand3);
  const [brand4Image, setBrand4Image] = useState(Brand4);

  const handleMouseEnter = (image, state) => {
    if (image === "brand1") {
      if (state === "in") {
        setBrand1Image(Brand1Hover);
      } else {
        setBrand1Image(Brand1);
      }
    }
    if (image === "brand2") {
      if (state === "in") {
        setBrand2Image(Brand2Hover);
      } else {
        setBrand2Image(Brand2);
      }
    }
    if (image === "brand3") {
      if (state === "in") {
        setBrand3Image(Brand3Hover);
      } else {
        setBrand3Image(Brand3);
      }
    }
    if (image === "brand4") {
      if (state === "in") {
        setBrand4Image(Brand4Hover);
      } else {
        setBrand4Image(Brand4);
      }
    }
  };

  return (
    <div className="mt-4 mt-lg-0">
      <h2 className="fw-bold text-center text-success text-uppercase">
        Our Brands
      </h2>

      <Grid container alignItems="center" justifyContent="center">
        <Grid item sx={{ p: "1rem" }}>
          <a
            href="https://www.noormahal.in/"
            target="_blank"
            rel="noreferrer"
            className="custom-cursor"
          >
            <Image
              className="custom-cursor"
              src={brand1Image}
              alt="BrandNurMahal"
              onMouseOver={() => {
                handleMouseEnter("brand1", "in");
              }}
              onMouseOut={() => {
                handleMouseEnter("brand1", "out");
              }}
            />
          </a>
        </Grid>
        <Grid item sx={{ p: "1rem" }}>
          <a
            href="https://www.hoteljewels.com/"
            target="_blank"
            rel="noreferrer"
            className="custom-cursor"
          >
            <Image
              className="custom-cursor"
              src={brand2Image}
              alt="BrandJewels"
              onMouseOver={() => {
                handleMouseEnter("brand2", "in");
              }}
              onMouseOut={() => {
                handleMouseEnter("brand2", "out");
              }}
            />
          </a>
        </Grid>
        <Grid item sx={{ p: "1rem" }}>
          <a
            href="https://colonelsaab.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="custom-cursor"
          >
            <Image
              className="custom-cursor"
              src={brand4Image}
              alt="colonelsaab"
              onMouseOver={() => {
                handleMouseEnter("brand4", "in");
              }}
              onMouseOut={() => {
                handleMouseEnter("brand4", "out");
              }}
            />
          </a>
        </Grid>
        <Grid item sx={{ p: "1rem" }}>
          <a
            href="https://hazuribagh.com/"
            target="_blank"
            rel="noreferrer"
            className="custom-cursor"
          >
            <Image
              className="custom-cursor"
              src={brand3Image}
              alt="BrandHuzuri"
              onMouseOver={() => {
                handleMouseEnter("brand3", "in");
              }}
              onMouseOut={() => {
                handleMouseEnter("brand3", "out");
              }}
            />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Brand;
