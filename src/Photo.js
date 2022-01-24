import NotFound from "./NotFound";

function Photo(props) {
  return (
    <>
      <div class="photo-container">
        {props.photos === undefined ||
          (props.photos.length === 0 ? <NotFound /> : <h2>Results</h2>)}
        <ul>
          {props.photos &&
            Array.isArray(props.photos) &&
            props.photos.map((object) => (
              <li>
                <img
                  // src={`https://live.staticflickr.com/${object.server}/${object.id}_${object.secret}.jpg`}
                  src={`https://farm${object.farm}.staticflickr.com/${object.server}/${object.id}_${object.secret}.jpg`}
                  alt="logo"
                />
              </li>
            ))}{" "}
        </ul>
      </div>
    </>
  );
}

export default Photo;
