import React, { useCallback, useRef, useState } from "react";
import "./customStyle.scss";
import axios from "axios";
import CategoryService from "../service/CategoryService";
import { toast } from "react-toastify";

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
  const [err, setErr] = useState({
    planName: "",
    description: "",
    price: "",
    duration: "",
  });

  const planNameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const durationRef = useRef();

  const handleCreateNewRegistration = async () => {
    try {
      const registration = {
        planName: planNameRef.current.value,
        description: descriptionRef.current.value,
        price: priceRef.current.value,
        duration: durationRef.current.value,
      };
      const registrationFeildName = {
        planName: "Tên",
        price: "Giá",
        duration: "Số ngày",
      };
      const excludesFields = ["description"];
      const isNumberFields = ["price", "duration"];
      const isNotNegativeNumberFields = ["price", "duration"];
      let isErr = false;
      let newError = {};
      for (const [key, value] of Object.entries(registration)) {
        if (!excludesFields.includes(key)) {
          if (!registration[key]) {
            isErr = true;
            newError[key] =
              registrationFeildName[key] + " không được bỏ trống!";
          }
        }

        if (isNumberFields.includes(key)) {
          if (!newError[key]) {
            if (isNaN(value)) {
              newError[key] = registrationFeildName[key] + " phải là 1 con số!";
            }
          }
        }

        if (isNotNegativeNumberFields.includes(key)) {
          if (!newError[key]) {
            if (value < 0) {
              newError[key] =
                registrationFeildName[key] + " phải lớn hơn hoặc bằng 0!";
            }
          }
        }
      }
      setErr(newError);

      if (!isErr) {
        const data = await CategoryService.create({
          planName: registration.planName,
          planDescription: registration.description,
          planPrice: registration.price * 1,
          planDuration: registration.duration * 1, 
        });
        console.log(data?.data);
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.Error);
    }
  };

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
        <div style={{ marginBottom: "20px", marginTop: "30px" }}>
          {err?.planName && (
            <div className="create_input_container">
              <i
                style={{
                  color: "red",
                  marginBottom: "10px",
                  marginTop: "-10px",
                }}
              >
                {err?.planName}
              </i>
            </div>
          )}
          <div className="create_input_container">
            <input
              ref={planNameRef}
              placeholder="Tên *"
              className="create_input"
              name="text"
            />
          </div>
          {err?.price && (
            <div className="create_input_container">
              <i
                style={{
                  color: "red",
                  marginBottom: "-10px",
                  marginTop: "10px",
                }}
              >
                {err?.price}
              </i>
            </div>
          )}
          <div style={{ marginTop: "20px" }} className="create_input_container">
            <input
              ref={priceRef}
              placeholder="Giá tiền *"
              className="create_input"
              type="number"
              min={0}
            />
          </div>
          {err?.duration && (
            <div className="create_input_container">
              <i
                style={{
                  color: "red",
                  marginBottom: "-10px",
                  marginTop: "10px",
                }}
              >
                {err?.duration}
              </i>
            </div>
          )}
          <div style={{ marginTop: "20px" }} className="create_input_container">
            <input
              ref={durationRef}
              placeholder="Số ngày *"
              className="create_input"
              type="number"
              min={0}
            />
          </div>
          <div style={{ marginTop: "20px" }} className="create_input_container">
            <textarea
              ref={descriptionRef}
              placeholder="Mô tả *"
              className="create_input"
              name="text"
              style={{ resize: "vertical" }}
            />
          </div>
          <div className="btn_create_container">
            <button
              onClick={handleCreateNewRegistration}
              style={{ margin: "0 5px" }}
              className="btn btn-primary"
            >
              Tạo mới
            </button>
            <button
              onClick={() => {
                setShow(false);
              }}
              style={{ margin: "0 5px" }}
              className="btn btn-secondary"
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
