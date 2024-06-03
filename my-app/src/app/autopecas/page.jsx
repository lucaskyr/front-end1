'use client'

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from './auto.module.css'

export default function(){
    const router = useRouter()
    return (
      <>
        <main className="flex flex-col items-center justify-center ">
          <div className="w-full max-w-screen-lg h-20 bg-[#600302] rounded-3xl mb-6 ">
            <div className="flex flex-wrap items-center justify-between p-2">
              <img className="w-16 h-16 rounded-full mt-0.5 ml-1 p-1" src="/image/logo.jpeg" alt="Logo" />
              <div className="flex flex-wrap items-center justify-center space-x-2 mt-2">
                <button
                  className="px-4 py-2 h-10 w-48 md:w-52 lg:w-56 rounded-lg font-light border-none bg-[#970505] text-white uppercase shadow-lg hover:shadow-red-700 cursor-pointer mb-4"
                  type="button"
                  onClick={() => router.push('/homeusu')}
                >
                  Voltar
                </button>
              </div>
            </div>
          </div>
  
          <div className="w-full max-w-screen-lg flex flex-col md:flex-row justify-evenly mt-16 space-y-6 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-[300px] h-[600px] bg-[#600302] rounded-3xl flex items-center justify-center  flex-col mr-16">
                  <div className="flex flex-col md:flex-row items-center">
                      <img src="/image/estoque.png" alt="Desconto em peças" className="w-[280px] h-[580px] rounded-3xl mt-1 mx-1 shadow-lg" />
                  </div>
            </div>
            <div className="w-full md:w-[520px] h-[600px] bg-[#600302] rounded-3xl flex items-center justify-center ">
                <div className="flex flex-col items-center justify-center mr-5">
                    <div className="flex mt-10">

                        <div className="flex flex-col  mr-5 mb-12">
                              <div>
                                  <label htmlFor="Montadora" className="text-[#f0ffffde] mb-2">Montadora</label>
                                  <input type="text" name="Montadora" placeholder="Montadora" className="w-full h-20 border-none rounded-lg p-4 bg-[#d40f05] text-[#202020] text-lg shadow-lg outline-none mb-4"/>  
                              </div>
                              <div>
                                  <label htmlFor="Modelo car" className="text-[#f0ffffde] mb-2">Modelo car</label>
                                  <input type="text" name="Modelo carro" placeholder="Modelo carro" className="w-full h-20 border-none rounded-lg p-4 bg-[#d40f05] text-[#202020] text-lg shadow-lg outline-none mb-4"/>  
                              </div>
                              <div>
                                  <label htmlFor="Ano carro" className="text-[#f0ffffde] mb-2">Ano veiculo</label>
                                  <input type="text" name="Ano carro" placeholder="Ano carro" className="w-full  h-20 border-none rounded-lg p-4 bg-[#d40f05] text-[#202020] text-lg shadow-lg outline-none mb-4"/>  
                              </div>
                              <div>
                                  <label htmlFor="Peça" className="text-[#f0ffffde] mb-2">Peça veiculo</label>
                                  <input type="text" name="Peça" placeholder="Peça" className="w-full h-20 border-none rounded-lg p-4 bg-[#d40f05] text-[#202020] text-lg shadow-lg outline-none mb-4"/>  
                              </div>
                        </div>
                        <div className='mt-56'>
                            <button className=" h-24 w-[230px]  rounded-lg font-light border-none bg-[#970505] text-white uppercase shadow-lg hover:shadow-red-700 cursor-pointer mb-4">
                                Fora de estoque!
                            </button>
                        </div>
                    </div>
                  <div className="mt-16">
                    <img src="/image/customcar.svg" alt="" className="w-[300px] h-[200px] " />
                  </div>
                </div>
            </div>
            
          </div>
  
          <div className="w-full max-w-screen-lg h-20 bg-[#600302] rounded-3xl mt-24 flex flex-col md:flex-row items-center justify-center p-4 space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-2">
              <img src="/image/insta.png" alt="Instagram" className="w-10 h-10"/>
              <h1 className="text-white font-mono text-lg">HorusAutomotive</h1>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/image/face.png" alt="Facebook" className="w-10 h-10 rounded-sm" />
              <h1 className="text-white font-mono text-lg">HorusAutomotive</h1>
            </div>
          </div>
        </main>
      </>
    );
}