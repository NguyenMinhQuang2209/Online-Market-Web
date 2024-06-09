import React, { useCallback, useState } from "react";
import "./customStyle.scss";

const Paidcombo = () => {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "flex-end",
        }}
      >
        <button
          onClick={() => {
            setShowAdd(true);
          }}
          className="btn btn-primary"
        >
          Thêm mới
        </button>
      </div>
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
      {showAdd && <AddNewPaidCombo setShow={setShowAdd} />}
    </div>
  );
};
const AddNewPaidCombo = ({ setShow }) => {
  return (
    <div className="create_container">
      <div className="create_wrap">
        <div
          onClick={() => {
            setShow(false);
          }}
          className="create_close_wrap"
        >
          <i className="fa-solid fa-x"></i>
        </div>
        <div>
          <div
            style={{ marginBottom: "20px", marginTop: "30px" }}
            className="create_input_container"
          >
            <input placeholder="Tên" className="create_input" name="text" />
          </div>
          <div className="create_input_container">
            <input
              placeholder="Giá tiền"
              className="create_input"
              name="text"
            />
          </div>
          <div style={{ marginTop: "20px" }} className="create_input_container">
            <input
              placeholder="Số tháng"
              className="create_input"
              name="text"
            />
          </div>
          <div style={{ marginTop: "20px" }} className="create_input_container">
            <textarea
              placeholder="Mô tả"
              className="create_input"
              name="text"
              style={{resize:"vertical"}}
            />
          </div>
          <div className="btn_create_container">
            <button style={{ margin: "0 5px" }} class="btn btn-primary">
              Tạo mới
            </button>
            <button
              onClick={() => {
                setShow(false);
              }}
              style={{ margin: "0 5px" }}
              class="btn btn-secondary"
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Paidcombo;
