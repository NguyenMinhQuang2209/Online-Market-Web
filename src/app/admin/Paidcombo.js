import React from "react";
import { Link } from "react-router-dom";

const Paidcombo = () => {
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
                    <th style={{ width: "10%" }}>ID</th>
                    <th style={{ width: "25%" }}>Tên gói</th>
                    <th style={{ width: "25%" }}>Giá</th>
                    <th style={{ width: "20%" }}>Tình trạng</th>
                    <th style={{ width: "20%" }}>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="alert" role="alert">
                    <td className="border-bottom-0-custom">1</td>
                    <td className="border-bottom-0-custom">Gói tháng</td>
                    <td className="border-bottom-0-custom">20.000 VND</td>
                    <td className="status border-bottom-0-custom">
                      <span className={"active"}>Hoạt động</span>
                    </td>
                    <td className="border-bottom-0-custom">
                      <button
                        style={{ height: "30px", fontSize: "12px" }}
                        type="button"
                        className="btn btn-primary"
                      >
                        Sửa
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

export default Paidcombo;
