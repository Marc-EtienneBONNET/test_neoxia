import axios from "axios";
import { useState } from "react";

export default function Befor_connection(mouvConnect)
{
    let [user, setUser] = useState({
        login:"",
        password:""
    })
    let [checkPass, setCheckPass] = useState("");

    async function hanclePostNewUser()
    {
        if (user.login === "" || user.login.length > 10 || user.password === "" || user.password.length > 10 || checkPass !== user.password)
            alert("information de création de compte non valable !");
        else
        {
            await axios.post('http://localhost:3001/user/addNew', {login:user.login, password:user.password});
            alert("Vous venez de créer votre profil restaurateur !");
        }
    }

    function hancleInputCreateUser(e)
    {
        if (e.target.name === "checkPass")
            setCheckPass(e.target.value);
        else
        {
            let tmp = {
                ...user,
                [e.target.name]:e.target.value,
            };
            setUser(tmp);
        } 
    }
    return (
    <div>
        <h3 style={{ marginBottom:'30px'}}>Créer votre profil !</h3>
        <form>
            <div className="grille_creat_conte">
                <label className="text_create_conte">Identifiant</label>
                <input onInput={(e) => hancleInputCreateUser(e)} type="text" className="input_text input_create_conte" name="login"/>
            </div>                
            <div className="grille_creat_conte">
                <label className="text_create_conte">Mot de pass</label>
                <input onInput={(e) => hancleInputCreateUser(e)} type="text" className="input_text input_create_conte" name="password"/>
            </div>
            <div className="grille_creat_conte">
                <label className="text_create_conte">Répétez votre mot de passe</label>
                <input onInput={(e) => hancleInputCreateUser(e)} type="text" className="input_text input_create_conte" name="checkPass"/>
            </div>
            <div className="">
                    <input onClick={(e) => hanclePostNewUser(e)} type="submit" className="btn btn_create_conte" value="connection"/>
            </div>
        </form>
    </div>);
}