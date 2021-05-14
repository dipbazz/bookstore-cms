import { connect } from 'react-redux';
import Book from '../components/Book';

const BookList = ({books}) => {
  return (
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
            books.map(book => <Book key={book.id} book={book} />)
          }
        </tbody>
      </table>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList);
