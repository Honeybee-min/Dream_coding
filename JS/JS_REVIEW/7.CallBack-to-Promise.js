class UserStorage{
    constructor(id,password){
        this.id = id,
        this.password = password

    }

    loginUser(id,password){
        return new Promise((resolve,reject)=>{
            if(
                (id === 'min' && password === 'min') ||
                (id === 'test' && password === 'test')
            ){
                resolve(id);
            }else{
                reject(new Error("not found !"))
            }
        },2000);
    }

    getRoles(id){
        return new Promise((resolve,reject)=>{
            if (id === 'min'){
                resolve({
                    name : 'min',
                    role : 'admin'
                });
            }else{
                reject(new Error(`no access`));
            }
        },1000);
    }

}

const userStorage = new UserStorage();
const id = prompt(`id : `);
const password = prompt('password : ');


userStorage
.loginUser(id, password)
.then((id)=>userStorage.getRoles(id))
.then((id)=>alert(`hello ${id.name} you have a ${id.role}`))
.catch((id) => alert(id));  
