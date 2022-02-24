import React, { Component, PureComponent } from 'react';
import { connect } from "react-redux";
import { TextField } from '@material-ui/core';
import { onStartFetch, setSearchValue } from "../../actions/actions";
import debounce from 'lodash.debounce';

class MemoizedTextField extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <TextField {...this.props} />
    }
}

class Search extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.debouncedFetch = this.debouncedFetch.bind(this);
    }

    debouncedFetch = debounce(() => this.props.onStartFetch(), 500);

    onChange = e => {
        this.props.setSearchValue(e.target.value);
    }

    componentDidUpdate(prevProps) {
        if (this.props.searchTerm && this.props.searchTerm !== prevProps.searchTerm) {
            this.debouncedFetch();
        }
    }

    // componentDidMount() {
    //     console.log("searchTerm", this.props.searchTerm)
    //     this.debouncedFetch();
    // }

    render() {
        return (
            <MemoizedTextField
                placeholder="Search Term"
                type="text"
                value={this.props.searchTerm}
                onChange={this.onChange}
            />
        )
    }
}

const mapStateToProps = ({ gihpyState }) => ({
    searchTerm: gihpyState.searchTerm
});

const mapDispatchToProps = {
    setSearchValue,
    onStartFetch,
    debounce
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);