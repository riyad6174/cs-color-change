import { useEffect, useState } from "react";
import useWindowSize from "../Hook/windowSize";
// import StartingVideoMobile from "../../public/assets/video/IntroVideoForMobile.mp4";
// import Introgif from "@/public/assets/images/Introgif.gif";
// import IntrogifPC from "@/public/assets/images/IntroGifPC.gif";

import Introgif from "@/public/assets/images/Introgif33.gif";
// import IntrogifPC from "@/public/assets/images/IntroGifPC44.gif";
import IntrogifPC from "@/public/assets/images/Introgif1234.gif";

//

import Box from "@mui/material/Box";
import Image from "next/image";

const IntroVideo = (props) => {
  const windowSize = useWindowSize();
  const [videoFinish, setVideoFinish] = useState(false);

  useEffect(() => {
    // attemptPlay();
    setTimeout(() => {
      setVideoFinish(true);
      props.setVideoFinish(true);
      // props.setChristmasModal(true);
    }, 3000);
  }, []);

  return (
    <>
      <Box>
        <Box>
          {/* <div className={!videoFinish && "vh-100"}>
            {windowSize.width >= 992 && (
              <Image
                src={IntrogifPC}
                className={videoFinish ? "d-none" : "w-100 h-100"}
                alt="Introgif"
              />
            )}
            {windowSize.width < 992 && (
              <Image
                src={Introgif}
                className={videoFinish ? "d-none" : "w-100 h-100"}
                alt="Introgif"
              />
            )}
          </div> */}
        </Box>
      </Box>
    </>
  );
};

export default IntroVideo;
