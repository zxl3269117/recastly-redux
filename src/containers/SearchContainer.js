import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

var mapDispatchToProps = (dispatch) => {
  console.log('hello');
  return {
    handleSearchInputChange: (event) => {
      dispatch(handleSearchChange(event));
    }
  };
};

var SearchContainer = connect(null, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
