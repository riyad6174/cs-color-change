const PrimaryButton = (props) => {
  return (
    <button
      type="button"
      className={
        props.className
          ? `btn text-light border border-warning rounded-0 custom-cursor bg-success ${props.className} `
          : "btn text-light border border-warning rounded-0 custom-cursor bg-success"
      }
      onMouseOver={(e) => {
        e.target.classList.remove("bg-success");
        e.target.classList.add("bg-transparent", "text-success");
      }}
      onMouseOut={(e) => {
        e.target.classList.remove("bg-transparent", "text-success");
        e.target.classList.add("bg-success");
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default PrimaryButton;
