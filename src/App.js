import ReactCaroussel from "./lib/ReactCaroussel";

export default function App () {

  return (
    <div className="container">

      <ReactCaroussel
        slidesToShow={3}
        slidesToScroll={1}
        infinite={true}
        autoplay={false}
        speed={2000}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </ReactCaroussel>
    </div>
  );
}
