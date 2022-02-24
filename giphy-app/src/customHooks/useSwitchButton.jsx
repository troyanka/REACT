import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShowDatesToggle, setShowNamesToggle } from '../actions/actions';

export const useSwitchButton = (defaultState, toggleName) => {
    const [isSwitchOn, setIsSwitchOn] = useState(defaultState);
    const dispatch = useDispatch();

    return (
        [
            isSwitchOn,
            // TODO: vika - here it seems unreasonable
            useCallback(() => {
                setIsSwitchOn(!isSwitchOn);

                switch (toggleName) {
                    case 'ShowDatesToggle':
                        dispatch(setShowDatesToggle(!isSwitchOn));
                        break;
                    case 'ShowNamesToggle':
                        dispatch(setShowNamesToggle(!isSwitchOn));
                        break;
                    default:
                        break;
                }
            }, [toggleName, isSwitchOn]
            )
        ]
    );
};