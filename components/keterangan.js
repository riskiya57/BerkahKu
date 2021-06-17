import Link from "next/link";
const Keterangan = (props) => (
    <div className="col-md-6 d-flex align-items-stretch mt-4">
    <div className="card">
        <img src={props.gambar} className="card-img" alt="" />
        <div className="card-body">
            <h5 className="card-title"><a href="">{props.judul}</a></h5>
            <p className="card-text"><ul>
                <li><i className="ri-check-double-line"></i> Nama Penerima : {props.namapnrm}</li>
                <li><i className="ri-check-double-line"></i> Alamat : {props.alamat}</li>
                <li><i className="ri-check-double-line"></i> Tanggal Kegiatan : {props.tanggal}</li>
                <li><i className="ri-check-double-line"></i> Keterangan : {props.keterangan}</li>
            </ul>

            </p>
        </div>
    </div>
    </div>
);
export default Keterangan;