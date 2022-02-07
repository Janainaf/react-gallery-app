import NotFound from "./NotFound";
import Photo from "./Photo";

function PhotoContainer(props) {
  return (
    <>
      <div className="photo-container">
        {props.photos.length > 0 ? (
          <>
            <h2>Results</h2>
            <Photo photos={props.photos} />
          </>
        ) : (
          <NotFound />
        )}
        <Photo photos={props.photos} />
      </div>
    </>
  );
}

export default PhotoContainer;
