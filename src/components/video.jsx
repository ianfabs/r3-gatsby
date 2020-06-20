import React from "react";
import {css} from "styled-components"

export default ({vid, link}) => {
  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${link ? link : vid}`}
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      title=""
      style={{width: "100%", height: "30vmax"}}
    >
    </iframe>
    )
}