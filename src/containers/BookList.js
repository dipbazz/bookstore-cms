import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(id) {
    const { removeBook } = this.props;
    removeBook(id);
  }

  render() {
    const { books } = this.props;
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>title</th>
              <th>category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            books.map((book) => (
              <Book
                key={book.id}
                book={book}
                handleRemoveBook={() => this.handleRemoveBook(book.id)}
              />
            ))
          }
          </tbody>
        </table>
      </>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => dispatch(removeBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
