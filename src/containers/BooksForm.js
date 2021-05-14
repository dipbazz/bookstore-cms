const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <>
      <form action="#">
        <div>
          <label>Book title</label>
          <input type="text" placeholder="Book title" />
        </div>

        <div>
          <label>Book category</label>
          <select>
            {categories.map((category) => <option key={category} value={category}>{category}</option>)}
          </select>
        </div>

      </form>
    </>
  );
};

export default BooksForm;
