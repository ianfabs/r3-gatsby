import React from "react";

export default ({vid, link}) => {
  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${link ? link : vid}`}
      frameBorder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
      title="Unique"
      style={{width: "100%", height: "30vmax"}}
    >
    </iframe>
    )
}