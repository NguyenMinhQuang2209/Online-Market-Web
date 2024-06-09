import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./customStyle.scss";
const Categories = () => {
  const [addNewShow, setAddNewShow] = useState(false);
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
            setAddNewShow(true);
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
                    <th style={{ width: "20%" }}>Icon</th>
                    <th style={{ width: "30%" }}>Tên</th>
                    <th style={{ width: "20%" }}>Status</th>
                    <th style={{ width: "20%" }}>&nbsp;</th>
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
      {addNewShow && <AddNewCategory setShow={setAddNewShow} />}
    </div>
  );
};

const AddNewCategory = ({ setShow }) => {
  const [imageSrc, setImageSrc] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file) {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        img.src = e.target.result;
      };

      img.onload = () => {
        setImageSrc(img.src);
      };

      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxFiles: 1,
  });
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
          <div {...getRootProps()} className="dropzone_container">
            <input {...getInputProps()} />
            {imageSrc ? (
              <img src={imageSrc} alt="Uploaded" className="dropzone_image" />
            ) : (
              <p>Thêm ảnh vào đây</p>
            )}
          </div>
          <div className="create_input_container">
            <input
              placeholder="Thể loại mới"
              className="create_input"
              name="text"
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

export default Categories;
