const Player = ({ isUser }) => {
  return <div className='player'>{isUser ? <p>YOU</p> : <p>COMPUTER</p>}</div>;
};

export default Player;
