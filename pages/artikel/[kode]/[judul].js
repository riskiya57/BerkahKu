import { useRouter } from "next/router";
import MainLayout from "../../../components/main-layout";
import Artikelall from "./artikelall";


const DetailPortofolio = () => {
    const router = useRouter();
    const { judul } = router.query;

    return (
        <MainLayout>
            <br/>
            <br/>
            <br/>
            <br/>
            <center>
            <h1 className="pt-3">Portofolio</h1>
            <h4 className="display-4">{judul}</h4>
            {/* <p className="lead">Kode portofolio : {kode}</p> */}
            </center>
            <Artikelall></Artikelall>
            
        </MainLayout>
    );
};

export default DetailPortofolio;

