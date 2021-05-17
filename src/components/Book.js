import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = ({ book, handleRemoveBook }) => (
  <div className="card">
    <div className="card__left">
      <div className="card__category">{book.category}</div>
      <h2 className="card__title">{book.title}</h2>
      <div className="card__author">Author name</div>
      <ul className="list list--inline">
        <li className="list__item">
          <button className="card__link" type="button">Comments</button>
        </li>
        <li className="list__item">
          <button className="card__link" type="button" onClick={handleRemoveBook}>Remove</button>
        </li>
        <li className="list__item">
          <button className="card__link" type="button">Edit</button>
        </li>
      </ul>
    </div>

    <div className="card__mid">
      <div className="progress_bar" />
      <div>
        <div>64%</div>
        <div>Completed</div>
      </div>
    </div>

    <div className="card__right">
      <div>current chapter</div>
      <div>Chapter 17</div>
      <button type="button">Update Progress</button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
