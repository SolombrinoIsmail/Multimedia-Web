import React from "react";
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import HomeIcon from '@material-ui/icons/Home';import {withRouter} from "react-router-dom";
import GetAppIcon from '@material-ui/icons/GetApp';
import PublishIcon from '@material-ui/icons/Publish';
import GifIcon from '@material-ui/icons/Gif';
// const useStyles = makeStyles({
//     drawer: {
//         width: "190px"
//     }
// });
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));


const Drawer = props => {
    const {history} = props;
    const classes = useStyles();
    const itemsList = [
        {
            text: "Home",
            icon: <HomeIcon/>,
            onClick: () => history.push("/home")
        },
        {
            text: "Video Library",
            icon: <VideoLibraryIcon/>,
            onClick: () => history.push("/videolibrary")
        },
        {
            text: "Photo Library",
            icon: <PhotoLibraryIcon/>,
            onClick: () => history.push("/photolibrary")
        },
        {
            text: "GIF",
            icon: <GifIcon/>,
            onClick: () => history.push("/gif")
        },
        {
            text: "Upload",
            icon: <PublishIcon/>,
            onClick: () => history.push("/upload")
        },
        {
            text: "Download",
            icon: <GetAppIcon/>,
            onClick: () => history.push("/download")
        }
    ];

    return (

        <MUIDrawer variant="permanent" className={classes.drawer}>

            <List>
                {itemsList.map((item, index) => {
                    const {text, icon, onClick} = item;
                    return (
                        <ListItem button key={text} onClick={onClick}>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={text}/>
                        </ListItem>
                    );
                })}
            </List>
        </MUIDrawer>
    );
};

export default withRouter(Drawer);
