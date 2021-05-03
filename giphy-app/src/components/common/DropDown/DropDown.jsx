import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
    formControl: {
        minWidth: 120
    },
}));

const DropDown = ({ options, onChangeHandler, labelText }) => {
    const classes = useStyles();

    const sortValue = useSelector(({ gihpyReducer }) => gihpyReducer.sortValue);

    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="sort-by-options">{labelText}</InputLabel>
            <Select
                value={sortValue}
                onChange={onChangeHandler}
                native
                inputProps={{
                    name: "sort-by-value",
                    id: 'sort-by-options'
                }}>
                <option aria-label="None" value="" />
                {
                    options.map(({ optionKey, optionTitle }) => (
                        <option key={optionKey} value={optionKey}>{optionTitle}</option>
                    ))
                }
            </Select>
        </FormControl>
    );
}

export default DropDown;