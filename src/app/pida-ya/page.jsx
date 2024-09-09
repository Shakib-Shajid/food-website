import React from 'react';
import { FaLocationDot } from "react-icons/fa6";


const page = () => {
    return (
        <div className='ml-5 space-y-5'>
            <h2 className='text-5xl font-bold'>A DOMICILIO</h2>

            <div>
                <select className="border border-black bg-transparent select select-bordered w-2/4 mr-3">
                <option selected>Barcelona</option>
                <option>Madrid</option>
                <option>Palma de Mallorca</option>
                <option>Sevilla</option>
                <option>Terrassa</option>
                <option>Málaga</option>
                <option>Sant Cugat</option>
                <option>Sabadell</option>
                <option>Valencia </option>
                <option>Alicante </option>
                <option>Zaragoza</option>
            </select>

            <button className='btn btn-warning w-2/5 rounded-full text-green-600 text-2xl'>Glovo <FaLocationDot className='text-sm'/></button>
            </div>

            <h2 className='text-5xl font-bold'>PARA RECOGER</h2>

            <div className='flex gap-5'>
                <select className="border border-black bg-transparent select select-bordered w-full max-w-xs">
                    <option selected>Barcelona</option>
                    <option>Madrid</option>
                    <option>Palma de Mallorca</option>
                    <option>Sevilla</option>
                    <option>Terrassa</option>
                    <option>Málaga</option>
                    <option>Sant Cugat</option>
                    <option>Sabadell</option>
                    <option>Valencia </option>
                    <option>Alicante </option>
                    <option>Zaragoza</option>
                </select>

                <select className="border border-black bg-transparent select select-bordered w-full">
                    <option disabled selected>Seleccione...</option>
                    <option>C. del Comte d'Urgell 204, 08036</option>
                    <option>Carrer de Sant Joaquim, 2 08930</option>
                    <option>Palma de Ctra. Reial 55, 08960, Sant Just Desvern</option>
                    <option>C. Balmes 248, 08006</option>
                    <option>C. de Corretger 9, 08003</option>
                    <option>C. d'Eiximenis 11, 08030</option>
                    <option>C. de Castelao 165, 08902</option>
                    <option>Via Augusta 21, 08006</option>
                </select>
            </div>
            <button className='btn btn-error text-white w-2/4 rounded-full '>¡Pide ya!</button>


        </div>
    );
};

export default page;



