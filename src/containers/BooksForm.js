const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <>
      <div>
        <label htmlFor="title">
          Book title
          <input id="title" type="text" placeholder="Book title" />
        </label>
      </div>

      <div>
        <label htmlFor="category">
          Book category
          <select id="category">
            {categories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
      </div>

      <div>
        <input type="submit" value="Add" />
      </div>
    </>
  );
};

export default BooksForm;
