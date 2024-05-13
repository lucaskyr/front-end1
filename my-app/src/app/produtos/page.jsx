import Link from 'next/link';
import style from './page.module.css'
export default function(){
    return(
        <>
        <div> 
        <h1>lista de produtos</h1>
        <div>
        <p><Link href={'/produtos/produto.i3'}>i3</Link></p>
        </div>
        <div>
        <p><Link href={'/produtos/produto.i5'}>i5</Link></p>
        </div>
        <br />
        <p><Link href={'/'}>voltar</Link></p>
        </div>
        </>
    )
}