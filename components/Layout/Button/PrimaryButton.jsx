const PrimaryButton = (props) => {
  return (
    <button
      type='button'
      className={
        props.className
          ? `btn text-light border border-warning rounded-0 custom-cursor bg-button ${props.className} `
          : 'btn text-light border border-warning rounded-0 custom-cursor bg-button'
      }
      onMouseOver={(e) => {
        e.target.classList.remove('bg-button');
        e.target.classList.add('bg-warning', 'body-text');
      }}
      onMouseOut={(e) => {
        e.target.classList.remove('bg-warning', 'body-text');
        e.target.classList.add('bg-button');
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default PrimaryButton;
