import '../App.css';
import BookList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookList />
        <BooksForm />
      </div>
    </Provider>
  );
}

export default App;
