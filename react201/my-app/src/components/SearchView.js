import Hero from "./Hero";
const SearchView= ({keyword, searchResult}) => {
    const text = `lol ${keyword}`
  return (
    <>
      <h1>
        <Hero text={text} />
      </h1>
    </>
  );
};

export default SearchView;
