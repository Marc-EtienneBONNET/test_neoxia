import { useState } from "react";
import axios from 'axios';

function createNewTab(alliment, tab)
{
    let index = -1;
    let tmp;
    for (let i = 0; tab[i]; i++)
        if (tab[i] === alliment)
        {
            index = i;
            break; 
        }
    if (index !== -1)
    {
        tmp = [...tab];
        tmp.splice(index, 1);
    }
    else
    {
        tmp = [...tab, alliment];
    }
    return (tmp);
}


export default function HtmlClient()
{
    let [garniture, setGar] = useState([]);
    let [viandes, setVia] = useState([]);
    let [sauces, setSau] = useState([]);
    let [name, setNam] = useState("");
    let [tab_garniture, setTabGar] = useState([[],[],[]]);
    let [tab_viande, setTabVia] = useState([]);
    let [tab_sauce, setTabSau] = useState([]);


    async function handlePostNewKebab(e)
    {
        if (!garniture || !viandes || !sauces || !name || name.length > 10)
        {
            alert("Vous devez choisir au moin 1 garniture, 1 viande, 1 sauce\n et choisir un nom de moin de 10 caractaire!");
            e.preventDefault();
        }
        else
        {
            let tmpG = "";
            for (let i = 0; garniture[i]; i++)
                tmpG += garniture[i] + "/";
            let tmpV = "";
            for (let i = 0; viandes[i]; i++)
                tmpV += viandes[i] + "/";
            let tmpS = "";
            for (let i = 0; sauces[i]; i++)
                tmpS += sauces[i] + "/";
            axios.post('http://localhost:3001/commande/addNew', {name:name, garniture:tmpG, viande:tmpV, sauce:tmpS})
            alert("Bonjour " + name + "\nVotre kebab est comander !");
        }
    }
    function handleOnInput(e)
    {
        if (e.target.name === 'garniture')
            setGar(createNewTab(e.target.id, garniture));
        else if (e.target.name === 'viande')
            setVia(createNewTab(e.target.id, viandes));
        else if (e.target.name === 'sauce')
            setSau(createNewTab(e.target.id, sauces));
        else if (e.target.name === 'nom')
            setNam(e.target.value);

    }

    function createMarcUp(tmp, category){
        let    marcUp = (
        <div key={tmp} className='my_check_box'>
            <input onInput={(e) => handleOnInput(e)} type="checkbox" style={{width:"100%"}} id={tmp} name={category}/>
            <label htmlFor={tmp}>{tmp}</label>
            <br/>
        </div>)
        return (marcUp);
    }
    
    const requette1 = async () => {
        var test = [[],[],[]];
        test[0] = (((await axios.get('http://localhost:3001/garniture/takeAll')).data).map((e) => e.name));
        test[1] = (((await axios.get('http://localhost:3001/viande/takeAll')).data).map((e) => e.name));
        test[2] = (((await axios.get('http://localhost:3001/sauce/takeAll')).data).map((e) => e.name));
        if (test[0].length !== tab_garniture[0].length ||
            test[1].length !== tab_garniture[1].length ||
            test[2].length !== tab_garniture[2].length)
            setTabGar(test);
        else
            setTimeout(() => {requette1()}, 1000);
        return (test);
    }
    requette1();
    return (
            <form > 
                <div className="for_form" style={{marginTop: "50px"}}>
                    <h3>Créer ton kebab !</h3>
                    <br/>
                    {(tab_garniture[0].length > 0 && tab_garniture[1].length > 0 && tab_garniture[2].length > 0) ? <></> : <h4> (Attention! Vous devez proposer des garnitures à vos clients pour qu'il puisse commander)</h4>}
                </div>
                <div className="grille_client_ligne">
                    <div className="">
                        {tab_garniture[0].map((element) => {return createMarcUp(element, 'garniture')})}
                    </div>               
                    <div className="">
                        {tab_garniture[1].map((element) => {return createMarcUp(element, 'viande')})}
                    </div>
                    <div className="">
                        {tab_garniture[2].map((element) => {return createMarcUp(element, 'sauce')})}
                    </div>
                </div>
                <div className="for_form">
                    <input  onInput={(e) => handleOnInput(e)} className="input_text input_name" type="text" name="nom"/>
                    <input onClick={(e) => handlePostNewKebab(e)} className="btn btn_commande" type="submit" value="envoyer"/>
                </div>
            </form>
    );
}