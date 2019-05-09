import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {List, ListItem, ListItemIcon, ListItemText, withStyles} from '@material-ui/core';
import {Home, AccountBox, ExitToApp, AddCircle, Folder, Assignment} from '@material-ui/icons';

const StyledListItem = withStyles({
    root: {
        '&:hover': {
            backgroundColor: "#7e57c2",
        },
    },
})(ListItem);

const Nav = (props) => {
    return (
        <List>
            <StyledListItem container button component={Link} to="/home">
                <ListItemIcon>
                    <Home/>
                </ListItemIcon>
                <ListItemText primary="Home"/>
            </StyledListItem>
            {props.checkLogin() &&
            <React.Fragment>
                <StyledListItem button component={Link} to="/profile">
                    <ListItemIcon>
                        <AccountBox/>
                    </ListItemIcon>
                    <ListItemText primary="Profile"/>
                </StyledListItem>
                <StyledListItem button component={Link} to="/upload">
                    <ListItemIcon>
                        <AddCircle/>
                    </ListItemIcon>
                    <ListItemText primary="Upload"/>
                </StyledListItem>

            </React.Fragment>
            }


        </List>
    );
};

Nav.propTypes = {
  checkLogin: PropTypes.func,
};

export default Nav;