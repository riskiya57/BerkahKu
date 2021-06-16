const List = props =>(
    <div className="icon-box">
    <div className="icon"><i className="bi bi-card-checklist"></i></div>
    <h4 className="title"><a href="">{props.nama}</a></h4>
    <p className="description">
      <ul>
        <li><i className="ri-check-double-line"></i> Alamat : {props.address}</li>
        <li><i className="ri-check-double-line"></i> Email : {props.email}</li>
        <li><i className="ri-check-double-line"></i> Jumlah : {props.jumlah}</li>
        <li><i className="ri-check-double-line"></i> Bergabung sejak : {props.bergabung}</li>
      </ul>
    </p>
  </div>
)
export default List;