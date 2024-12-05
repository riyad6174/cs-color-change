const Section1 = (props) => {
  return (
    <div className="container-fluid px-2 py-5 ">
      <div className="container">
        <div className="row text-center d-flex flex-column align-items-center">
          <h1 className="mt-3 text-success">{props.blog.heading1}</h1>
          <h4 className="text-success">{props.blog.heading2}</h4>
          <hr className="text-center w-50" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
