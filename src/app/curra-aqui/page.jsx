import Image from "next/image";

const page = () => {
    return (
        <div className="relative ml-5">
            <h2 className="text-5xl font-bold uppercase">EL INGREDIENTE <br />
                Principal.</h2>
            <div className="flex gap-4">
                <div className="flex gap-2">
                    <p className="w-40 uppercase font-bold text-xl">Si estás aquí es porque has pedido o estás a punto de pedir VICIO.</p>
                    <Image src="/pic_1.png" width="300" height="300" alt="" />
                </div>
                <div>
                    <div className="flex gap-2 m-2">
                        <Image src="/world.png" width="70" height="70" alt="" />
                        <Image src="/rollBurger.gif" width="70" height="70" alt="" />
                    </div>
                    <p className="w-5/12 uppercase font-bold text-lg">Seguramente te habrás preguntado qué hace que la burger tenga ese sabor tan icónico.</p>
                    <div>
                        <Image src="/pic_2.png" width="250" height="250" alt="" />
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default page;