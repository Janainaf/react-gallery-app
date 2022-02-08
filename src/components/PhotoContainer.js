import NotFound from "./NotFound";
import Photo from "./Photo";
import { useParams, useLocation } from "react-router-dom";

function PhotoContainer(props) {
  const params = useParams();
  const location = useLocation();
  const fetchedphotos = props.photos;
  return (
    <>
      <div className="photo-container">
        {fetchedphotos.length && params ? (
          <>
            <h2>Results {params.tag || location.pathname.replace(/\//, "")}</h2>
            <ul>
              {fetchedphotos &&
                Array.isArray(fetchedphotos) &&
                props.photos.map((object) => (
                  <Photo
                    url={`https://live.staticflickr.com/${object.server}/${object.id}_${object.secret}.jpg`}
                    key={object.id}
                  />
                ))}
            </ul>
          </>
        ) : (
          <NotFound />
        )}
        {/* {console.log(location)} */}
      </div>
    </>
  );
}

export default PhotoContainer;
