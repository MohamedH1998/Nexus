import React, {useState} from "react";
import "./style.css";


function RenderSmoothImage({ src, alt, className }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`smooth-image image-${imageLoaded ? "visible " : "hidden"} ${className && className}`}
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && (
        <div className="smooth-preloader">
          <span className="loader" />
        </div>
      )}
    </>
  );
}

export default RenderSmoothImage;
