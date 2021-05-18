import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import '../styles/BookForm.css';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    createBook(title, category);
    this.setState({
      title: '',
      category: 'Action',
    });
  }

  render() {
    const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { title, category } = this.state;
    return (
      <>
        <div className="form">
          <h2 className="form__title">Add new book</h2>
          <div className="form__group">
            <input className="form__input form__input--title" id="title" value={title} name="title" type="text" placeholder="Book title" onChange={this.handleChange} required />

            <select className="form__input form__input--category" id="category" name="category" onChange={this.handleChange} value={category} required>
              {categories.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>

            <input className="form__btn" type="submit" value="Add book" onClick={this.handleSubmit} />
          </div>
        </div>
      </>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (title, category) => dispatch(createBook(title, category)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
