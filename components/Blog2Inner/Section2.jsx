import { Blog2 } from "@/utils/content";
import Link from "next/link";

const Section2 = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row text-center">
          {Blog2.length > 0 &&
            Blog2.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-12 col-lg-4 mb-3 d-flex align-items-stretch"
                >
                  <div className="card w-100">
                    <img src={item.image} className="card-img-top" alt="..." />
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
                        <Link href={`/blog2/${index}`}>
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
  );
};

export default Section2;
