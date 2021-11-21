class Auth{
    logout(){
        let tkn = this.getUser();
        const lgt = async event =>{
            event.preventDefault();
            try{
                const body = {tkn};
                let resp = await fetch("http://localhost:5000/logout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });
                console.log(resp.json());
            }
            catch(err){
                console.error(err.message);
            }
        

        }
        localStorage.removeItem("user");
    }
    getUser(){
        return JSON.parse(localStorage.getItem('user'));
    }
    isLogged(){
        return this.getUser() != null;
    }
}

export default new Auth();