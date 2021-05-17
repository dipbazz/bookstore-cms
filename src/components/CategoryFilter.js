const CategoryFilter = () => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <label htmlFor="category">
      Book category
      <select id="category" name="category" required>
        {categories.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    </label>
  );
};

export default CategoryFilter;
