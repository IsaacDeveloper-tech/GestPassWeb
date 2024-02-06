import style from './AddPassComponent.module.css';
import { createPass } from '../../utils/common-functions';
import { NOTIFICATION_TYPE } from '../../utils/structs';
import React from 'react';

export function AddPassComponent({ dataManager, setPassword, setNotificationText, setNotificationType, setShowNotification})
{
    const [platform, setPlatform] = React.useState("");

    return (
        <div className= { style.add_pass }>
            
            <input 
                onChange={ (event) => { setPlatform(event.target.value) } }
                className={ style.add_pass__input } 
                type="text" 
                placeholder="Platform" 
                value={ platform }
            />

            <button onClick={() => addPass(platform, dataManager, setPassword, setNotificationText, setNotificationType, setShowNotification)} className={ style.add_pass__button }>Add</button>
        </div>
    );
}


// Functions of component
function addPass(platform, dataManager, setPassword, setNotificationText, setNotificationType, setShowNotification)
{

    if(platform === "" || platform === undefined || platform === null){
        setNotificationText("Platform is empty");
        setNotificationType(NOTIFICATION_TYPE.ERROR);
        setShowNotification(true);
        return false;
    }

    dataManager.setPassword(platform, createPass());
    setPassword([...dataManager.getPasswords()]);

    setNotificationText("Password added");
    setNotificationType(NOTIFICATION_TYPE.INFO);
    setShowNotification(true);

    return true;
}