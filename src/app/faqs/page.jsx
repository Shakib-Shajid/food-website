"use client"

import React, { useState } from 'react';

const Page = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);


    const questions = [
        { id: 1, question: "¿Qué pasa si mi pedido no llega?", answer: "Si tu pedido no llega, por favor contáctanos para que podamos ayudarte a resolver el problema lo antes posible." },
        { id: 2, question: "Tengo alergias.", answer: "Por favor, informa sobre tus alergias al hacer tu pedido para asegurarnos de que tus necesidades sean atendidas." },
        { id: 3, question: "¿Hacéis reservas?", answer: "Actualmente no tomamos reservas, pero puedes venir y encontrar mesa sin problemas." },
        { id: 4, question: "¿Puedo llevármelo?", answer: "Sí, puedes pedir para llevar o disfrutar de nuestra comida en casa." },
        { id: 5, question: "¿Puedo venir con mi perro?", answer: "Por supuesto, somos un lugar pet-friendly." },
        { id: 6, question: "Quiero sentarme y comer ahí.", answer: "¡Te esperamos para que disfrutes tu comida en nuestro restaurante!" },
        { id: 7, question: "¿Y con el gluten qué hago?", answer: "Tenemos opciones sin gluten. Por favor, asegúrate de indicarlo al hacer tu pedido." },
        { id: 8, question: "¿Cómo contacto con vosotros?", answer: "Puedes contactarnos a través de nuestra página web o redes sociales." },
        { id: 9, question: "Tengo una idea loca.", answer: "¡Nos encantan las ideas locas! Cuéntanos más y veremos qué podemos hacer." },
        { id: 10, question: "Quiero hacer un pedido muy grande.", answer: "Para pedidos grandes, por favor contáctanos con antelación para poder organizarlo adecuadamente" }
    ];

    return (
        <div>

<div className="relative p-4 w-screen">
                {/* Left Column: Questions */}
                <div>
                    {/* Title: Vicio Expert Mode */}
                    <h2 className='text-5xl font-bold uppercase'>
                        Vicio expert mode <br />
                        MOST ASKED QUESTIONS.
                    </h2>
                    <div className="flex gap-3 flex-wrap">
                        {questions.map((q) => (
                            <div
                                key={q.id}
                                className={`collapse rounded-full border-black border-2 my-3 w-[420px] 
                                ${selectedQuestion?.id === q.id ? 'bg-black text-white' : 'bg-white text-black'}`}
                                onClick={() => setSelectedQuestion(q)}
                            >
                                <div className="collapse-title text-lg font-medium">
                                    {`${q.id}. ${q.question}`}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Flying Answer Panel */}

            </div>

            {selectedQuestion && (
                <div>
                    <div
                        className="absolute  bottom-24 right-0 w-1/4 rounded-t-lg rounded-l-lg  mr-3 p-4 bg-black text-white transition-all duration-500 transform "
                        style={{ animation: "flyIn 0.5s forwards" }}
                    >
                        <p className="text-xs">{selectedQuestion.answer}</p>

                    </div>
                    <p className="absolute  bottom-14 right-0 w-1/4 rounded-t-lg rounded-l-lg  mr-3 p-4  text-black font-bold text-end transition-all duration-500 transform "
                        style={{ animation: "flyIn 0.5s forwards" }}>VICIO</p>
                </div>
            )}


            <style jsx>{`
                @keyframes flyIn {
                    from {
                        transform: translateX(100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </div>

        



    );
};

export default Page;
