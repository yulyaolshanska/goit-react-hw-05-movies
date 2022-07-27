export const MovieInfo = ({ poster, title, overview, score }) => {
  return (
    <>
      <div>
        <img src={poster} alt={title}></img>
      </div>
      <div>
        <h1>{title}</h1>
        <p>user Score:{score}</p>
        <h2>overview</h2>
        <p>{overview}</p>
        <h3>genres</h3>
        <p></p>
      </div>
    </>
  );
};
