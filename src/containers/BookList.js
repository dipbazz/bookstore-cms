import { connect } from 'react-redux';
import Book from '../components/Book';

const BookList = ({ books }) => (
  <>
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>title</th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>
        {
            books.map((book) => <Book key={book.id} book={book} />)
          }
      </tbody>
    </table>
  </>
);

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookList);
