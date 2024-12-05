const Slider = (props) => {
  return (
    <div class='cover-img'>
      <img
        className='img-fluid'
        src={props.image}
        alt={props.alt ? props.alt : 'Colonelsaab Blog '}
      />
    </div>
  );
};

export default Slider;
