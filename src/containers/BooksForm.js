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

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleCategoryChange(e) {
    this.setState({
      category: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    createBook(title, category);
    this.setState({
      title: '',
      category: '',
    });
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { title, category } = this.state;
    return (
      <>
        <div>
          <label htmlFor="title">
            Book title
            <input id="title" value={title} type="text" placeholder="Book title" onChange={this.handleTitleChange} required />
          </label>
        </div>

        <div>
          <label htmlFor="category">
            Book category
            <select id="category" onChange={this.handleCategoryChange} value={category} required>
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
