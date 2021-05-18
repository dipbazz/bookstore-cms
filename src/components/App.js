import '../styles/App.css';
import BookList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <BookList />
        <BooksForm />
      </div>
    </>
  );
}

export default App;
