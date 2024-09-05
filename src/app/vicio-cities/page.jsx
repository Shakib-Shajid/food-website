import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <h3 className='text-5xl font-bold'>Vicio CITIES FOR <br />
                the HOTTEST PEOPLE.</h3>

            <div className='flex gap-2'>
                <Image src="/map.png" width="300" height="300" alt="" />
                {/* barchelona */}
                <div className='grid grid-cols-4'>
                    {/* 1st */}
                    <div className="ml-2 w-[255px] m-4 border-l-2 border-dotted border-black p-0">
                        <div className="p-2 uppercase">
                            <h2 className="text-sm font-bold uppercase bg-black text-white w-24 text-center rounded-xl">barcelona</h2>
                            <h2 className="text-sm font-bold">via augusta</h2>
                            <p className='text-xs font-bold'>delevery | take away | <span className='text-red-600'>dine in</span></p>
                            <p className='text-xs'>via augusta 21 <br />08006 barcelona</p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="underline uppercase text-start text-xs font-bold">hdrarios</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-black text-white rounded-box w-44 text-[10px]">
                                    <li className='uppercase text-lg my-2'>horarios</li>
                                    <li>Lunes 12 : 00 a 0 : 00</li>
                                    <li>Martes 12 : 00 a 0 : 00</li>
                                    <li>Miércoles 12 : 00 a 0 : 00</li>
                                    <li>Jueves 12:00 a 0:30</li>
                                    <li>Viernes 12:00 a 1:00</li>
                                    <li>Sábado 12:00 a 1:00</li>
                                    <li>Domingo 12:00 a 0:30</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 2nd */}
                    <div className="ml-2 w-[255px] m-4 border-l-2 border-dotted border-black p-0">
                        <div className="p-2 uppercase">
                            <h2 className="text-sm font-bold">via augusta</h2>
                            <p className='text-xs font-bold'>delevery | take away | <span className='text-red-600'>dine in</span></p>
                            <p className='text-xs'>via augusta 21 <br />08006 barcelona</p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="underline uppercase text-start text-xs font-bold">hdrarios</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-black text-white rounded-box w-44 text-[10px]">
                                    <li className='uppercase text-lg my-2'>horarios</li>
                                    <li>Lunes 12 : 00 a 0 : 00</li>
                                    <li>Martes 12 : 00 a 0 : 00</li>
                                    <li>Miércoles 12 : 00 a 0 : 00</li>
                                    <li>Jueves 12:00 a 0:30</li>
                                    <li>Viernes 12:00 a 1:00</li>
                                    <li>Sábado 12:00 a 1:00</li>
                                    <li>Domingo 12:00 a 0:30</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 3rd */}
                    <div className="ml-2 w-[255px] m-4 border-l-2 border-dotted border-black p-0">
                        <div className="p-2 uppercase">
                            <h2 className="text-sm font-bold">via augusta</h2>
                            <p className='text-xs font-bold'>delevery | take away | <span className='text-red-600'>dine in</span></p>
                            <p className='text-xs'>via augusta 21 <br />08006 barcelona</p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="underline uppercase text-start text-xs font-bold">hdrarios</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-black text-white rounded-box w-44 text-[10px]">
                                    <li className='uppercase text-lg my-2'>horarios</li>
                                    <li>Lunes 12 : 00 a 0 : 00</li>
                                    <li>Martes 12 : 00 a 0 : 00</li>
                                    <li>Miércoles 12 : 00 a 0 : 00</li>
                                    <li>Jueves 12:00 a 0:30</li>
                                    <li>Viernes 12:00 a 1:00</li>
                                    <li>Sábado 12:00 a 1:00</li>
                                    <li>Domingo 12:00 a 0:30</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 4th */}
                    <div className="ml-2 w-[255px] m-4 border-l-2 border-dotted border-black p-0">
                        <div className="p-2 uppercase">
                            <h2 className="text-sm font-bold">via augusta</h2>
                            <p className='text-xs font-bold'>delevery | take away | <span className='text-red-600'>dine in</span></p>
                            <p className='text-xs'>via augusta 21 <br />08006 barcelona</p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="underline uppercase text-start text-xs font-bold">hdrarios</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-black text-white rounded-box w-44 text-[10px]">
                                    <li className='uppercase text-lg my-2'>horarios</li>
                                    <li>Lunes 12 : 00 a 0 : 00</li>
                                    <li>Martes 12 : 00 a 0 : 00</li>
                                    <li>Miércoles 12 : 00 a 0 : 00</li>
                                    <li>Jueves 12:00 a 0:30</li>
                                    <li>Viernes 12:00 a 1:00</li>
                                    <li>Sábado 12:00 a 1:00</li>
                                    <li>Domingo 12:00 a 0:30</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 5th */}
                    <div className="ml-2 w-[255px] m-4 border-l-2 border-dotted border-black p-0">
                        <div className="p-2 uppercase">
                            <h2 className="text-sm font-bold">via augusta</h2>
                            <p className='text-xs font-bold'>delevery | take away | <span className='text-red-600'>dine in</span></p>
                            <p className='text-xs'>via augusta 21 <br />08006 barcelona</p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="underline uppercase text-start text-xs font-bold">hdrarios</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-black text-white rounded-box w-44 text-[10px]">
                                    <li className='uppercase text-lg my-2'>horarios</li>
                                    <li>Lunes 12 : 00 a 0 : 00</li>
                                    <li>Martes 12 : 00 a 0 : 00</li>
                                    <li>Miércoles 12 : 00 a 0 : 00</li>
                                    <li>Jueves 12:00 a 0:30</li>
                                    <li>Viernes 12:00 a 1:00</li>
                                    <li>Sábado 12:00 a 1:00</li>
                                    <li>Domingo 12:00 a 0:30</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 6th */}
                    <div className="ml-2 w-[255px] m-4 border-l-2 border-dotted border-black p-0">
                        <div className="p-2 uppercase">
                            <h2 className="text-sm font-bold">via augusta</h2>
                            <p className='text-xs font-bold'>delevery | take away | <span className='text-red-600'>dine in</span></p>
                            <p className='text-xs'>via augusta 21 <br />08006 barcelona</p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="underline uppercase text-start text-xs font-bold">hdrarios</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-black text-white rounded-box w-44 text-[10px]">
                                    <li className='uppercase text-lg my-2'>horarios</li>
                                    <li>Lunes 12 : 00 a 0 : 00</li>
                                    <li>Martes 12 : 00 a 0 : 00</li>
                                    <li>Miércoles 12 : 00 a 0 : 00</li>
                                    <li>Jueves 12:00 a 0:30</li>
                                    <li>Viernes 12:00 a 1:00</li>
                                    <li>Sábado 12:00 a 1:00</li>
                                    <li>Domingo 12:00 a 0:30</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 7th */}
                    <div className="ml-2 w-[255px] m-4 border-l-2 border-dotted border-black p-0">
                        <div className="p-2 uppercase">
                            <h2 className="text-sm font-bold">via augusta</h2>
                            <p className='text-xs font-bold'>delevery | take away | <span className='text-red-600'>dine in</span></p>
                            <p className='text-xs'>via augusta 21 <br />08006 barcelona</p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="underline uppercase text-start text-xs font-bold">hdrarios</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-black text-white rounded-box w-44 text-[10px]">
                                    <li className='uppercase text-lg my-2'>horarios</li>
                                    <li>Lunes 12 : 00 a 0 : 00</li>
                                    <li>Martes 12 : 00 a 0 : 00</li>
                                    <li>Miércoles 12 : 00 a 0 : 00</li>
                                    <li>Jueves 12:00 a 0:30</li>
                                    <li>Viernes 12:00 a 1:00</li>
                                    <li>Sábado 12:00 a 1:00</li>
                                    <li>Domingo 12:00 a 0:30</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 8th */}
                    <div className="ml-2 w-[255px] m-4 border-l-2 border-dotted border-black p-0">
                        <div className="p-2 uppercase">
                            <h2 className="text-sm font-bold">via augusta</h2>
                            <p className='text-xs font-bold'>delevery | take away | <span className='text-red-600'>dine in</span></p>
                            <p className='text-xs'>via augusta 21 <br />08006 barcelona</p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="underline uppercase text-start text-xs font-bold">hdrarios</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-black text-white rounded-box w-44 text-[10px]">
                                    <li className='uppercase text-lg my-2'>horarios</li>
                                    <li>Lunes 12 : 00 a 0 : 00</li>
                                    <li>Martes 12 : 00 a 0 : 00</li>
                                    <li>Miércoles 12 : 00 a 0 : 00</li>
                                    <li>Jueves 12:00 a 0:30</li>
                                    <li>Viernes 12:00 a 1:00</li>
                                    <li>Sábado 12:00 a 1:00</li>
                                    <li>Domingo 12:00 a 0:30</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* barchelona */}
                <div className='grid grid-cols-4'>
                    {/* 1st */}
                    <div className="ml-2 w-[255px] m-4 border-l-2 border-dotted border-black p-0">
                        <div className="p-2 uppercase">
                            <h2 className="text-sm font-bold uppercase bg-black text-white w-24 text-center rounded-xl">barcelona</h2>
                            <h2 className="text-sm font-bold">via augusta</h2>
                            <p className='text-xs font-bold'>delevery | take away | <span className='text-red-600'>dine in</span></p>
                            <p className='text-xs'>via augusta 21 <br />08006 barcelona</p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="underline uppercase text-start text-xs font-bold">hdrarios</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-black text-white rounded-box w-44 text-[10px]">
                                    <li className='uppercase text-lg my-2'>horarios</li>
                                    <li>Lunes 12 : 00 a 0 : 00</li>
                                    <li>Martes 12 : 00 a 0 : 00</li>
                                    <li>Miércoles 12 : 00 a 0 : 00</li>
                                    <li>Jueves 12:00 a 0:30</li>
                                    <li>Viernes 12:00 a 1:00</li>
                                    <li>Sábado 12:00 a 1:00</li>
                                    <li>Domingo 12:00 a 0:30</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 2nd */}
                    <div className="ml-2 w-[255px] m-4 border-l-2 border-dotted border-black p-0">
                        <div className="p-2 uppercase">
                            <h2 className="text-sm font-bold">via augusta</h2>
                            <p className='text-xs font-bold'>delevery | take away | <span className='text-red-600'>dine in</span></p>
                            <p className='text-xs'>via augusta 21 <br />08006 barcelona</p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="underline uppercase text-start text-xs font-bold">hdrarios</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-black text-white rounded-box w-44 text-[10px]">
                                    <li className='uppercase text-lg my-2'>horarios</li>
                                    <li>Lunes 12 : 00 a 0 : 00</li>
                                    <li>Martes 12 : 00 a 0 : 00</li>
                                    <li>Miércoles 12 : 00 a 0 : 00</li>
                                    <li>Jueves 12:00 a 0:30</li>
                                    <li>Viernes 12:00 a 1:00</li>
                                    <li>Sábado 12:00 a 1:00</li>
                                    <li>Domingo 12:00 a 0:30</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 3rd */}
                    <div className="ml-2 w-[255px] m-4 border-l-2 border-dotted border-black p-0">
                        <div className="p-2 uppercase">
                            <h2 className="text-sm font-bold">via augusta</h2>
                            <p className='text-xs font-bold'>delevery | take away | <span className='text-red-600'>dine in</span></p>
                            <p className='text-xs'>via augusta 21 <br />08006 barcelona</p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="underline uppercase text-start text-xs font-bold">hdrarios</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-black text-white rounded-box w-44 text-[10px]">
                                    <li className='uppercase text-lg my-2'>horarios</li>
                                    <li>Lunes 12 : 00 a 0 : 00</li>
                                    <li>Martes 12 : 00 a 0 : 00</li>
                                    <li>Miércoles 12 : 00 a 0 : 00</li>
                                    <li>Jueves 12:00 a 0:30</li>
                                    <li>Viernes 12:00 a 1:00</li>
                                    <li>Sábado 12:00 a 1:00</li>
                                    <li>Domingo 12:00 a 0:30</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 4th */}
                    <div className="ml-2 w-[255px] m-4 border-l-2 border-dotted border-black p-0">
                        <div className="p-2 uppercase">
                            <h2 className="text-sm font-bold">via augusta</h2>
                            <p className='text-xs font-bold'>delevery | take away | <span className='text-red-600'>dine in</span></p>
                            <p className='text-xs'>via augusta 21 <br />08006 barcelona</p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="underline uppercase text-start text-xs font-bold">hdrarios</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-black text-white rounded-box w-44 text-[10px]">
                                    <li className='uppercase text-lg my-2'>horarios</li>
                                    <li>Lunes 12 : 00 a 0 : 00</li>
                                    <li>Martes 12 : 00 a 0 : 00</li>
                                    <li>Miércoles 12 : 00 a 0 : 00</li>
                                    <li>Jueves 12:00 a 0:30</li>
                                    <li>Viernes 12:00 a 1:00</li>
                                    <li>Sábado 12:00 a 1:00</li>
                                    <li>Domingo 12:00 a 0:30</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 5th */}
                    <div className="ml-2 w-[255px] m-4 border-l-2 border-dotted border-black p-0">
                        <div className="p-2 uppercase">
                            <h2 className="text-sm font-bold">via augusta</h2>
                            <p className='text-xs font-bold'>delevery | take away | <span className='text-red-600'>dine in</span></p>
                            <p className='text-xs'>via augusta 21 <br />08006 barcelona</p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="underline uppercase text-start text-xs font-bold">hdrarios</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-black text-white rounded-box w-44 text-[10px]">
                                    <li className='uppercase text-lg my-2'>horarios</li>
                                    <li>Lunes 12 : 00 a 0 : 00</li>
                                    <li>Martes 12 : 00 a 0 : 00</li>
                                    <li>Miércoles 12 : 00 a 0 : 00</li>
                                    <li>Jueves 12:00 a 0:30</li>
                                    <li>Viernes 12:00 a 1:00</li>
                                    <li>Sábado 12:00 a 1:00</li>
                                    <li>Domingo 12:00 a 0:30</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 6th */}
                    <div className="ml-2 w-[255px] m-4 border-l-2 border-dotted border-black p-0">
                        <div className="p-2 uppercase">
                            <h2 className="text-sm font-bold">via augusta</h2>
                            <p className='text-xs font-bold'>delevery | take away | <span className='text-red-600'>dine in</span></p>
                            <p className='text-xs'>via augusta 21 <br />08006 barcelona</p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="underline uppercase text-start text-xs font-bold">hdrarios</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-black text-white rounded-box w-44 text-[10px]">
                                    <li className='uppercase text-lg my-2'>horarios</li>
                                    <li>Lunes 12 : 00 a 0 : 00</li>
                                    <li>Martes 12 : 00 a 0 : 00</li>
                                    <li>Miércoles 12 : 00 a 0 : 00</li>
                                    <li>Jueves 12:00 a 0:30</li>
                                    <li>Viernes 12:00 a 1:00</li>
                                    <li>Sábado 12:00 a 1:00</li>
                                    <li>Domingo 12:00 a 0:30</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 7th */}
                    <div className="ml-2 w-[255px] m-4 border-l-2 border-dotted border-black p-0">
                        <div className="p-2 uppercase">
                            <h2 className="text-sm font-bold">via augusta</h2>
                            <p className='text-xs font-bold'>delevery | take away | <span className='text-red-600'>dine in</span></p>
                            <p className='text-xs'>via augusta 21 <br />08006 barcelona</p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="underline uppercase text-start text-xs font-bold">hdrarios</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-black text-white rounded-box w-44 text-[10px]">
                                    <li className='uppercase text-lg my-2'>horarios</li>
                                    <li>Lunes 12 : 00 a 0 : 00</li>
                                    <li>Martes 12 : 00 a 0 : 00</li>
                                    <li>Miércoles 12 : 00 a 0 : 00</li>
                                    <li>Jueves 12:00 a 0:30</li>
                                    <li>Viernes 12:00 a 1:00</li>
                                    <li>Sábado 12:00 a 1:00</li>
                                    <li>Domingo 12:00 a 0:30</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 8th */}
                    <div className="ml-2 w-[255px] m-4 border-l-2 border-dotted border-black p-0">
                        <div className="p-2 uppercase">
                            <h2 className="text-sm font-bold">via augusta</h2>
                            <p className='text-xs font-bold'>delevery | take away | <span className='text-red-600'>dine in</span></p>
                            <p className='text-xs'>via augusta 21 <br />08006 barcelona</p>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="underline uppercase text-start text-xs font-bold">hdrarios</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-black text-white rounded-box w-44 text-[10px]">
                                    <li className='uppercase text-lg my-2'>horarios</li>
                                    <li>Lunes 12 : 00 a 0 : 00</li>
                                    <li>Martes 12 : 00 a 0 : 00</li>
                                    <li>Miércoles 12 : 00 a 0 : 00</li>
                                    <li>Jueves 12:00 a 0:30</li>
                                    <li>Viernes 12:00 a 1:00</li>
                                    <li>Sábado 12:00 a 1:00</li>
                                    <li>Domingo 12:00 a 0:30</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;