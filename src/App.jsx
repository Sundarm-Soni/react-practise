import { useEffect, useState } from "react";
import SearchBar from "./components/searchbar";
import Products from "./components/products";
import Loader from "./components/loader";
import "./App.css";
function App() {
  const [searchValue, setSearchValue] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading ] = useState(false);

  const getProducts = async() => {
    const apiRes = await fetch('https://dummyjson.com/products', { method: 'GET' });
    const data = await apiRes.json();

    if(data && data.products && data.products.length > 0) {
      setLoading(false);
      setProducts(data.products);
    }
  }
  
  useEffect(() => {
    setLoading(true);
    getProducts();
  }, []);

  const filteredProducts = products && products.length > 0 ? products.filter((item) => {
    return item.title.toLowerCase().includes(searchValue.toLowerCase() || item.description.toLowerCase().includes(searchValue.toLowerCase()));
  }) : [];


  return (
   <div className="App">
    <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
    { loading ? <Loader /> : <Products products={filteredProducts}/>}
   </div>
  );
}

export default App;
