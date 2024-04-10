import { MIN_MATCH_CHAR_LENGTH } from '@config/constant';

const InputValueCode = ({ inputValue }) => {
  return (
    <span className="prose pl-2">
      <code>{inputValue}</code>
    </span>
  );
};

const SearchResultDesc = ({ resultLength, inputValue }) => {
  if (!resultLength && inputValue.length >= MIN_MATCH_CHAR_LENGTH) {
    return (
      <p>
        No result for
        <InputValueCode inputValue={inputValue} />
      </p>
    );
  }

  if (resultLength) {
    return (
      <p>
        Found {resultLength} post(s) for
        <InputValueCode inputValue={inputValue} />
      </p>
    );
  }

  return null;
};

export default SearchResultDesc;
