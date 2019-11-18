import React, {Component} from 'react'
import Input from '@material-ui/core/Input'

class Search extends Component {

    constructor(props) {
        super(props);
      }


    render() {
        return (
            <Input
                className="search-box"
                placeholder="Enter Country Name"
                onChange={this.props.handleChange}
            />
        );
    }
}

export default Search;