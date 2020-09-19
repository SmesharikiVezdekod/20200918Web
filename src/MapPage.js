import React from "react";
import {Panel} from "@vkontakte/vkui";
import GoogleMapReact from 'google-map-react';

export default class MapPage extends React.Component {

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    constructor(props) {
        super(props);
        this.state = {searchText: null, mood: null}
        //this.setState({image: PictureIcon})
    }

    render() {
        return (
            <Panel id={"map_panel"}>
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyCnv7CF30K-kyNaxZnHCuWL6v3DzMRaqBw" }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <div
                            lat={59.955413}
                            lng={30.337844}
                        >AAAAAAAAAaaaaa</div>
                    </GoogleMapReact>
                </div>
            </Panel>
        );
    }
}