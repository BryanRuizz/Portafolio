import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/footer.css';
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { TbBrandGmail } from "react-icons/tb";
// import '@mui/icons-material/LinkedIn';

const FooterComp: React.FC<{}> = () => {
    const [year, setYear] = useState<number>(0);

    useEffect(() => {
        let year = new Date().getFullYear();
        // let year = 2024;
        setYear(year);
    }, []);


    function tomygmail(): void {
        const socialLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(".social-links a");

        for (const socialLink of socialLinks) {
            socialLink.addEventListener("click", (e: MouseEvent) => {
                e.preventDefault(); // Evita que el enlace redirija por defecto

                // URL de Gmail con el destinatario prellenado (reemplaza 'tu_correo@gmail.com' con tu dirección de correo)
                const gmailUrl = `mailto:bryanruiz2468@gmail.com?subject=Asunto%20del%20correo%20electrónico&body=Este%20es%20un%20mensaje%20predeterminado`;

                // Abre Gmail en una nueva pestaña
                window.open(gmailUrl, "_blank");
            });
        }
    }

    //   tomygmail();




    return (<>
        <footer className="footer">

            <div className="social-links" >
                {/* <div className="container"> */}
                    {/* <div className="row"> */}
                        {/* <div className="col-sm-4"> */}
                        <a href="#" className="" title="Gmail" onClick={() => tomygmail()}><TbBrandGmail /></a>
                        {/* </div> */}
                        {/* <div className="col-sm-4"> */}
                        <a href="https://www.linkedin.com/in/bryan-ruiz-b992b71b9/" className="" title="LinkedinIn"><FaLinkedinIn /></a>
                        {/* </div> */}
                        {/* <div className="col-sm-4"> */}
                        <a href="https://github.com/BryanRuizz" className="" title="Github">
                            <BsGithub />
                        </a>
                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
            </div>
            {year === 2023 ? (<p className="copyright">Copyright {year}</p>) : (<p className="copyright">Copyright 2023 to {year}</p>)}
            {/* <p className="copyright">Design by bryan</p> */}

        </footer>


    </>);
}

export default FooterComp;