import { useEffect, useState } from "react";
// import '../css/footer.css';
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { TbBrandGmail } from "react-icons/tb";
// import '@mui/icons-material/LinkedIn';

const Footerdos: React.FC<{}> = () => {
    // const [year, setYear] = useState<number>(0);

    // useEffect(() => {
    //     let year = new Date().getFullYear();
    //     // let year = 2024;
    //     setYear(year);
    // }, []);


    // function tomygmail(): void {
    //     const socialLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(".social-links a");
      
    //     for (const socialLink of socialLinks) {
    //       socialLink.addEventListener("click", (e: MouseEvent) => {
    //         e.preventDefault(); // Evita que el enlace redirija por defecto
      
    //         // URL de Gmail con el destinatario prellenado (reemplaza 'tu_correo@gmail.com' con tu dirección de correo)
    //         const gmailUrl = `mailto:bryanruiz2468@gmail.com?subject=Asunto%20del%20correo%20electrónico&body=Este%20es%20un%20mensaje%20predeterminado`;
      
    //         // Abre Gmail en una nueva pestaña
    //         window.open(gmailUrl, "_blank");
    //       });
    //     }
    // }

    //   tomygmail();




return (
    <div className="container">
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bootom pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted"></a>insta</li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted"></a>face</li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted"></a>wha</li>
            </ul>
            <p className="text-center text-muted">&copy; 2023 samanet</p>
        </footer>
    </div>
);
}

export default Footerdos;