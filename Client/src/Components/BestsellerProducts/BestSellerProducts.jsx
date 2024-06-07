import React from "react";
import { Container } from "reactstrap";
import "../BestsellerProducts/BestSellerProducts.scss";
import { getProducts } from "../../api/products";
import ButtonSmLeft from "../../assets/Icons/button-Sm-left.svg";
import ButtonSmRight from "../../assets/Icons/Button-Sm-Right.svg";
import unsplashFoto1 from "../../assets/Icons/Images/unsplash1.jpg";
import unsplashFoto2 from "../../assets/Icons/Images/unsplash2.jpg";
import unsplashImg3 from "../../assets/Icons/Images/unsplash3.jpg";
import unsplashImg4 from "../../assets/Icons/Images/unsplash4.jpg";
import unsplashImg5 from "../../assets/Icons/Images/unsplash5.jpg";

const BestSellerProducts = () => {
  const [products, Setproducts] = React.useState([]);
  React.useEffect(() => {
    async function getAllProducts() {
      const data = await getProducts({});
      Setproducts(data);
    }
    getAllProducts();
  }, []);
  return (
    <Container className="Container">
      <div className="sectionTitle">BestSellerProducts</div>
      <div className="products">
        {products?.data?.map(({ id, attributes }) => {
          return (
            <div className="product" key={id}>
              <h6 className="card-title">{attributes?.Title}</h6>
              <p className="type">{attributes?.Type}</p>
              <img
                src={`${
                  import.meta.env.VITE_UPLOAD_IMG +
                  attributes.Images.data[0].attributes.url
                }`}
              />
              <p className="price">${attributes?.price}</p>
              <div className="eclipse">
                <span className="span1"></span>
                <span className="span2"></span>
                <span className="span3"></span>
                <span className="span4"></span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="banner">
        <div>
          <img src={unsplashFoto1} />
          <div className="banner-details">
            <h6>Ends Today</h6>
            <h2>Elements Style</h2>
            <h6>Explore Items</h6>
          </div>
        </div>
        <div>
          <img src={unsplashFoto2} />
          <div className="banner-details">
            <h6>Your Space</h6>
            <h2>Unique Life</h2>
            <h6>Explore Items</h6>
          </div>
        </div>
      </div>
      <div className="bestSellerProducts">
        <div className="navbar">
          <h3>BESTSELLER PRODUCTS</h3>
          {/* <div className="nav-link">
            <a href="">Make Up</a>
            <a href="">Skin Care</a>
            <a href="">Cosmetic</a>
          </div> */}
        </div>
        {/* <div className="btns">
          <button>
            <img src={ButtonSmLeft} alt="" />
          </button>
          <button>
            <img src={ButtonSmRight} alt="" />
          </button>
        </div> */}
      </div>
      <div className="products">
        {products?.data?.map(({ id, attributes }) => {
          return (
            <div className="product" key={id}>
              <img
                src={`${
                  import.meta.env.VITE_UPLOAD_IMG +
                  attributes.Images.data[0].attributes.url
                }`}
              />
              <div className="product-content">
                <h6 className="card-title">{attributes?.Title}</h6>
                <p className="type">{attributes?.Type}</p>

                <p className="price">${attributes?.price}</p>
                <div className="eclipse">
                  <span className="span1"></span>
                  <span className="span2"></span>
                  <span className="span3"></span>
                  <span className="span4"></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="imgs-banner">
        <div>
          <img src={unsplashImg3} />
          <div className="imgBannerDetails">
            <h6>Your Space</h6>
            <h2>Cosmetic </h2>
            <h6>Explore Items</h6>
          </div>
        </div>
        <div>
          <img src={unsplashImg4} />
          <div className="imgBannerDetails">
            <h6>Your Space</h6>
            <h2>Cosmetic </h2>
            <h6>Explore Items</h6>
          </div>
        </div>
        <div>
          <img src={unsplashImg5} />
          <div className="imgBannerDetails">
            <h6>Your Space</h6>
            <h2>Cosmetic </h2>
            <h6>Explore Items</h6>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BestSellerProducts;
