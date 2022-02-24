import Switch from '@material-ui/core/Switch';
import React from 'react';
import { useSwitchButton } from '../../../../customHooks/useSwitchButton';

const SwitchBtn = ({ label, id, defaultOn }) => {
    const [isSwitchOn, setIsSwitchOn] = useSwitchButton(defaultOn, id);

    return (
        <div>
            <label>{label}</label>
            <Switch color='primary' checked={isSwitchOn} onChange={setIsSwitchOn} />
        </div>
    );
}

export default SwitchBtn;