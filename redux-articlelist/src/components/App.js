import React from "react";
import { connect } from 'react-redux';


function App(props) {
  return (
    <div className="App">
      REDUX ARTİCLELİST SEARCH APP
      <Search search={props.onSearch} />
      <Articles articles={props.articles} searchTerm={props.searchTerm} />
      
    </div>
  );
};

const Search = (props)=> {
  console.log(props)
  return(
    <div>
      <input onChange={(e)=> props.search(e.target.value)} />
    </div>
  )
}


const Articles = (props) => {
  // console.log(props.articles)
const filtered = props.articles.filter(article => article.title.toLowerCase().includes(props.searchTerm.toLowerCase()))
 return (<ul>
{filtered.map((article) =>(
  <li key={article.id}> <a href={article.url}>{article.title}</a></li>
  
))}
</ul>)
}



const mapStateToProps = state => ({
    articles: state.articlesState.articles,
    searchTerm: state.searchState.searchTerm,
  });
  
  const mapDispatchToProps = dispatch => ({
    onSearch: searchTerm => dispatch({ type: 'SEARCH_SET', searchTerm }),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);
  
