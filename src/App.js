import './App.css';
import { PassItemComponent } from './components/PassItemComponent/PassItemComponent';
import { DataManager } from './data/DataManager';
import { AddPassComponent } from './components/AddPassComponent/AddPassComponent';
import React from 'react';

function App() {
  const [passwords, setPassword] = React.useState([]);
  const dataManager = new DataManager();

  React.useEffect(() => {
    setPassword(dataManager.getPasswords());
  }, []);

  return (
    <div className="App">
      { 
        passwords.map((password, index) => {
          return <PassItemComponent 
                    key={index} 
                    id={index}
                    platform={password.platform} 
                    pass={password.password} 
                    dataManager={dataManager}
                    setPassword={setPassword}
                  />
        })
      }

      {
        <AddPassComponent 
          dataManager={dataManager} 
          setPassword={setPassword} 
        />
      }
    </div>
  );
}

export default App;
