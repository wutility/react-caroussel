import React, { useEffect, useState } from 'react';
import './index.css';

export default function ReactCaroussel ({
  children,
  slidesToShow = 1,
  slidesToScroll = 1,
  autoplay = false,
  infinite = false,
  speed = 2000
}) {

  const [counter, setCounter] = useState(0)

  const onPrev = () => {
    if (Math.abs(counter) > 0) {
      setCounter(counter + slidesToScroll)
    }
    else {
      if (infinite) setCounter(slidesToShow - children.length)
    }
  }

  const onNext = () => {
    if (slidesToShow - counter < children.length) {
      setCounter(prev => prev - slidesToScroll)
    }
    else {
      if (infinite) setCounter(0)
    }
  }

  useEffect(() => {
    if (autoplay) {
      let id = setInterval(onNext, speed);
      return () => clearInterval(id)
    }
  }, [counter, setCounter])

  return (<div className="caroussel">
    <div
      className="caroussel-content"
      style={{ transform: `translateX(${(100 / slidesToShow) * counter}%)` }}
    >

      {children.map((child, key) => <div
        key={key}
        className="caroussel-item"
        style={{ width: `calc(100% / ${slidesToShow})` }}
      >
        {child}
      </div>)}
    </div>

    <div className="caroussel-control">
      <button type="button" onClick={onPrev}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button type="button" onClick={onNext}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>);
}