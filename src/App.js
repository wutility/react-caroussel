import ReactCaroussel from "./lib/ReactCaroussel";

const Card = ({ index }) => <div className="card">
  <h1>Card {index}</h1>
  <p>liprum iprum liprum iprum liprum iprum liprum iprum liprum iprum liprum iprum</p>
  <button>Read more</button>
</div>

export default function App () {

  return (
    <div className="container">
      <h3>ReactCaroussel</h3>
      <ReactCaroussel
        slidesToShow={3}
        slidesToScroll={3}
        infinite={true}
      >
        {Array(9).fill(0).map((_, index) => <Card key={index} index={index} />)}
      </ReactCaroussel>

      <p className="mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      <div className="mt-5 mb-10">
        <h3>ReactCaroussel</h3>
        <ReactCaroussel infinite={true}>
          {Array(9).fill(0).map((_, index) => <Card key={index} index={index} />)}
        </ReactCaroussel>
      </div>

      <div className="mt-5 mb-10">
        <h3>ReactCaroussel</h3>
        <ReactCaroussel
          slidesToShow={3}
          slidesToScroll={3}
          infinite={true}
          autoplay={true}
          speed={2}
        >
          {Array(9).fill(0).map((_, index) => <Card key={index} index={index} />)}
        </ReactCaroussel>
      </div>
    </div>
  );
}
