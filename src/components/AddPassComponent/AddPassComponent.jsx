import style from './AddPassComponent.module.css';
import { createPass } from '../../utils/common-functions';
import React from 'react';

export function AddPassComponent({ dataManager, setPassword })
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

            <button onClick={() => addPass(platform, dataManager, setPassword)} className={ style.add_pass__button }>Add</button>
        </div>
    );
}


// Functions of component
function addPass(platform, dataManager, setPassword)
{
    dataManager.setPassword(platform, createPass());
    setPassword([...dataManager.getPasswords()]);
}