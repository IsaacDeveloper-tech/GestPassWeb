export class Password {
    constructor(platform, password) {
        this.platform = platform;
        this.password = password;
    }
};

export class DataManager{
    constructor(){
        // Load data from local storage
        this.keyData = "data";
        this.passwords = [];
        let data = window.localStorage.getItem(this.keyData);
        if(data !== null)
        {
            this.passwords = JSON.parse(data);
        }

        // Singleton
        if(DataManager.instance === undefined){
            DataManager.instance = this;
        }
        else{
            return DataManager.instance;
        }
    }

    saveData(){
        window.localStorage.setItem(this.keyData, JSON.stringify(this.passwords));
    }

    getPassword(id){
        return this.passwords[id];
    }

    getPasswords(){
        return this.passwords;
    }

    setPassword(platform, password){
        this.passwords.push(new Password(platform, password));
        this.saveData();
    }

    changePassword(id, password){
        this.passwords[id].password = password;
        this.saveData();
    }

    deletePassword(id){
        this.passwords.splice(id, 1);
        this.saveData();
    }
};