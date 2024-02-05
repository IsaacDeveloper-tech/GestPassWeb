import styles from './PassItemComponent.module.css';

// Component
export function PassItemComponent({ platform, pass })
{
    return (
        <button 
            onClick={ () => {copyPasswordToClipboard(pass)} } 
            className={ styles.pass_item }
        >
            <div>Platform: { platform }</div>
        </button>
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