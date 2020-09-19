import React from 'react';
import logo from './logo.svg';
import './App.css';
import View from "@vkontakte/vkui/dist/components/View/View";
import "@vkontakte/vkui/dist/vkui.css";
import MapPage from "./MapPage";
import PublicationsPage from "./PublicationsPanel";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      panel: "publications_panel",
    }
  }

  render() {
    return (
        <View activePanel={this.state.panel}>

          <MapPage
              id={"map_panel"}
              next={() => {
                this.setState({panel: "publications_panel"})
              }}/>

              <PublicationsPage
                  id={"publications_panel"}
                  openMap={() => this.setState({panel: "map_panel"})}
              />

        </View>
    );
  }
}

export default App;
