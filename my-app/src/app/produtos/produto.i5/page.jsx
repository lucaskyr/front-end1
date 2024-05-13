import Link from 'next/link';
import styles from './page.module.css'
export default function(){
    return(
        <>
        <main className={styles.container}>
        <div> 
        <h1>lista de produtos</h1>
        <div>
            <p><h2>produto:</h2> processador </p>
            <p><h2>modelo:</h2> 14001</p>
            <p><h2>marca:</h2> intel </p>
            <p><h2>preço:</h2> 3500,00</p>
        </div>
        <br />
        <p><Link href={'/'}>voltar</Link></p>
        </div>
        </main>
        </>
    )
}