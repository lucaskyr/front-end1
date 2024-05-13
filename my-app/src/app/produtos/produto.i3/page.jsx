import Link from 'next/link';
import styles from './page.module.css'

export default function(){
    return(
        <>
         <main className={styles.container}>

        <div> 
        <h1>lista de produtos</h1>
        <div>
            produto: processador i3
            modelo: 14001
            marca: intel
            preço: 2500,00
        </div>
        <br />
        <p><Link href={'/'}>voltar</Link></p>
        </div>
         </main>
        </>
    )
}