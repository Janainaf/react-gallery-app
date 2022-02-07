import NotFound from "./NotFound";
import Photo from "./Photo";
import { useParams, useLocation } from "react-router-dom";

function PhotoContainer(props) {
  const params = useParams();
  const location = useLocation();

  return (
    <>
      <div className="photo-container">
        {props.photos.length > 0 && params ? (
          <>
            <h2>Results {params.tag || location.pathname.replace(/\//, "")}</h2>
            <Photo photos={props.photos} />
          </>
        ) : (
          <NotFound />
        )}
        <Photo photos={props.photos} />
        {/* {console.log(location)} */}
      </div>
    </>
  );
}

export default PhotoContainer;
