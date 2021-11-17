class Auth{
    logout(){
        localStorage.removeItem("user");
    }
    getUser(){
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new Auth();