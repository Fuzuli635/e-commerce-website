import React, { useEffect, useState } from "react";
import "../Single-Product/Index.scss";
import { getProducts, getProductsById } from "../../api/products";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReduser";
const Index = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  React.useEffect(() => {
    async function getAllProducts() {
      const data = await getProductsById(setProduct, productId);
      setProduct(data);
    }

    getAllProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="product">
        <div className="left">
          <div className="images">
            {/* <img
              src={`${
                import.meta.env.VITE_UPLOAD_IMG +
                product.attributes?.Images?.data[0].attributes.url
              }`}
              alt=""
              onClick={(e) => setSelectedImg(0)}
            /> */}

            {/* <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} /> */}
          </div>
          <div className="mainImg">
            <img
              src={
                import.meta.env.VITE_UPLOAD_IMG +
                product?.data?.attributes?.Images?.data[0]?.attributes.url
              }
              alt=""
            />

            {/* images[selectedImg] */}
          </div>
        </div>
        <div className="right">
          <h1>{product.data?.attributes?.Title}</h1>
          <span className="price">${product.data?.attributes?.price}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, maxime impedit minima, sit eligendi eveniet dolorum
            quis, tenetur consectetur ad recusandae temporibus quidem vero
            magnam molestias quod vitae harum quae!
          </p>
          <div className="quantity">
            <button
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            {quantity}
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button
            className="add"
            onClick={() =>
              dispatch(
                addToCart({
                  id: product?.data?.id,
                  title: product?.data.attributes.Title,
                  desc: product?.data.attributes.Description,
                  price: product?.data.attributes.price,
                  img: product?.data.attributes.Images.data[0].attributes.url,
                  quantity,
                })
              )
            }
          >
            <ShoppingCartIcon /> ADD TO CART
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
    </>
  );
};

export default Index;
