import React, { useState } from 'react';

function ImgReveal({ src, startOffset, translateY, children }:any) {
  const [hovered, setHovered] = useState(false);
  const [offset, setOffset] = useState(startOffset || 0);

  function leave() {
    setHovered(false);
    setOffset(startOffset || 0);
  }

  function moveImg(e:any) {
    setOffset(offset + e.movementX);
  }
  
  return (
    <span
      className="text"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={leave}
      onMouseMove={moveImg}
    >
      {children}
      {hovered && (
        <img
          src={src}
          className="absolute "
          alt="special effect"
          style={{ transform: `translate(${offset}px,${translateY || -60}px)` }}
        />
      )}
    </span>
  );
}

export default ImgReveal;