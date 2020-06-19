import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import OpenApi from "./OpenApi";
import SearchBar from "./SearchBar";

class App extends Component {
    render() {
        return (
            <>
                <SearchBar/>
                <OpenApi />
            </>
        )
    }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


