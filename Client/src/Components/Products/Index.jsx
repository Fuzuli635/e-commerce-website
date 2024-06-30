import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../Products/Index.scss";
import { getProducts } from "../../api/products";
import { Col, Container, Row } from "reactstrap";
import fabrands1 from "../../assets/Icons/Images/fabrands1.svg";
import fabrands2 from "../../assets/Icons/Images/fa-brands-2.png";
import fabrands3 from "../../assets/Icons/Images/fa-brands-3.png";
import fabrands4 from "../../assets/Icons/Images/fa-brands-4.png";
import fabrands5 from "../../assets/Icons/Images/fa-brands-5.png";
import fabrands6 from "../../assets/Icons/Images/fa-brands-6.png";
import axios from "axios";
const Index = () => {
  // const api =
  //   import.meta.env.VITE_APP_MODE === "local"
  //     ? "http://localhost:5173/Product"
  //     : "http://localhost:1337/api";
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [catId, setCatId] = useState(1);
  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios.get(api
        `${import.meta.env.VITE_UPLOAD_IMG}/api/Categories`
      );
      setCategories(data.data);
    };
    getCategories();
  }, []);
  useEffect(() => {
    const getSubCategories = async (catId) => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_UPLOAD_IMG
        }/api/sub-categories?[filters][categories][$eq]=${catId}`
      );
      setSubCategories(data.data);
    };
    getSubCategories(catId);
  }, [catId]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [priceSort, setPriceSort] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState(null);
  const handleMinPriceChange = (e) => setMinPrice(e.target.value);
  const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleApplyFilters();
    }
  };
  const handleApplyFilters = () => {
    applyFilters({ priceGte: minPrice, priceLte: maxPrice });
  };
  const applyFilters = (filters) => {
    getProducts({
      currentPage,
      priceSort,
      priceGte: filters.priceGte,
      priceLte: filters.priceLte,
    }).then((data) => {
      setProducts(data);
      setPagination(data.meta.pagination);
    });
  };
  const applyPriceRange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
    applyFilters({ priceGte: min, priceLte: max });
  };
  const selectPageHandler = (pageNumber) => {
    if (pageNumber !== 0 && pageNumber <= pagination?.pageCount) {
      setCurrentPage(pageNumber);
    }
  };
  useEffect(() => {
    async function getAllProducts() {
      const data = await getProducts({
        currentPage,
        priceSort,
        priceGte: minPrice,
        priceLte: maxPrice,
      });
      setProducts(data);
      setPagination(data.meta.pagination);
    }
    getAllProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, priceSort, minPrice, maxPrice]);
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSubCategories(
      isChecked
        ? [...subCategories, value]
        : subCategories.filter((item) => item !== value)
    );
  };
  console.log(subCategories);
  return (
    <Container>
      <h2 className="heading">Shop</h2>
      <div className="row1">
        <div className="left">
          <div className="filterItem">
            <h2>Product Categories</h2>
            {categories.map((item) => {
              return (
                <div className="inputItem" key={item.id}>
                  <input
                    onClick={() => {
                      setCatId(item.id);
                    }}
                    onChange={handleChange}
                    type="checkbox"
                    id={item.id}
                    value={item.id}
                  />
                  <label htmlFor={item.id}>{item?.attributes?.Title}</label>
                </div>
              );
            })}
          </div>
          <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="price-range">
              <div className="select">
                <select name="" id="">
                  <option value="USD">USD</option>
                </select>
              </div>
              <input
                onChange={handleMinPriceChange}
                onKeyDown={handleKeyDown}
                value={minPrice}
                type="number"
                placeholder="Min Price"
              />
            </div>
            <div className="price-range">
              <div className="select">
                <select name="" id="">
                  <option value="USD">USD</option>
                </select>
              </div>
              <input
                onChange={handleMaxPriceChange}
                onKeyDown={handleKeyDown}
                value={maxPrice}
                type="number"
                placeholder="Max Price"
              />
            </div>
            <div className="btns">
              <button onClick={() => applyPriceRange(0, 200)}>$0 - $200</button>
              <button onClick={() => applyPriceRange(200, 500)}>
                $200 - $500
              </button>
              <button onClick={() => applyPriceRange(500, 1000)}>
                $500 - $1000
              </button>
            </div>
          </div>
          <div className="filterItem">
            <h2>Sort by</h2>
            <div className="inputItem">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={(e) => {
                  if (e.target.checked) {
                    setPriceSort(e.target.value);
                  }
                }}
              />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="inputItem">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={(e) => {
                  if (e.target.checked) {
                    setPriceSort(e.target.value);
                  }
                }}
              />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="products">
            {products?.data?.map(({ id, attributes }) => {
              return (
                <div
                  className="product"
                  catId={catId}
                  key={id}
                  onClick={() => navigate("/singleproduct/" + id)}
                >
                  <img
                    src={`${
                      import.meta.env.VITE_UPLOAD_IMG +
                      attributes.Images.data[0].attributes.url
                    }`}
                  />
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
              );
            })}
          </div>

          <div className="pagination">
            <div className="buttons">
              <button
                onClick={() => selectPageHandler(currentPage - 1)}
                className="prev"
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {new Array(pagination?.pageCount).fill("").map((_, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => selectPageHandler(index + 1)}
                    className={`page ${
                      index + 1 === currentPage ? "active" : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
              <button
                onClick={() => selectPageHandler(currentPage + 1)}
                disabled={currentPage === pagination?.pageCount}
                className="next"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="our-partners">
        <img src={fabrands1} alt="" />
        <img src={fabrands2} alt="" />
        <img src={fabrands3} alt="" />
        <img src={fabrands4} alt="" />
        <img src={fabrands5} alt="" />
        <img src={fabrands6} alt="" />
      </div>
    </Container>
  );
};
export default Index;
