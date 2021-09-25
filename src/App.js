import ReactCaroussel from "./lib/ReactCaroussel";

const Card = ({ index }) => <div className="card">
  <h1>Card {index}</h1>
  <p>liprum iprum liprum iprum liprum iprum liprum iprum liprum iprum liprum iprum</p>
</div>

export default function App () {

  return (
    <div className="container">
      <h3>ReactCaroussel</h3>
      <ReactCaroussel
        slidesToShow={3}
        slidesToScroll={3}
        infinite={true}
        autoplay={false}
        speed={2000}>
        {Array(9).fill(0).map((val, index) => <Card key={index} index={index} />)}
      </ReactCaroussel>
    </div>
  );
}
