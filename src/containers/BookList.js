import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions/index';

class BookList extends React.Component {
  handleFilterChange = ({ target: { value } }) => {
    const { changeFilter } = this.props;
    changeFilter(value);
  }

  handleRemoveBook = (id) => {
    const { removeBook } = this.props;
    removeBook(id);
  }

  render() {
    const { books, filter } = this.props;
    return (
      <>
        <CategoryFilter handleFilterChange={(e) => this.handleFilterChange(e)} />
        <div>
          {
          books.filter((book) => book.category === filter || filter === 'All').map((book) => (
            <Book
              key={book.id}
              book={book}
              handleRemoveBook={() => this.handleRemoveBook(book.id)}
            />
          ))
        }
        </div>
      </>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => dispatch(removeBook(id)),
  changeFilter: (category) => dispatch(changeFilter(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
