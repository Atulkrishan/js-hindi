class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
        // never runs overrided by getter and setter only checked...
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(val){
        this._password = val;
    }
}
let u1 = new User("raman@gmail.com","a1Abc923");
console.log(u1.password);

function Student(name,className){
    this.className = className;
    // define property must be written first ...
    Object.defineProperty(this,'name',{
        set : function(val){
            this._name = val;
        },
        get : function(){
            return `${this._name} Kumar`;
        }
    })
    // never called due to setter 
    this.name = name;
    
}
let st1 = new Student('Raman','XII-A');
console.log(st1.name,st1._name);

