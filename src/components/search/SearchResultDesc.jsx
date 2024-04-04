import { MIN_MATCH_CHAR_LENGTH } from '@config/constant';

const SearchResultDesc = ({ resultLength, inputValue }) => {
  if (resultLength === 0) {
    if (inputValue.length >= MIN_MATCH_CHAR_LENGTH) {
      return <p>No result for '{inputValue}'</p>;
    } else {
      return null;
    }
  } else if (resultLength === 1) {
    return <p>Found 1 result for '{inputValue}'</p>;
  } else {
    return (
      <p>
        Found {resultLength} results for '{inputValue}'
      </p>
    );
  }
};

export default SearchResultDesc;
