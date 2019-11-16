import React, {Component} from 'react'
import Input from '@material-ui/core/Input'

class Search extends Component {

    constructor(props) {
        super(props);
      }

      handleChange= this.props.handleChange



    render() {
        return (
            <Input
                className="search-box"
                placeholder="Enter Country Name"
                onChange={(e) => this.handleChange(e)}
            />
        );
    }
}

export default Search;