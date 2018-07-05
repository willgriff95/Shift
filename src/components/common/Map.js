/* global google */
import React from 'react';
import _ from 'lodash';

class Map extends React.Component {

  constructor() {
    super();
    this.markers = [];
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapDiv, {
      center: this.props.center,
      zoom: 14,
      scrollwheel: true,
      gestureHandling: 'cooperative',
      zoomControl: true,
      disableDefaultUI: true,
      styles: [
        {
          'featureType': 'administrative',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#d7d7d7'
            },
            {
              'visibility': 'simplified'
            }
          ]
        },
        {
          'featureType': 'landscape',
          'elementType': 'all',
          'stylers': [
            {
              'color': '#f8f8f8'
            },
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'all',
          'stylers': [
            {
              'saturation': -100
            },
            {
              'lightness': 45
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'simplified'
            }
          ]
        },
        {
          'featureType': 'road.arterial',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            },
            {
              'hue': '#ff0000'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'all',
          'stylers': [
            {
              'color': '#ffffff'
            },
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'hue': '#ff0000'
            }
          ]
        }
      ]
    });

    this.marker = new google.maps.Marker({
      position: this.map.getCenter(),
      map: this.map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: '#3399FF',
        fillOpacity: 1,
        scale: 7,
        strokeColor: 'white',
        strokeWeight: 3
      }
    });
    this.generateMarkers();

    // this.marker.addListener('click', () => {
    //   this.infoWindow.setContent(
    //     <a>hello</a>
    //   );
    // });

  }

  generateMarkers = () => {
    if(!this.props.markers) return false;
    this.markers.forEach(marker => marker.setMap(null));
    this.markers = this.props.markers.map(marker => {
      return new google.maps.Marker({
        position: marker.location,
        map: this.map,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: '#3399FF',
          fillOpacity: 1,
          scale: 7,
          strokeColor: 'white',
          strokeWeight: 3
        }
      });
    });
  }


  // This life cycle hook is quite crazy.
  // componentWillReceiveProps(newProps) {
  //   console.log(newProps);
  // }

  debouncedGenerateMarkers = _.debounce(() => this.generateMarkers(), 250);

  componentDidUpdate() {
    this.debouncedGenerateMarkers();
  }

  componentWillUnmount() {
    this.markers.forEach(marker => marker.setMap(null));
    this.markers = null;
    this.marker.setMap(null);
    this.marker = null;
    this.map = null;
  }

  render() {
    const className = this.props.className ? this.props.className + ' map' : 'map';
    return (
      //  `ref` gives a reference for React to be able to get a DOM element. It takes a callback function that is called once the div has been rendered to the page. `el` is the actual element that JSX creates - in the real DOM. (TBH it's probably really got using `document.getElementById()` behind the scenes anyway.)
      <div className={className} ref={el => this.mapDiv = el}></div>
    );
  }
}

export default Map;
