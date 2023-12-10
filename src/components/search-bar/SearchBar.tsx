import { type FC } from "react";

const SearchBar: FC = () => {
  return (
    <form id="cityForm">
      <label htmlFor="cityInput">Enter City:</label>
      <input type="text" id="cityInput" name="cityInput" required />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
