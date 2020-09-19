import React from "react";
import {Panel} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";

export default class PublicationsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchText: null, mood: null}
        //this.setState({image: PictureIcon})
    }

    render() {
        return (
            <Panel id={"publications_panel"}>
                <PanelHeader left={<PanelHeaderBack onClick={() => this.props.openMap()}/>}>
                    Фото
                </PanelHeader>
            </Panel>
        );
    }
}