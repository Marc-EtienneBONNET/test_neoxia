import axios from "axios";
import { useState } from "react";

export default function AfterConnectionCommande()
{
    let [cmd, mouvCmd] = useState([]);

    function my_splite(element)
    {
        let res = [];
        let j = 0;
        for (let i = 0; element[i]; i++)
        {
            if (element[i] === '/')
            {
                res.push(element.substr(j, i - j))
                i++;
                j = i;
            }
        }
        return (res);
    }

    function createMarcUpCommande(element)
    {
        let garnitur = my_splite(element.garniture).map((e) => <p key={e}>{e}</p>);
        let viande = my_splite(element.viande).map((e) => <p key={e}>{e}</p>);
        let sauce = my_splite(element.sauce).map((e) => <p key={e}>{e}</p>);
        let myDate = new Date(element.date);
        let myStringDate = myDate.getDate() + "/" + myDate.getMonth() + "/" + myDate.getFullYear() + " " + myDate.getHours() + ":" + myDate.getMinutes();
        return (
        <div onClick={(e) => handlePostSupCommande(e, element.id)} key={element.id}>
            <p className="">{element.name}</p>
            <p className="">{myStringDate}</p>
            <p className="">{element.etat}</p>
            <div className="grille_after_connection_commande">
                <div className="element">
                    {garnitur}
                </div>
                <div className="element">
                    {viande}
                </div>
                <div className="element">
                    {sauce}
                </div>
            </div>
        </div>)
    }
    async function handlePostSupCommande(e, id)
    {
        await axios.post('http://localhost:3001/commande/mouvEtat', {id:id});
    }

    function comparTab(myTab, newTab)
    {
        for (let i = 0; newTab[i]; i++)
        {
            if (myTab.length !== newTab.length || newTab[i].etat !== myTab[i].etat)
            {
                mouvCmd(newTab);
                return (1);
            }
        }
        if (newTab.length !== myTab.length)
        {
            mouvCmd(newTab);
            return (1);
        }
        return (-1);
    }

    const requette1 = async () => {
        let tmp_cmd = [];
        let tmp;
        let index_max;
        tmp = (await axios.get('http://localhost:3001/commande/takeAll')).data;
        index_max = tmp.length;
        for (let i = 0; i < index_max && tmp[i]; i++)
            tmp_cmd.push(tmp[i]);
        if (comparTab(cmd, tmp_cmd) === -1)
            setTimeout(() => {requette1()}, 100);
        return (tmp_cmd);
    }
    requette1();
    return (
        <div style={{marginTop:"20px"}} className='commandes'>
            <h1>Vos commandes !</h1>
            {cmd.map((element) => {return createMarcUpCommande(element)})}
        </div>
    );
}