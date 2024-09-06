import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <h3 className='text-5xl font-bold'>VICIO CITIES FOR <br />
                the HOTTEST PEOPLE.</h3>

            <div className='flex gap-2 relative'>
                <Image src="/map.png" width="500" height="400" alt="" />
                <div className='absolute w-32 top-16 left-[164px]'>
                    {/* 1st */}
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-20 left-0' />
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-24 left-1' />
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-20 left-2' />
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-24 left-3' />
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-20 left-4' />
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-24 left-5' />
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-20 left-7' />
                    {/* 2nd */}
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-7 left-28' />

                    {/* 3rd */}
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-5 left-[172px]' />
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-7 left-44' />
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-6 left-[182px]' />
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-3 left-48' />
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-10 left-48' />
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-6 left-48' />
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-8 left-[188px]' />

                    {/* 4th  */}
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-56 -left-12' />
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-56 -left-0' />

                    {/* 5th  */}
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-28 left-32' />
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-40 left-32' />

                    {/* 6th  */}
                    <Image src="/fire.gif" width="20" height="20" alt="" className='absolute top-[118px] left-[228px]' />
                </div>

                {/* <div className='grid grid-flow-col-dense'> */}

                {/* barchelona */}
                <div className='grid grid-rows-2'>

                    <div className='flex gap-3'>

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
                                <h2 className="text-sm font-bold uppercase bg-black text-white w-16 text-center rounded-xl">madrid</h2>
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
                        {/* 6th */}
                        <div className="ml-2 w-[255px] m-4 border-l-2 border-dotted border-black p-0">
                            <div className="p-2 uppercase">
                                <h2 className="text-xs font-bold uppercase bg-black text-white w-36 p-1 rounded-xl">palma de mallorca</h2>
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
                                <h2 className="text-sm font-bold uppercase bg-black text-white w-24 text-center rounded-xl">sevilla</h2>
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
                                <h2 className="text-sm font-bold uppercase bg-black text-white w-24 text-center rounded-xl">malaga</h2>
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

                    <div className='flex gap-3'>
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
                {/* </div> */}

            </div>
        </div>
    );
};

export default page;