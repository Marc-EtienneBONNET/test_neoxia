
import HtmlClient from './page_client/page_client'

export default function Content({page})
{
    let my_page;
    switch(page)
    {
        case 1:
            my_page = <HtmlClient/>; 
        break;
    }
    return (
        <div style={{ minHeight:"97vh"}}>
            {my_page}
        </div>
    );
}