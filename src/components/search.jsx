import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ''
    };
  }

  handleKeyUpdate(key) {
    this.setState({ key });
    this.props.update(key);
  }

  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            name="search"
            id="book-search"
            placeholder="search for a book"
            onChange={event => {
              this.handleKeyUpdate(event.target.value);
            }}
            value={this.state.key}
          />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  update: PropTypes.func.isRequired
};

export default Search;
