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
            books.map(book => <Book book={book} />)
          }
        </tbody>
      </table>
    </>
  )
}

export default connect()(BookList);
