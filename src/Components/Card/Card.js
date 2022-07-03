import "./Card.css";
import iconClock from "./images/icon-clock.svg";
import iconEthereum from "./images/icon-ethereum.svg";
import iconView from "./images/icon-view.svg";
import imageAvatar from "./images/image-avatar.png";
import imageEquilibrium from "./images/image-equilibrium.jpg";

function Card() {
  return (
    <div className="card">
      <ProductImage />
      <ContainerText />
      <hr className="card__divider" />
      <ContainerCreator />
    </div>
  );
}

const ProductImage = () => {
  return (
    <div className="card__container-image card__container product-image">
      <img
        className="product-image__image image-product"
        src={imageEquilibrium}
        alt=""
        width="300"
        height="300"
      />
      <img
        className="product-image__image image-mask image-mask--hover"
        src={iconView}
        alt=""
      />
    </div>
  );
};

const ContainerText = () => {
  return (
    <div className="card__container product-context">
      <h1 className="product-context__title product-context__title--hover">
        Equilibrium #3429
      </h1>
      <p className="product-context__description">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <ContainerTextBottom />
    </div>
  );
};

const ContainerTextBottom = () => {
  return (
    <div className="product-context__container">
      <CriptoType />
      <TimeContainer />
    </div>
  );
};

const CriptoType = () => {
  return (
    <div className="crypto-item">
      <img className="crypto-item__image" src={iconEthereum} alt="" />
      <p className="crypto-item__text">0.041 ETH</p>
    </div>
  );
};

const TimeContainer = () => {
  return (
    <div className="time-item">
      <img className="time-item__image" src={iconClock} alt="" />
      <p className="time-item__text">3 days left</p>
    </div>
  );
};

const ContainerCreator = () => {
  return (
    <div className="card__container creator-container">
      <img className="creator-container__image" src={imageAvatar} alt="" />
      <p className="creator-container__text">Creation of</p>
      <p className="creator-container__creator creator-container__creator--hover">
        Jules Wyvern
      </p>
    </div>
  );
};

export default Card;
