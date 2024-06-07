import { instance } from "./index";
export const getProducts = async ({
  priceSort,
  catId,
  priceGte,
  priceLte,
  currentPage,
}) => {
  let url = "/products?populate=*";
  url += `&pagination[page]=${currentPage || 1}&pagination[pageSize]=6`;

  if (priceSort) {
    url += `&sort[0]=price:${priceSort}`;
  }
  if (catId) {
    url += `&filters[categories][$eq]=${catId}`;
  }
  if (priceGte) {
    url += `&filters[price][$gte]=${priceGte}`;
  }
  if (priceLte) {
    url += `&filters[price][$lte]=${priceLte}`;
  }
  const res = await instance.get(url);
  return res.data;
};
export const getProductsById = async (setData, productId) => {
  let url = `/products/${productId}?populate=*`;
  const res = await instance.get(url);

  return res.data;
};
