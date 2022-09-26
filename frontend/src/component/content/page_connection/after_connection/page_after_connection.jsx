import axios from "axios";
import { useState } from "react";
import AfterConnectionCommande from './page_after_connection_commande';

export default function After_connection({mouvConnect})
{
    let [garniture, mouvGar] = useState([[],[],[]]);

    let [tmpGarniture, mouvTmpGar] = useState("");
    let [tmpViande, mouvTmpVia] = useState("");
    let [tmpSauce, mouvTmpSau] = useState("");


    function createMarcUpPrepa(element, type)
    {
        return (
        <div className="garniture grille_after_connection_prepa" key={element.id}>
            <label>{element.name} </label>
            <button onClick={(e) => handlePostSupAliment(e, element.name, type)} className="btn " >suprimer</button>
        </div>)
    }

    async function handlePostSupAliment(e, name, type)
    {
        await axios.post('http://localhost:3001/'+ type +'/supOne', {data:name});
    }

    async function handlePostAddAliment(e)
    {  
        let valeur;
        if (e.target.name === "garniture")
            valeur = tmpGarniture;
        else if (e.target.name === "viande")
            valeur = tmpViande;
        else if (e.target.name === "sauce")
            valeur = tmpSauce;
        if (valeur > 10)
            alert("10 caractères max !");   
        else if (valeur === "")
            alert("Vous devez donner un nom à l'aliment !");    
        else
        {
            let tmp =  (await axios.get('http://localhost:3001/'+e.target.name+'/takeByName' + valeur)); 
            if (tmp.data.name !== valeur)
            await axios.post('http://localhost:3001/'+e.target.name+'/addNew', {data:valeur});
            else
            alert("Vous avez déjà inscrit : " + valeur);    
        }
    }

    function handleAddalliment(e)
    {
        if (e.target.name === "garniture")
            mouvTmpGar(e.target.value);
        else if (e.target.name === "viande")
        {
            mouvTmpVia(e.target.value);
        }
        else if (e.target.name === "sauce")
            mouvTmpSau(e.target.value);
    }

    async function deconnection()
    {
        mouvConnect(false);
        await axios.post('http://localhost:3001/user/mouvLog');
    }
    
    const requette1 = async () => {
        var test = [[],[],[]];
        test[0] = (((await axios.get('http://localhost:3001/garniture/takeAll')).data));
        test[1] = (((await axios.get('http://localhost:3001/viande/takeAll')).data));
        test[2] = (((await axios.get('http://localhost:3001/sauce/takeAll')).data));
        if (test[0].length !== garniture[0].length ||
            test[1].length !== garniture[1].length ||
            test[2].length !== garniture[2].length)
            mouvGar(test);
        else
            setTimeout(() => {requette1()}, 100);  
        return (test);
    }
    requette1();
    return (
        <div className="grille_after_connection">
            <AfterConnectionCommande />
            <div className="modif">
                <h1 style={{marginTop:'5%'}}>Choisisez la garnitureque vous proposer a vos client !</h1>
                    <div className="grille_after_connection_modif">

                    <div style={{marginTop:"20px"}}>
                        <h1>Vos garnitures !</h1>
                        {garniture[0].map((element) => {return createMarcUpPrepa(element, 'garniture')})}
                        <form className="grille_after_connection_prepa">
                            <input onInput={(e) => handleAddalliment(e)} type="text" className="input_text" name="garniture"></input>
                            <input  onClick={(e) => handlePostAddAliment(e)} type="button" value="ajouter" className="btn " name="garniture"></input>
                        </form>
                    </div>
                    <div style={{marginTop:"20px"}}>
                        <h1>Vos Viandes !</h1>
                        {garniture[1].map((element) => {return createMarcUpPrepa(element, 'viande')})}
                        <form className="grille_after_connection_prepa">
                            <input onInput={(e) => handleAddalliment(e)}  type="text" className="input_text"  name="viande"></input>
                            <input onClick={(e) => handlePostAddAliment(e)} type="button" value="ajouter" className="btn " name="viande"></input>
                        </form>
                    </div>
                    <div style={{marginTop:"20px"}}>
                        <h1>Vos sauces !</h1>
                        {garniture[2].map((element) => {return createMarcUpPrepa(element, 'sauce')})}
                        <form className="grille_after_connection_prepa">
                            <input onInput={(e) => handleAddalliment(e)}  type="text" className="input_text" name="sauce"></input>
                            <input onClick={(e) => handlePostAddAliment(e)} type="button" value="ajouter" className="btn " name="sauce"></input>
                        </form>
                    </div>
                </div>
                <input onClick={() => {deconnection()}} type="button" value="déconnection" className="btn btn_deconnection" name="sauce"></input>
            </div>
        </div>
    );
}