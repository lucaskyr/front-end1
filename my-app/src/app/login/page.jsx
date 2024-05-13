import Link from 'next/link';
import styles from './page.module.css'
export default function(){
    return(
        <>
        <div className='container'>
        <h1>login</h1>
        <span>e-mail</span>
        <input  />
        <span>senha</span>
        <input  />
        <br />
        <p><Link href={'/'}>voltar</Link></p>
        </div>
        </>

    )
}