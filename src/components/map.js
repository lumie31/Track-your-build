import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { ClipLoader } from "react-spinners";

class GoogleMapsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const style = {
      width: "80vw",
      height: "75vh",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "20px"
    };
    return (
      <Map
        item
        xs={12}
        style={style}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={8}
        initialCenter={{ lat: 8.4606, lng: -11.7799 }}
      >
        <Marker
          onClick={this.onMarkerClick}
          title={"Sierra leone"}
          position={{ lat: 8.4606, lng: -11.7799 }}
          name={"Sierra leone"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <Paper>
            <Typography variant="headline" component="h4">
              Sierra leone
            </Typography>
          </Paper>
        </InfoWindow>
      </Map>
    );
  }
}

const LoadingContainer = props => (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <ClipLoader color={"#123abc"} />
  </div>
);

export default GoogleApiWrapper({
  apiKey: "AIzaSyDK1eJ2E0ufxSTZigmMGrje1Roo2wkOYTY",
  LoadingContainer
})(GoogleMapsContainer);
