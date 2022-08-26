const CastList = ({ cast }) => {
  return (
    <ul className="castList">
      {cast.slice(0, 10).map(({ id, name, character, profile_path }) => (
        <li className="castListItem" key={id}>
          <img
            className="castListItemImage"
            src={`https://image.tmdb.org/t/p/original/${profile_path}`}
            alt={name}
            width="100"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default CastList;
