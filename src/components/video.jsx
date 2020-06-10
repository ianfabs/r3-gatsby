import React from "react";

export default ({vid}) => {
  return (
    <iframe 
    width="560" 
    height="315" 
    src={`https://www.youtube-nocookie.com/embed/${vid}`}
    frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    >
    </iframe>
    )
}