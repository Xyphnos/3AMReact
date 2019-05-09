import React from 'react';
import {Link, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Redirect} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import Commission from "./Commission";
import {Assignment, Folder} from "@material-ui/icons";

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const styles = {
  card: {
    maxWidth: 345,
    backgroundColor: '#7e57c2',
  },
  media: {
    height: 300,
    width: 300,
    objectFit: 'cover',
    borderRadius: 180,
  },
};
const StyledListItem = withStyles({
  root: {
    backgroundColor: "#754bbe",
    '&:hover':{
      backgroundColor: "#593696",
    }
    }
})(ListItem);

const Profile = (props) => {
  // korjataan profiilisivun latausongelma
  if (props.user === null) {
    return <Redirect to="/" />;
  }

  const {username, email, full_name, profilePic} = props.user;
  const { classes } = props;
  return (
      <React.Fragment>
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
        >

          <Grid>
        <h1>Profile</h1>
        <Card className={classes.card} label={'card'}>
          <Typography gutterBottom variant="h5" component="h2">
            {username}
          </Typography>
          <CardActionArea>
            <CardMedia className={classes.media}
                       image={mediaUrl + profilePic.filename} title={username}/>
            <CardContent>
            </CardContent>
          </CardActionArea>
          <List>
            <StyledListItem button component={Link} to="/my-files">
              <ListItemIcon>
                <Folder/>
              </ListItemIcon>
              <ListItemText primary="My Files"/>
            </StyledListItem>
            <StyledListItem button component={Link} to="/commission">
              <ListItemIcon>
                <Assignment/>
              </ListItemIcon>
              <ListItemText primary="Commission"/>
            </StyledListItem>
          </List>
        </Card>
      </Grid>
      </Grid>
      </React.Fragment>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);