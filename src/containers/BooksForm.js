import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

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
        <div>
          <label htmlFor="title">
            Book title
            <input id="title" value={title} name="title" type="text" placeholder="Book title" onChange={this.handleChange} required />
          </label>
        </div>

        <div>
          <label htmlFor="category">
            Book category
            <select id="category" name="category" onChange={this.handleChange} value={category} required>
              {categories.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
        </div>

        <div>
          <input type="submit" value="Add" onClick={this.handleSubmit} />
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
