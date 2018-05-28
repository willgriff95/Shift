/* global google */
import React from 'react';

class AutoComplete extends React.Component {

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.input);
    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete.getPlace();
      this.props.handlePlaceChange(place);
    });
  }

  render() {
    const rest = { ...this.props };
    delete rest.handlePlaceChange;
    return (
      <input
        ref={el => this.input = el}
        {...rest}
      />
    );
  }
}

export default AutoComplete;
