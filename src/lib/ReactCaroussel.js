import React, { useEffect, useState } from 'react';
import './index.css';

export default function ReactCaroussel ({
  children,
  slidesToShow = 1,
  slidesToScroll = 1,
  autoplay = false,
  infinite = false,
  speed = 2000,
  display = { arrows: true, dots: true }
}) {

  const [counter, setCounter] = useState(0)
  const [currDot, setCurrDot] = useState(0)

  const onPrev = () => {
    if (Math.abs(counter) > 0) {
      setCounter(counter + slidesToScroll)
      setCurrDot(Math.abs(counter / slidesToShow) - 1)
    }
    else {
      if (infinite) {
        setCounter(slidesToShow - children.length)
        setCurrDot(slidesToShow - 1)
      }
    }
  }

  const onNext = () => {
    if (slidesToShow - counter < children.length) {
      setCounter(prev => prev - slidesToScroll)
      setCurrDot(Math.abs(counter / slidesToShow) + 1)
    }
    else {
      if (infinite) {
        setCounter(0)
        setCurrDot(0)
      }
    }
  }

  const onDot = index => {
    setCounter(-(index * slidesToShow))
    setCurrDot(index)
  }

  useEffect(() => {
    if (autoplay) {
      let id = setInterval(onNext, speed);
      return () => clearInterval(id)
    }
  }, [counter, setCounter])

  return (<div className="caroussel" tabIndex="0">

    {display.arrows && <button type="button" className="btn-prev" onClick={onPrev}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>}

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

    {display.arrows && <button type="button" className="btn-next" onClick={onNext}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>}

    {display.dots && <div className="dots">
      {Array(Math.ceil(children.length / slidesToShow)).fill(0).map((_, i) => <span
        style={{ opacity: currDot === i ? 1 : 0.4 }}
        key={i}
        onClick={() => onDot(i)}></span>)}
    </div>}
  </div>);
}