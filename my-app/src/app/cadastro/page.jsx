import Link from "next/link";
import styles  from './cadastro.module.css'

export default function(){
    return (
        <>
            <body className={styles["body"]}>
                <div className={styles["main-cadastro"]}>
                    <div className={styles["left-cadastro"]}>
                        <h1>De o primeiro passo para uma jornada de<br />cuidados automotivos sem preocupações</h1>
                        <img src="/image/parque.svg" className={styles['left-img']} alt="" />
                    </div>
                    <div className={["rigth-cadastro"]}>
                        <div className={styles["card-cadastro"]}>
                            <h1>Cadastro</h1>
                            <div className={styles["text-field"]}>
                                <label htmlFor="E-mail">E-mail</label>
                                <input type="text" name="E-mail" placeholder="E-mail"/>
                            </div>
                            <div className={styles["text-field"]}>
                                <label htmlFor="Numero">Numero</label>
                                <input type="number" name="Numero" placeholder="Numero"/>
                            </div>
                            <div className={styles["text-field"]}>
                                <label htmlFor="Senha">Senha</label>
                                <input type="password" name="Senha" placeholder="Senha"/>
                            </div>
                            <div className={styles["text-field"]}>
                                <label htmlFor="Confirme-Senha">Confirme-Senha</label>
                                <input type="password" name="Confirme-Senha" placeholder="Confirme-Senha"/>
                            </div>
                            <button className={styles["btn-cadastro"]}>Cadastrar</button>
                        </div>
                        
                    </div>

                </div>
            </body>
        </>
    )
}