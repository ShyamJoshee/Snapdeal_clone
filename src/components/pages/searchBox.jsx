import React from "react";

function Search (){

const [searchVal, setSearchVal] = useState("");
  

  const getMovieRequest = async (searchVal) => {
    const url = `https://www.omdbapi.com/?s=${searchVal}&apikey=ad69844b`; 
    //  https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products
    const response = await fetch(url);
    const data = await response.json();
    if (data.Search) {
  setMovies(data.Search);
}
  };
  
  useEffect(() => {
    getMovieRequest(searchVal);
  }, [searchVal]);


 
  return (
    <div>
      
      <SearchBox searchVal={searchVal } setSearchVal={setSearchVal } />
         </div>
  );
}
export default Search;