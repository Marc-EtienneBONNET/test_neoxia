import axios from "axios";
import { useState } from "react";

export default function For_connection({mouvConnect})
{
    let [user, setUser] = useState({
        login:"",
        password:""
    })
    async function handleActivPageRestorateur()
    {
        if (user.login !== "" && user.login.length < 10 && user.password !== "" && user.password.length < 10)
        {
            let myuser = (await axios.get('http://localhost:3001/user/takeOneUserByLogin'+ user.login)).data;
            if (myuser.password === user.password)
            {
                mouvConnect(true);
                axios.post('http://localhost:3001/user/mouvLog');
                return ;
            }
        }
        alert("il n'y a pas de compte correspondant"); 
    }
    function hancleInputConnectUser(e)
    {
        let tmp = {
            ...user,
            [e.target.name]:e.target.value,
        };
        setUser(tmp);
    }
    return (
        <div>
            <h3 style={{ marginBottom:'50px'}}>Connectez-vous</h3>
            <form>
                <div className="grille_creat_conte">
                    <label>Identifiant</label>
                    <input onInput={(e) => hancleInputConnectUser(e)} type="text" className="input_text input_create_conte" name="login"/>
                </div>                
                <div className="grille_creat_conte">
                    <label>mot de pass</label>
                    <input onInput={(e) => hancleInputConnectUser(e)} type="text" className="input_text input_create_conte" name="password"/>
                </div>
                <div className="">
                    <input onClick={(e) => handleActivPageRestorateur(e)} type="button" className="btn btn_create_conte" style={{ marginTop:'60px'}} value="connection"/>
                </div>
            </form>
        </div>
        );
}