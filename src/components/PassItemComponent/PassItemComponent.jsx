import styles from './PassItemComponent.module.css';
import { createPass } from '../../utils/common-functions';

// Component
export function PassItemComponent({ id, platform, pass, dataManager, setPassword})
{
    return (
        <div className={ styles.item }>
            <button 
                className={ styles.pass_item__reset }
                onClick={()=>resetPassword(id, dataManager, setPassword)}
            ></button>
            <button 
                className={ styles.pass_item__delete }
                onClick={()=>deletePassword(id, dataManager, setPassword)}
            ></button>
            <button 
                onClick={ () => {copyPasswordToClipboard(pass)} } 
                className={ styles.pass_item }
            >
                <div>{platform}</div>
            </button>
        </div>
    );
}


// Functions of component
export function copyPasswordToClipboard(pass)
{
    navigator.clipboard.writeText(pass)
    .then(() => {
        console.log('Password copied to clipboard');
        return true;
    })
    .catch((err) => {
        console.error('Failed to copy password to clipboard', err);
        return false;
    });
}

export function deletePassword(id, dataManager, setPassword)
{
    dataManager.deletePassword(id);
    setPassword([...dataManager.getPasswords()]);
}

export function resetPassword(id, dataManager, setPassword)
{
    dataManager.changePassword(id, createPass());
    setPassword([...dataManager.getPasswords()]);
}