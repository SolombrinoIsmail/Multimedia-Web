import ReactPlayer from "./Components/ReactPlayer";
import './Styles/App.css';
import MiniDrawer from "./Components/MiniDrawer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import VideoLibrary from "./Pages/VideoLibrary";
import PhotoLibrary from "./Pages/PhotoLibrary";
import Gif from "./Pages/PhotoLibrary";
import Upload from "./Pages/Upload"
import Download from "./Pages/Download"

export default function App() {
    return (
        <>
                <MiniDrawer/>
                <Switch>
                    <Route exact from="/" render={props => <Home {...props} />}/>
                    <Route exact path="/videolibrary" render={props => <VideoLibrary {...props} />}/>
                    <Route exact path="/photolibrary" render={props => <PhotoLibrary{...props} />}/>
                    <Route exact path="/gif" render={props => <Gif{...props} />}/>
                    <Route exact path="/upload" render={props => <Upload{...props} />}/>
                    <Route exact path="/download" render={props => <Download{...props} />}/>
                </Switch>
        </>
    );
}


