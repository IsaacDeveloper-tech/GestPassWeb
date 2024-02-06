import styles from './PassItemComponent.module.css';
import { createPass } from '../../utils/common-functions';
import { NOTIFICATION_TYPE } from '../../utils/structs';

// Component
export function PassItemComponent({ id, platform, pass, dataManager, setPassword, setNotificationText, setNotificationType, setShowNotification})
{
    return (
        <div className={ styles.item }>
            <button 
                className={ styles.pass_item__reset }
                onClick={()=>resetPassword(id, dataManager, setPassword, setNotificationText, setNotificationType, setShowNotification)}
            ></button>
            <button 
                className={ styles.pass_item__delete }
                onClick={()=>deletePassword(id, dataManager, setPassword, setNotificationText, setNotificationType, setShowNotification)}
            ></button>
            <button 
                onClick={ () => {copyPasswordToClipboard(pass, setNotificationText, setNotificationType, setShowNotification)} } 
                className={ styles.pass_item }
            >
                <div>{platform}</div>
            </button>
        </div>
    );
}


// Functions of component
export function copyPasswordToClipboard(pass, setNotificationText, setNotificationType, setShowNotification)
{
    navigator.clipboard.writeText(pass)
    .then(() => {
        console.log('Password copied to clipboard');
        setNotificationText("Password copied to clipboard");
        setNotificationType(NOTIFICATION_TYPE.INFO);
        setShowNotification(true);
        return true;
    })
    .catch((err) => {
        console.error('Failed to copy password to clipboard', err);
        setNotificationText("Failed to copy password to clipboard");
        setNotificationType(NOTIFICATION_TYPE.ERROR);
        setShowNotification(true);
        return false;
    });
}

export function deletePassword(id, dataManager, setPassword, setNotificationText, setNotificationType, setShowNotification)
{
    dataManager.deletePassword(id);
    setPassword([...dataManager.getPasswords()]);
    setNotificationText("Password deleted");
    setNotificationType(NOTIFICATION_TYPE.INFO);
    setShowNotification(true);
}

export function resetPassword(id, dataManager, setPassword, setNotificationText, setNotificationType, setShowNotification)
{
    dataManager.changePassword(id, createPass());
    setPassword([...dataManager.getPasswords()]);
    setNotificationText("Password reset");
    setNotificationType(NOTIFICATION_TYPE.INFO);
    setShowNotification(true);
}