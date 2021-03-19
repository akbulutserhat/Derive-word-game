const RadioBox = ({ text, value }) => {
  return (
    <label>
      <div className='radio-box'>
        <input type='radio' name='difficult' value={value}></input>
        <span>{text}</span>
      </div>
    </label>
  );
};

export default RadioBox;
