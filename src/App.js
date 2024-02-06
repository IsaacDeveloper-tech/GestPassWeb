import './App.css';
import { PassItemComponent } from './components/PassItemComponent/PassItemComponent';
import { DataManager } from './data/DataManager';
import { AddPassComponent } from './components/AddPassComponent/AddPassComponent';
import { NotificatorComponent } from './components/NotificatorComponent/NotificatorComponent';
import { NOTIFICATION_TYPE } from './utils/structs';
import React from 'react';

function App() {

  // Management of the passwords //
  const [passwords, setPassword] = React.useState([]);
  const dataManager = new DataManager();

  React.useEffect(() => {
    setPassword(dataManager.getPasswords());
  }, []);
  /////////////////////////////////

  // Management of the notifications //
  const [showNotification, setShowNotification] = React.useState(false);
  const [notificationText, setNotificationText] = React.useState("");
  const [notificationType, setNotificationType] = React.useState(NOTIFICATION_TYPE.INFO);
  /////////////////////////////////////

  return (
    <div className="App">

      <NotificatorComponent 
        text = { notificationText } 
        type = { notificationType }
        show = { showNotification }

        setShowNotification = { setShowNotification }
      />

      { 
        passwords.map((password, index) =>
          <PassItemComponent 
            key={index} 
            id={index}
            platform={password.platform} 
            pass={password.password} 
            dataManager={dataManager}
            setPassword={setPassword}

            setNotificationText={setNotificationText}
            setNotificationType={setNotificationType}
            setShowNotification={setShowNotification}
          />
        )
      }

      
      <AddPassComponent 
        dataManager={dataManager} 
        setPassword={setPassword} 

        setNotificationText={setNotificationText}
        setNotificationType={setNotificationType}
        setShowNotification={setShowNotification}
      />
      
    </div>
  );
}

export default App;
