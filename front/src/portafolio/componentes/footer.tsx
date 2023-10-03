import { useEffect, useState } from "react";
import '../css/footer.css';

export const FooterComp: React.FC = () => {
    const [year, setYear] = useState<number>(0);

    useEffect(() => {
       let year = new Date().getFullYear();
    // let year = 2024;
       setYear(year);
      }, []);


    useEffect(() => {

        return () => {

        };
    }, []);

    return (<>
        <footer className="footer">

            <div className="social-links">
                <button  className="">a</button>
                <button  className="">b</button>
                <button  className="">c</button>
            </div>
           {year === 2023 ?(<p className="copyright">Copyright {year}</p>):(<p className="copyright">Copyright 2023 to {year}</p>) }
            <p className="design">Design by bryan</p>
        </footer>


    </>);
}

export default FooterComp;


