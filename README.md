# React Caroussel 

- Fast And Simple to use.
- Lightweight.
- Zero dependencies.

<div align="center" style="width:100%; text-align:center;">
<img src="https://badgen.net/bundlephobia/minzip/react-caroussel" alt="react caroussel" />
  <img src="https://badgen.net/bundlephobia/dependency-count/react-caroussel" alt="react caroussel" />
  <img src="https://badgen.net/npm/v/react-caroussel" alt="react caroussel" />
  <img src="https://badgen.net/npm/dt/react-caroussel" alt="react caroussel" />
</div>  

<hr />  

## [Demo](https://codesandbox.io/s/react-carousel-ftzy5)

```js
$ npm i react-caroussel
// or
$ yarn add react-caroussel
```

## Usage
```js
import ReactCaroussel from 'react-caroussel';
import "react-caroussel/dist/index.css";
```        

## Usage

```jsx
<ReactCaroussel
  slidesToShow={3}
  slidesToScroll={3}
  infinite={true}
  autoplay={false}
  speed={2}    // 2s: speed of autoplay
  display={{ 
    arrows: true, 
    dots: true 
  }}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</ReactCaroussel>
```

## Notes
- All pull requests are welcome, feel free.

## License
MIT