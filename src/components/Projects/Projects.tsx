import "./Projects.css"

function Projects(){
    return(
        <> 
            <div className="titulo" data-aos="zoom-in-down">
                Proyectos
            </div>
            <div className="containerProjects" data-aos="zoom-in-down">
                <div className="cards">
                    <div className="infoCard">
                        <div className="imgCard">
                            <div className="imgRocket"></div>
                        </div>
                        <div className="txtCard">
                            <div className="titleProject">
                               <a href="https://rocketparts-frontt-ohfz.vercel.app">
                                <p>RocketParts</p>
                               </a>
                            </div>
                            <div className="descProject">
                                <p>
                                    RocketParts es una página con cáncer que 
                                    hicimos de a 3 como unos pelotudos porque 
                                    se nos fue el resto de forros                                   
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="infoCard">
                        <div className="imgCard">
                            <div className="imgOoskar"></div>
                        </div>
                        <div className="txtCard">
                            <div className="titleProject">
                                <a href="ooskar.com">
                                 <p>ooskar.com</p>
                                </a>
                            </div>
                            <div className="descProject">
                                <p>
                                    la página de los viejos garchando                                  
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects