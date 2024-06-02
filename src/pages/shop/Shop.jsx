import { useParams } from "react-router-dom";
import Breadcrumbs from "@components/breadcumbs/Breadcumbs";
import Select from "@components/productsPage/content/select/Select";
import Shower from "@components/productsPage/content/shower/Shower";
import ViewLong from "@components/productsPage/content/view_long/View";
import ViewShort from "@components/productsPage/content/view_short/View";
import Brand from "@components/productsPage/shop/brand/Brand";
import Category from "@components/productsPage/shop/category/Category";
import Price from "@components/productsPage/shop/price/Price";
import CartShort from "@components/productsPage/content/cartShort/Cart";
import CartLonger from "@components/productsPage/content/cartLong/Cart";
// Context
import { useProductsContext } from "../../context/Context";
import { useState, useEffect } from "react";
import Pagination from "@components/productsPage/content/pagination/Pagination";

const crumbs = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
];

const Shop = () => {
  const { category } = useParams();
  const { products } = useProductsContext();
  const [viewMode, setViewMode] = useState(true);
  const [sortOption, setSortOption] = useState("default");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(category || "All");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [productsPerPage, setProductsPerPage] = useState(9); // Products per page

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  useEffect(() => {
    const filterProducts = () => {
      let filtered = products;

      if (selectedCategory !== "All") {
        filtered = filtered.filter(
          (product) => product.category === selectedCategory
        );
      }

      if (selectedBrands.length > 0) {
        filtered = filtered.filter((product) =>
          selectedBrands.includes(product.brand)
        );
      }

      if (priceRange.min || priceRange.max) {
        filtered = filtered.filter((product) => {
          const price = product.price;
          const min = priceRange.min ? parseFloat(priceRange.min) : 0;
          const max = priceRange.max ? parseFloat(priceRange.max) : Infinity;
          return price >= min && price <= max;
        });
      }

      return filtered;
    };

    const sortProducts = (filtered) => {
      let sorted = [...filtered];
      switch (sortOption) {
        case "price_asc":
          sorted.sort((a, b) => a.price - b.price);
          break;
        case "price_desc":
          sorted.sort((a, b) => b.price - a.price);
          break;
        case "name_asc":
          sorted.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name_desc":
          sorted.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "rating_asc":
          sorted.sort((a, b) => a.rating - b.rating);
          break;
        case "rating_desc":
          sorted.sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
      setSortedProducts(sorted);
    };

    const updateFilteredBrands = () => {
      const brands = products
        .filter(
          (product) =>
            selectedCategory === "All" || product.category === selectedCategory
        )
        .map((product) => product.brand);
      setFilteredBrands([...new Set(brands)]);
    };

    const filteredProducts = filterProducts();
    sortProducts(filteredProducts);
    updateFilteredBrands();
  }, [products, sortOption, selectedCategory, selectedBrands, priceRange]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedBrands([]);
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrands((prevBrands) =>
      prevBrands.includes(brand)
        ? prevBrands.filter((b) => b !== brand)
        : [...prevBrands, brand]
    );
  };

  const handlePriceChange = (min, max) => {
    setPriceRange({ min, max });
  };

  const handleProductsPerPageChange = (number) => {
    setProductsPerPage(number);
    setCurrentPage(1);
  };

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="bg-[#f7f8fb]">
        <div className="max-w-screen-xl mx-auto">
          <div className="container mx-auto">
            <div className="px-6">
              <div className="flex md:justify-between py-7">
                <h1 className="text-3xl font-bold">Products</h1>
                <Breadcrumbs crumbs={crumbs} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="container mx-auto">
            <div className="px-7">
              <div className="flex gap-x-10 lg:flex-nowrap flex-wrap">
                <div className="lg:w-3/12 w-full order-2 lg:order-1">
                  <Category
                    products={products}
                    onCategorySelect={handleCategorySelect}
                  />
                  <Brand
                    products={products}
                    filteredBrands={filteredBrands}
                    onBrandSelect={handleBrandSelect}
                    selectedBrands={selectedBrands}
                  />
                  <Price onPriceChange={handlePriceChange} />
                </div>
                <div className="lg:w-9/12 w-full lg:order-2 order-1">
                  <div className="product-header mb-6">
                    <div className="flex items-center justify-between">
                      <div className="">
                        <Select
                          selectedOption={sortOption}
                          onChange={setSortOption}
                        />
                      </div>
                      <div className="flex items-center gap-x-3">
                        <ViewShort onClick={() => toggleViewMode(true)} />
                        {/* <ViewLong onClick={() => toggleViewMode(false)} /> */}
                        <Shower
                          onProductsPerPageChange={handleProductsPerPageChange}
                        />
                      </div>
                    </div>
                  </div>
                  {viewMode ? (
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                      {currentProducts.map((product) => (
                        <CartShort key={product.id} {...product} />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-y-5">
                      {currentProducts.map((product) => (
                        <CartLonger key={product.id} {...product} />
                      ))}
                    </div>
                  )}
                  <Pagination
                    productsPerPage={productsPerPage}
                    totalProducts={sortedProducts.length}
                    paginate={paginate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
