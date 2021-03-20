const Player = ({ isUser }) => {
  return (
    <div className='player'>
      {isUser ? <p>SENİN SIRAN</p> : <p>BİLGİSAYARIN SIRASI</p>}
    </div>
  );
};

export default Player;
