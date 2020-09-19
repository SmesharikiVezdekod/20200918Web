import React from "react";
import {Panel, Search} from "@vkontakte/vkui";
import GoogleMapReact from 'google-map-react';
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderSubmit from "@vkontakte/vkui/dist/components/PanelHeaderSubmit/PanelHeaderSubmit";
import "./MapPage.css"

export default class MapPage extends React.Component {

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11,
        items: [
            {name: "Music", icon: null, emoji: null},
        ]
    };

    constructor(props) {
        super(props);
        this.state = {searchText: null, mood: null}
        //this.setState({image: PictureIcon})
    }

    render() {
        return (
            <Panel id={"map_panel"}>
                <PanelHeader right={<PanelHeaderSubmit onClick={() => this.props.next()}/>}>
                    Карта
                </PanelHeader>
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

                <div className={"bottom-sheet"}>
                    <Search placeholder={"Поиск по теме и настроению"}/>
                </div>
            </Panel>
        );
    }
}