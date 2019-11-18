import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

class CountryList extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Paper>
        <List>
        {this.props.fcountries.map((country,i)=>(
          <ListItem key={i}>
            <ListItemText primary={country}/>         
          </ListItem>
        ))}
        </List>
      </Paper>
    );
  }
}

export default CountryList;