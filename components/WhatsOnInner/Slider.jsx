const Slider = (props) => {
  return (
    <div class="thumb-post">
      <img
        className="img-fluid"
        src={props.image}
        alt={props?.imgAlt ? props.imgAlt : "Image-slider"}
      />
    </div>
  );
};

export default Slider;
