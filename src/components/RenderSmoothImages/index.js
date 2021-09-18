import React, {useState} from "react";
import "./style.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function RenderSmoothImage({ src, alt, className, wh }) {
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
              <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
      )}
    </>
  );
}

export default RenderSmoothImage;
