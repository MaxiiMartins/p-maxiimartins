
import React from "react";


const Prueba = () => {
    return (
        <div className="w-screen h-screen overflow-hidden py-8 px-12"
        style={{background:"linear-gradient(242.06deg, rgba(232, 74, 74, 0.33) 0%, rgba(232, 74, 74, 0) 34.83%)"}}
        >
            <div className="flex flex-row w-full justify-around text-lg uppercase text-white/70">
                <div className="w-full flex flex-row text-left gap-3">
                    <p>Nivel <b className="text-[#7DFF68] text-2xl text-center"> 23 </b></p>
                    <p>Pais <b className="text-[#3d8ed8] text-2xl text-center"> ARG </b></p>
                </div>
                <div className=" flex flex-row w-full text-right gap-3 justify-end">
                    <a href="https://www.github.COM/MaxiiMartins/" target="_blank" rel="noopener noreferrer" className="hover:text-white/95">Github</a>
                    <a href="https://www.linkedin.com/in/maxiimartins/" target="_blank" rel="noreferrer" className="hover:text-[#00a0dc]/95">LinkedIn</a>
                    <p>Año: <b className="text-white">2023</b></p>
                    <p>hora local: <b className="text-white">15:42</b></p>
                </div>
            </div>
            <div className="w-full h-full gap-2 flex flex-row" >
                <div className="h-full flex flex-col w-1/3" >
                    <div className="min-h-[150px]" >Imagen</div>
                    <div>
                        <span>sub</span>
                        <p>
                            title
                        </p>
                    </div>
                    <div>
                        <span>sub</span>
                        <p>
                            title
                        </p>
                    </div>
                    <div>
                        <span>sub</span>
                        <p>
                            title
                        </p>
                    </div>
                </div>
                <div>
                    Contenido
                </div>
            </div>
            <div>Nav</div>
        </div>
    );
};

export default Prueba;
