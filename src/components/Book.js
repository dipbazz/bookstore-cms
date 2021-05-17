import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button type="button" onClick={handleRemoveBook}>Remove Book</button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
