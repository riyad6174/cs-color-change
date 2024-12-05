import Image from "next/image";
import { useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import KarenAnandImage from "../../public/assets/images/KarenAnand.jpg";
import useOnScreen from "../Hook/useOnScreen";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import SubscriptionModal from "../Layout/Modal/SubscriptionModal";

const KarenAnand = () => {
  const [downloadModal, setDownloadModal] = useState(false);
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className="container-fluid  mt-4 mt-lg-0 mb-lg-5 px-2 ">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 d-none d-lg-flex align-items-center">
            <Image
              className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
              src={KarenAnandImage}
              alt="KarenAnand"
            />
          </div>
          <div className="col-12 col-lg-5 text-center d-flex flex-column justify-content-center">
            <Fade bottom delay={100}>
              <h2 className="mt-3 text-success">Karen Anand</h2>
              <p className="text-center text-warning">
                AT THE FOREFRONT OF THE INTERNATIONAL FOOD REVOLUTION IN INDIA,
                KAREN WORKS CLOSELY WITH COLONEL SAAB INDIAN RESTAURANT CENTRAL
                LONDON
              </p>
              <div>
                <p className="text-center">
                  Credited with de-mystifying International food dating way back
                  to the early 1980s. In addition to writing extensively on the
                  subject of food and wine for over 30 years, she also started
                  Mumbai&apos;s first Salad Bar in 1989, followed by a gourmet
                  food business producing small batch artisanal products under
                  her own brand. She had a niche catering business, has anchored
                  top rated TV shows, started a Gourmet Academy and more
                  recently Co-Founded markets by Karen Anand. She develops
                  innovative recipes for multinationals entering the Indian
                  market and works with International hotel and restaurant
                  chains. She was born in Bombay, grew up in London and moved to
                  Paris to study. She now lives in India. She was awarded the
                  prestigious Food & Spirit Award (Trophée de l&apos;Esprit
                  Alimentaire) in 2006 from the French Government and more
                  recently the French Ambassadors Travel Writers Award.
                </p>
                {/* <ShowMoreText
                    lines={3}
                    more="Show more"
                    less="Show less"
                    className="text-center"
                    anchorClass="text-success custom-cursor"
                    expanded={false}
                    truncatedEndingComponent={"... "}
                  >
                    <p className="text-center">
                      Credited with de-mystifying International food dating way
                      back to the early 1980s. In addition to writing
                      extensively on the subject of food and wine for over 30
                      years, she also started Mumbai&apos;s first Salad Bar in
                      1989, followed by a gourmet food business producing small
                      batch artisanal products under her own brand. She had a
                      niche catering business, has anchored top rated TV shows,
                      started a Gourmet Academy and more recently co-founded
                      Markets by Karen Anand. She develops innovative recipes
                      for multinationals entering the Indian market and works
                      with International hotel and restaurant chains. She was
                      born in Bombay, grew up in London and moved to Paris to
                      study. She now lives in India. She was awarded the
                      prestigious Food & Spirit Award (Trophée de l&apos;Esprit
                      Alimentaire) in 2006 from the French Government and more
                      recently the French Ambassadors Travel Writers Award.
                    </p>
                  </ShowMoreText> */}
              </div>
              <PrimaryButton
                className="mt-3"
                onClick={() => {
                  setDownloadModal(true);
                }}
              >
                SUBSCRIBE
              </PrimaryButton>
            </Fade>
          </div>
          <div className="col-12 col-lg-7 mt-4 mt-lg-0 d-flex d-lg-none align-items-center">
            <Image
              className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
              src={KarenAnandImage}
              alt="KarenAnand"
            />
          </div>
        </div>
      </div>
      {downloadModal && (
        <SubscriptionModal
          size="sm"
          show={downloadModal}
          onHide={() => setDownloadModal(!downloadModal)}
        />
      )}
    </div>
  );
};

export default KarenAnand;
