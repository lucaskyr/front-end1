'use client'
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles  from './cadastro.module.css'

export default function (){
    const router = useRouter()
    return (
        <>
            <body className={styles["body"]}>
            <div className="font-kanit m-0">
            <div className="flex flex-col md:flex-row justify-center items-center w-screen h-screen bg-[#840502] p-4 ">
                <div className="flex flex-col justify-center items-center text-[#f1eaea] w-full md:w-1/2 h-full">
                    <h1 className="text-center mb-6">
                        Dê o primeiro passo para uma jornada de
                        <br />
                        cuidados automotivos sem preocupações
                    </h1>
                    <img src="/image/parque.svg" className="w-4/5 md:w-2/3" alt="Parque" />
                </div>
                <div className="flex justify-center items-center w-full md:w-1/2 h-full">
                    <div className="flex flex-col justify-center items-center w-4/5 md:w-3/5 bg-[#ac0a03] rounded-2xl p-8 md:p-16 shadow-lg">
                        <h1 className="text-[#fdf9f9] font-extrabold m-0 text-center mb-6">Cadastro</h1>
                        <div className="w-full my-2">
                            <label htmlFor="E-mail" className="text-[#f0ffffde] mb-2">E-mail</label>
                            <input type="text" name="E-mail" placeholder="E-mail" className="w-full border-none rounded-lg p-4 bg-[#d40f05] text-[#202020] text-lg shadow-lg outline-none mb-4"/>
                        </div>
                        <div className="w-full my-2">
                            <label htmlFor="Nome" className="text-[#f0ffffde] mb-2">Nome</label>
                            <input type="text" name="Nome" placeholder="Nome" className="w-full border-none rounded-lg p-4 bg-[#d40f05] text-[#202020] text-lg shadow-lg outline-none mb-4"/>
                        </div>
                        <div className="w-full my-2">
                            <label htmlFor="Cpf" className="text-[#f0ffffde] mb-2">Cpf</label>
                            <input type="number" name="Cpf" placeholder="Cpf" className="w-full border-none rounded-lg p-4 bg-[#d40f05] text-[#202020] text-lg shadow-lg outline-none mb-4"/>
                        </div>
                        <div className="w-full my-2">
                            <label htmlFor="Numero" className="text-[#f0ffffde] mb-2">Número</label>
                            <input type="number" name="Numero" placeholder="Número" className="w-full border-none rounded-lg p-4 bg-[#d40f05] text-[#202020] text-lg shadow-lg outline-none mb-4"/>
                        </div>
                        <div className="w-full my-2">
                            <label htmlFor="Senha" className="text-[#f0ffffde] mb-2">Senha</label>
                            <input type="password" name="Senha" placeholder="Senha" className="w-full border-none rounded-lg p-4 bg-[#d40f05] text-[#202020] text-lg shadow-lg outline-none mb-4"/>
                        </div>
                        <div className="w-full my-2">
                            <label htmlFor="Confirme-Senha" className="text-[#f0ffffde] mb-2">Confirme-Senha</label>
                            <input type="password" name="Confirme-Senha" placeholder="Confirme-Senha" className="w-full border-none rounded-lg p-4 bg-[#d40f05] text-[#202020] text-lg shadow-lg outline-none mb-4"/>
                        </div>
                        <button className="max-h-full w-full py-2 mt-6 border-none rounded-md uppercase font-semibold tracking-widest text-white bg-[#5c0000] cursor-pointer shadow-lg hover:shadow-red-950 h-16" onClick={() => router.push('/login')}>Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
            </body>
        </>
    )
}