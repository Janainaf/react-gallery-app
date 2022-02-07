function Photo(props) {
  return (
    <ul>
      {props.photos &&
        Array.isArray(props.photos) &&
        props.photos.map((object, key) => (
          <li key={object.id}>
            <img
              src={`https://live.staticflickr.com/${object.server}/${object.id}_${object.secret}.jpg`}
              // src={`https://farm${object.farm}.staticflickr.com/${object.server}/${object.id}_${object.secret}.jpg`}
              alt="logo"
            />
          </li>
        ))}{" "}
    </ul>
  );
}

export default Photo;
