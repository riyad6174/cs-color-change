import Router from "next/router";
import React from "react";

const FB_PIXEL_ID = 1742224656209159;

// https://stackoverflow.com/questions/64792217/how-to-add-facebook-pixel-on-next-js-react-app
// https://github.com/vercel/next.js/blob/canary/examples/with-facebook-pixel/pages/_app.js

// solved using library
// https://www.appsloveworld.com/reactjs/100/11/how-to-add-facebook-pixel-on-next-js-react-app
// https://stackoverflow.com/questions/64792217/how-to-add-facebook-pixel-on-next-js-react-app

function FacebookPixel() {
    React.useEffect(() => {
      import("react-facebook-pixel")
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init(`${FB_PIXEL_ID}`);
          ReactPixel.pageView();
  
          Router.events.on("routeChangeComplete", () => {
            ReactPixel.pageView();
          });
        });
    });
    return null;
  }

export default FacebookPixel