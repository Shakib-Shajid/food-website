import BlackBG from "@/components/BlackBG";
import Ingredient from "@/components/Ingredient";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpLeft } from "react-icons/go";



const page = () => {
    return (

        <div className="ml-5 flex">
            <h2 className="text-5xl font-bold uppercase fixed">EL INGREDIENTE <br />
                Principal.</h2>
            <div className="flex gap-4 mt-32 flex-shrink-0">
                <div className="flex gap-2">
                    <p className="w-40 uppercase font-bold text-xl">Si estás aquí es porque has pedido o estás a punto de pedir VICIO.</p>
                    <Image src="/pic_1.png" width="300" height="200" alt="" />
                </div>
                <Ingredient />
            </div>

            <div className="flex-shrink-0">
                <div className=" mt-60 -ml-20">
                    <Image src="/arrow.png" width="500" height="10" alt="" className="w-full" />
                </div>
            </div>

            <div className="flex-shrink-0">
                <div className=" mt-2">
                    <Image src="/pic_3.png" width="250" height="250" alt="" />
                    <p className="w-72 uppercase font-bold">
                        el ingrediente principal es la cultura. Nuestra gente. Desde todos los que cocinan hasta todos los que hacen que llegue rápido y hot.
                        <Image src="/fire.gif" width={30} height={30} alt="" className="inline-block ml-1" />
                    </p>
                </div>
            </div>

            <div className="flex-shrink-0 mt-20">
                <Image src="/pic_4.png" width="250" height="250" alt="" />
            </div>

            <div className="flex-shrink-0 mt-20 ml-5">
                <p className="uppercase font-bold text-lg w-72">Y hay algo que tenemos todoS en común: ofrecer algo que va mucho más allá de llenar estómagos. Esto ES una experiencia gastronómica. Muy digital. Muy amante. Muy canalla.</p>

                <div className="flex gap-3 relative">
                    <Image
                        src="/pic_5.png"
                        width="100"
                        height="100"
                        alt=""
                        className="w-[100px] h-[100px]" // Set explicit width and height
                    />
                    <video
                        className="mt-10"
                        src="https://cdn.prod.website-files.com/6234368c451e783a0caa24f2/62d430859c1357a148b87c1f_sr-vicio-transcode.mp4"
                        width="90"
                        height="90"
                        type="video/mp4"
                        muted // Ensure video is muted for autoplay
                        autoPlay
                        loop
                    ></video>
                </div>

            </div>
            <div className="flex-shrink-0">
                <div className=" mt-36 mr-0">
                    <Image src="/arrow_1.png" width="500" height="10" alt="" className="w-full" />
                </div>
            </div>

            {/* <div className="flex-shrink-0 w-screen bg-black text-white p-40 ">

                <div className="uppercase font-bold text-xl relative space-y-3">
                    <Image src="/people.png" width="100" height="100" alt="" className="bg-white absolute left-[300px] -mt-1" />
                    <p>SI HAS LLEGADO HASTA AQUí</p>
                    <p>Y QUIERES FORMAR PARTE DE<span className="inline-block">............... ESTO</span></p>
                    <p>PUEDES VER AQUÍ LAS <Link href="/curra-aqui" className="text-red-500 hover:underline">OPORTUNIDADES DE EMPLEO</Link><GoArrowUpLeft className="inline-block ml-1" /></p>
                    <p>O INCLUSO ESCRIBIRNOS UN <Link href="mailto:talent@ganasdevicio.com?subject=Ganas%20de%20currar%20en%20Vicio" className="text-red-500 hover:underline">MAIL</Link><GoArrowUpLeft className="inline-block ml-1" /></p>
                    <p className="text-3xl">O Simplemente USAR EL CAMINO <span className="text-red-500">Rápido</span>.</p>

                </div>
            </div> */}
            <BlackBG />


        </div>

    );
};

export default page;