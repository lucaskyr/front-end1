import Link from 'next/link';
import styles from './login.module.css'
export default function(){
    return(
        <>
            <body className={styles["body"]}>
                <div className={styles["main-login"]}>
                    <div className={styles["left-login"]}>
                        <h1 >bem vindo  Agende agora e <br />impulsione sua confiança na estrada </h1>
                        <img src="/image/driver.svg" className={styles['left-img']} alt="" />
                    </div>
                 <div className={styles["right-login"]}>
                        <div className={styles["card-login"]}>
                            <h1>Login</h1>
                            <div className={styles["text-field"]}>
                                <label for="E-mail">E-mail</label>
                                <input type="text" name='E-mail' placeholder='E-mail' />
                            </div>
                            <div className={styles["text-field"]}>    
                                <label for="senha">senha</label>
                                <input type="password" name='Senha' placeholder='Senha'/>
                            </div>
                            <button className={styles["btn-login"]}>Login</button>
                        </div>
                     </div>
                </div>
            </body>
        </>

    )
}