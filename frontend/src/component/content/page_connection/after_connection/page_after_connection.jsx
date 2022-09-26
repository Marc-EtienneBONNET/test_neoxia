import axios from "axios";
import { useState } from "react";
import AfterConnectionCommande from './page_after_connection_commande';

export default function After_connection({mouvConnect})
{
    let [garniture, mouvGar] = useState([[],[],[]]);
    
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
        </div>
    );
}