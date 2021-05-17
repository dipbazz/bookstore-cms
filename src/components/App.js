import '../App.css';
import BookList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';
import CategoryFilter from './CategoryFilter';

function App() {
  return (
    <div className="App">
      <CategoryFilter />
      <BookList />
      <BooksForm />
    </div>
  );
}

export default App;
