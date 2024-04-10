const SearchInput = ({ inputValue, handleChange, inputRef }) => {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-0 h-full w-5 stroke-zinc-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
        ></path>
      </svg>
      <input
        className="appearance-none w-full flex pl-10 py-2.5 rounded-lg bg-zinc-50 shadow dark:shadow-xl outline-none focus:outline-none ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800 text-zinc-900 placeholder:text-zinc-500 dark:text-white"
        placeholder="What are you looking for?"
        type="text"
        value={inputValue}
        onChange={handleChange}
        ref={inputRef}
        autoComplete="off"
        autoFocus
      />
    </div>
  );
};

export default SearchInput;
