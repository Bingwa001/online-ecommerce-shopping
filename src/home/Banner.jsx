import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import productData from "../products.json"
import SelectedCategory from "../components/SelectedCategory"

const title = (
  <h2>You're in a <span>Thousand</span> Products</h2>
)

const desc = "We have the largest collection of products"

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More than 2000 Merchants",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
    
    // Filter products based on search term
    if (searchTerm.trim() === "") {
      setFilteredProducts(productData);
    } else {
      const filtered = productData.filter(product =>
        product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted:", searchInput);

    // Filter products based on search input
    const filtered = productData.filter((product) => 
      product.name?.toLowerCase().includes(searchInput.toLowerCase()) ||
      product.title?.toLowerCase().includes(searchInput.toLowerCase()) ||
      product.category?.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className='banner-section style-4'>
      <div className='container'>
        <div className='banner-content'>
          {title}
          <p className='banner-desc'>{desc}</p>
          <form onSubmit={handleSubmit}>
            <SelectedCategory select={"all"}/>
            <div className='search-wrapper'>
              <input 
                 className="visible-input"
                type="text" 
                name='search' 
                placeholder='Search Your Product'
                value={searchInput}
                onChange={handleSearch}
              />
              <button type="submit" className='search-btn'>
                <i className="icofont-search"></i>
              </button>
            </div>
          </form>
          
          {/* Search Results */}
          {searchInput && (
            <ul className='lab-ul'>
              {filteredProducts.map((product, i) => (
                <li key={product.id || i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
            </ul>
          )}
          
          {/* Display banner statistics */}
          <div className='banner-stats'>
            {bannerList.map((item, index) => (
              <div key={index} className='stat-item'>
                <i className={item.iconName}></i>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;