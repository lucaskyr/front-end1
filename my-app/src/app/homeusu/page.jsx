'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules'; 
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'
 
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import Image from "next/image";
import styles from "./homeusu.module.css";


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
                onClick={() => router.push('/autopecas')}
              >
                Autopeças
              </button>
              <button
                className="px-4 py-2 h-10 w-48 md:w-52 lg:w-56 rounded-lg font-light border-none bg-[#970505] text-white uppercase shadow-lg hover:shadow-red-700 cursor-pointer mb-4"
                type="button"
                onClick={() => router.push('/agendamento')}
              >
                Agendamento
              </button>
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

        <div className="w-full max-w-screen-lg h-[250px] bg-[#600302] rounded-3xl mt-12 flex items-center justify-center p-4">
          <div className="w-full h-full rounded-3xl">
            <Swiper
              className="w-full h-full"
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              modules={[Pagination, EffectFade]}
              effect='fade'
            >
              <SwiperSlide className="w-full h-auto">
                <img src="/image/consertoespecializado.png" alt="Imagem 1" className="w-full h-full rounded-3xl" />
              </SwiperSlide>
              <SwiperSlide className="w-full h-auto">
                <img src="/image/baner1.png" alt="Imagem 2" className="w-full h-full rounded-3xl"/>
              </SwiperSlide>
              <SwiperSlide className="w-full h-auto">
                <img src="/image/vistoria.png" alt="Imagem 3" className="w-full h-full rounded-3xl" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="w-full max-w-screen-lg flex flex-col md:flex-row justify-evenly mt-16 space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-[500px] h-[220px] bg-[#600302] rounded-3xl flex items-center justify-center p-4">
            <div className="flex flex-col md:flex-row items-center">
              <img src="/image/desconto1.jpeg" alt="Desconto em peças" className="w-[200px] h-[200px] rounded-3xl mt-1 mx-1 shadow-lg" />
              <h1 className="text-white text-xl md:text-2xl font-serif ml-4 text-center md:text-left">Olá, aqui um incrível desconto em algumas de nossas peças. Venha conferir!</h1>
            </div>
          </div>
          <div className="w-full md:w-[500px] h-[220px] bg-[#600302] rounded-3xl flex items-center justify-center p-4">
            <div className="flex flex-col md:flex-row items-center">
              <h1 className="text-white text-xl md:text-2xl font-serif mr-4 text-center md:text-right">Olá, aqui um incrível desconto em nossas vistorias. Venha conferir!</h1>
              <img src="/image/desconto2.jpeg" alt="Desconto em vistorias" className="w-[200px] h-[200px] rounded-3xl mt-1 mx-1 shadow-lg" />
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
