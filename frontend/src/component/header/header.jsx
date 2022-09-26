
import styles from './header.module.scss'

export default function Header({mouvPage})
{
    function handleActivPageClient()
    {
        mouvPage(1);
    }
    function handleActivPageConnection()
    {
        mouvPage(2);
    }
    return (
        <div className={styles.header}>
            <button onClick={(e) => handleActivPageClient(e)} className={`btn btn_menu`} style={{borderRight:"1px solid var(--gray_2)"}}>Client</button>
            <button onClick={(e) => handleActivPageConnection(e)} className={`btn btn_menu`}>Réstaurateur</button>
        </div>
    );
}