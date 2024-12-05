import Link from "next/link";
import { useState } from "react";
import { BlogMain } from "../../utils/content";

const Section2 = () => {
  const [slicedIndex, setSlicedIndex] = useState(3);
  return (
    <>
      <div className="container-fluid py-3 ">
        <div className="container ">
          <div className="row text-center ">
            {BlogMain.length > 0 &&
              BlogMain.slice(0, slicedIndex).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-3 mb-md-0"
                  >
                    <div className="card w-100 my-2">
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt="..."
                        style={{ height: "280px" }}
                        sizes="120"
                      />
                      <div className="card-body bg-warning d-flex flex-column">
                        <div>
                          <h5 className="card-title text-success">
                            {item.heading1}
                          </h5>
                          <p
                            className="card-text text-success mb-3"
                            style={{ fontSize: "0.8rem" }}
                          >
                            Posted: {item.time}
                          </p>
                        </div>
                        <div className="mt-auto">
                          <p className="card-text text-light">
                            {item.shortContent}
                          </p>
                          <Link href={`/blog/${item.slug}`}>
                            <button
                              type="button"
                              className="btn text-light border border-warning rounded-0 custom-cursor text-uppercase"
                              style={{
                                backgroundColor: "#277977",
                              }}
                              onMouseOver={(e) => {
                                e.target.classList.remove("border-warning");
                                e.target.classList.add(
                                  "bg-transparent",
                                  "text-success",
                                  "border-success"
                                );
                              }}
                              onMouseOut={(e) => {
                                e.target.classList.remove("border-success");
                                e.target.classList.remove(
                                  "bg-transparent",
                                  "text-success",
                                  "border-warning"
                                );
                              }}
                            >
                              Read More...
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="container-fluid px-2 py-5  overflow-hidden">
        <div className="text-center">
          <button
            type="button"
            className={
              slicedIndex < BlogMain.length
                ? "btn text-light m-2 rounded-0 bg-warning border border-success rounded-0 custom-cursor text-uppercase"
                : "btn text-light m-2 rounded-0 bg-warning border border-success rounded-0 custom-cursor text-uppercase d-none"
            }
            onClick={() => {
              setSlicedIndex(slicedIndex + 3);
            }}
          >
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default Section2;
