
import HtmlClient from './page_client/page_client'
import HtmlConnection from './page_connection/page_connection'

export default function Content({page})
{
    let my_page;
    switch(page)
    {
        case 1:
            my_page = <HtmlClient/>; 
        break;
        case 2: 
            my_page = <HtmlConnection/>;
        break;
        default :
            my_page = <div></div>
    }
    return (
        <div style={{ minHeight:"97vh"}}>
            {my_page}
        </div>
    );
}