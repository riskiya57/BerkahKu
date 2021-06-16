import { useRouter } from "next/router";
import MainLayout from "../../../components/main-layout";
import Donaturall from "./donaturall";

const DetailDonatur = () => {
    const router = useRouter();
    const { nama } = router.query;

    return (
        <MainLayout>
            <br/>
            <br/>
            <br/>
            <br/>
            <center>
            <h1 className="pt-3">Donatur</h1>
            <h4 className="display-4">{nama}</h4>
            {/* <p className="lead">Kode portofolio : {kode}</p> */}
            </center>
            <Donaturall></Donaturall>  
        </MainLayout>
    );
};

export default DetailDonatur;

