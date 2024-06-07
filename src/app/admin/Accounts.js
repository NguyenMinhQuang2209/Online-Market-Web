import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../component/pagination/Pagination";
import AccountCard from "../component/card/AccountCard";
const Accounts = () => {
  const [accounts, setAccounts] = useState({});

  const [roleOptions, setRoleOptions] = useState([]);

  const { search } = useLocation();
  const getQueryParam = (name) => {
    const searchParams = new URLSearchParams(search);
    return searchParams.get(name) || (name == "page" ? "1" : "");
  };

  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (getQueryParam("search")) {
      handleGetAllAccounts(
        `page=${getQueryParam("page")}&search=${getQueryParam("search")}`
      );
    } else {
      handleGetAllAccounts(`page=${getQueryParam("page")}`);
    }
  }, [reload, search]);

  useEffect(() => {
    handleGetRole();
  }, []);

  const handleGetAllAccounts = async (query) => {
    // try {
    //   const token = localStorage.getItem("token")
    //   const data = await axiosInstance.get(`/admin/accounts?${query}`, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    //   setAccounts(data?.data);
    // } catch (err) {
    //   toast.error(err?.message);
    // }
  };

  const handleGetRole = async () => {
    // try {
    //   const token = localStorage.getItem("token");
    //   const data = await axiosInstance.get("/admin/roles", {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    //   let tempArr = [];
    //   data.data?.roles?.forEach((item) => {
    //     tempArr = [
    //       ...tempArr,
    //       {
    //         value: item?._id,
    //         label: item?.name,
    //       },
    //     ];
    //   });
    //   setRoleOptions([...tempArr]);
    // } catch (err) {
    //   toast.error(err?.message);
    // }
  };

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
                    <th>ID</th>
                    <th>Thông tin</th>
                    <th>Vai trò</th>
                    <th>Đến ngày</th>
                    <th>Status</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <AccountCard
                    setReload={setReload}
                    roleOptions={roleOptions}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {accounts?.accounts && <Pagination count={accounts?.total} />}
    </div>
  );
};

export default Accounts;
