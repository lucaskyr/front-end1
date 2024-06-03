'use client'
 
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import Image from "next/image";


export default function Home() {
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
                onClick={() => router.push('/')}
              >
                Sair
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-screen-lg flex flex-col md:flex-row justify-evenly mt-16 space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-[520px] h-[600px] bg-[#600302] rounded-3xl flex items-center justify-center  flex-col">
                <div className="flex flex-col md:flex-row items-center">
                    <img src="/image/estoque.png" alt="Desconto em peças" className="w-[470px] h-[510px] rounded-3xl mt-1 mx-1 shadow-lg" />
                </div>
                <div className='mt-5'>
                    <button className=" h-14 w-[230px]  rounded-lg font-light border-none bg-[#970505] text-white uppercase shadow-lg hover:shadow-red-700 cursor-pointer mb-4">
                        Ir para estoque e reposiçao
                    </button>
                </div>
          </div>
          <div className="w-full md:w-[520px] h-[600px] bg-[#600302] rounded-3xl flex items-center justify-center  flex-col">
                <div className="flex flex-col md:flex-row items-center">
                    <img src="/image/agmecanico.png" alt="Desconto em peças" className="w-[470px] h-[510px] rounded-3xl mt-1 mx-1 shadow-lg" />
                </div>
                <div className='mt-5'>
                    <button className=" h-14 w-[230px]  rounded-lg font-light border-none bg-[#970505] text-white uppercase shadow-lg hover:shadow-red-700 cursor-pointer mb-4">
                        Agenda do mecanico
                    </button>
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
