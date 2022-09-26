import Befor_connection from './befor_connection/page_befor_connection'
import For_connection from './for_connection/page_for_connection'
import { useState } from 'react';
import axios from 'axios';

export default function HtmlConnection()
{
    let [is_connect, mouvConnect] = useState(false);
    let page;

    const requette1 = async () => {
        let tmp = (await axios.get('http://localhost:3001/user/takeOneUserByLog')).data.log;
        if (tmp !== is_connect)
            mouvConnect(tmp);
        else
            setTimeout(() => {requette1()}, 1000);
        return (tmp);
    }
    requette1();
        page = (
            <div className='grille_for_page_connection'>
                <Befor_connection />
                <For_connection mouvConnect={mouvConnect}/>
            </div>)
    return (
        <div>
            {page}
        </div>
    );
}