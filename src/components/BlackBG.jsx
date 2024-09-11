"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoArrowUpLeft } from 'react-icons/go';

const BlackBG = () => {
    return (
        <div>
            <div className="flex-shrink-0 w-screen bg-black text-white p-40 ">
                <div className="uppercase font-bold text-xl relative space-y-3">
                    <Image src="/people.png" width="100" height="100" alt="" className="bg-white absolute left-[300px] -mt-1" />
                    <p>SI HAS LLEGADO HASTA AQUí</p>
                    <p>Y QUIERES FORMAR PARTE DE<span className="inline-block">............... ESTO</span></p>
                    <p>PUEDES VER AQUÍ LAS <Link href="/curra-aqui" className="text-red-500 hover:underline">OPORTUNIDADES DE EMPLEO</Link><GoArrowUpLeft className="inline-block ml-1" /></p>
                    <p>O INCLUSO ESCRIBIRNOS UN <Link href="mailto:talent@ganasdevicio.com?subject=Ganas%20de%20currar%20en%20Vicio" className="text-red-500 hover:underline">MAIL</Link><GoArrowUpLeft className="inline-block ml-1" /></p>
                    <p className="text-3xl">O Simplemente USAR EL CAMINO <span className="text-red-500">Rápido</span>.</p>

                </div>
            </div>
        </div>
    );
};

export default BlackBG;
