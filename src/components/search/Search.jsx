import { useEffect, useMemo, useRef, useState } from 'react';
import Fuse from 'fuse.js';
import SearchInput from '@components/search/SearchInput';
import SearchResultDesc from '@components/search/SearchResultDesc';
import BlogPostList from '@components/BlogPostList';
import { MIN_MATCH_CHAR_LENGTH } from '@config/constant';

const Search = ({ posts }) => {
  const [inputValue, setSearchValue] = useState('');
  const [result, setResult] = useState([]);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: ['frontmatter.title', 'frontmatter.description'],
        includeMatches: true,
        minMatchCharLength: 2,
        threshold: 0.5,
      }),
    [posts]
  );

  useEffect(() => {
    // Get search param
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get('q');
    if (searchStr) {
      setSearchValue(searchStr);
    }

    // Focus input
    setTimeout(() => {
      inputRef.current.selectionStart = inputRef.current.selectionEnd =
        searchStr?.length || 0;
    }, 50);
  }, []);

  useEffect(() => {
    // Set result
    if (inputValue.length >= MIN_MATCH_CHAR_LENGTH) {
      const fuseResult = fuse.search(inputValue);
      const mappedResult = fuseResult.map((result) => result.item);
      setResult(mappedResult);
    } else {
      setResult([]);
    }

    // Set URL param
    if (inputValue.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set('q', inputValue);
      const newRelativePathQuery =
        window.location.pathname + '?' + searchParams.toString();
      history.replaceState(history.state, '', newRelativePathQuery);
    } else {
      history.replaceState(history.state, '', window.location.pathname);
    }
  }, [inputValue]);

  return (
    <div className="flex flex-col gap-4">
      <SearchInput
        inputValue={inputValue}
        handleChange={handleChange}
        inputRef={inputRef}
      />
      <SearchResultDesc resultLength={result.length} inputValue={inputValue} />
      <BlogPostList posts={result} />
    </div>
  );
};

export default Search;
