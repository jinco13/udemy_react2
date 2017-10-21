import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      place: '東京タワー'
    }
  }

  handlePlaceChange(place){
    this.setState({place});
  }

  handlePlaceSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state.place)
  }

  render(){
    return(
        <form className="search-form" onSubmit={e => this.handlePlaceSubmit(e)}>
          <input
            type="text"
            className="place-input"
            size="30"
            value={this.state.place}
            onChange={e => this.handlePlaceChange(e.target.value)}
            />
            <input className="submit-button" type="submit" value="検索"/>
        </form>

    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
