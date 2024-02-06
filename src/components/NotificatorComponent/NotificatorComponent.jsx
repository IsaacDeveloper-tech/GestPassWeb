import styles from './NotificatorComponent.module.css';
import { NOTIFICATION_TYPE } from '../../utils/structs';
import React from 'react';

export function NotificatorComponent({text, type, show, setShowNotification}){

    React.useEffect(() => {
        setTimeout(() => show && setShowNotification(false), 3000);
    }, [show]);

    return (
        <div className={ `${styles.notificator} ${show && styles.notificator_show}` }>
            {/* Color of notification (INFO, WARN, ERROR) */}
            <div className={ 
                `${styles.notificator_color}
                ${type === NOTIFICATION_TYPE.INFO && styles.notificator_color__info}
                ${type === NOTIFICATION_TYPE.WARNING && styles.notificator_color__warning}
                ${type === NOTIFICATION_TYPE.ERROR && styles.notificator_color__error}` 
            }></div>

            {/* Text of notification */}
            <div className={ styles.notificator_text }>
                <p>{text}</p>
            </div>
        </div>
    );
}