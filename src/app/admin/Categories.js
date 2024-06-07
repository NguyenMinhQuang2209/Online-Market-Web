import React from "react";

const Categories = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      ></div>
      <section style={{ marginTop: "15px" }} className="ftco-section">
        <div className="row">
          <div className="col-md-12">
            <div className="table-wrap">
              <table className="table table-responsive-xl">
                <thead>
                  <tr>
                    <th style={{width:"10%"}}>ID</th>
                    <th style={{width:"20%"}}>Icon</th>
                    <th style={{width:"30%"}}>Tên</th>
                    <th style={{width:"20%"}}>Status</th>
                    <th style={{width:"20%"}}>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="alert" role="alert">
                    <td className="border-bottom-0-custom">1</td>
                    <td className="d-flex align-items-center border-bottom-0-custom">
                      <div className="img">
                        <img
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                          src="https://res.cloudinary.com/sttruyen/image/upload/v1716255380/m4fomykpo7ycgccepee9.jpg"
                        />
                      </div>
                    </td>
                    <td className="border-bottom-0-custom">Thịt</td>
                    <td className="status border-bottom-0-custom">
                      <span className={"active"}>Hoạt động</span>
                    </td>
                    <td className="border-bottom-0-custom">
                      <button
                        style={{ height: "30px", fontSize: "12px" }}
                        type="button"
                        className="btn btn-danger"
                      >
                        Riêng tư
                      </button>
                      <button
                        style={{
                          marginLeft: "5px",
                          height: "30px",
                          fontSize: "12px",
                        }}
                        type="button"
                        className="btn btn-secondary"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* {accounts?.accounts && <Pagination count={accounts?.total} />} */}
    </div>
  );
};

export default Categories;
