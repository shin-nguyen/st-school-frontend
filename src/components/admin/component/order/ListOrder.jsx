import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../../../services/order-services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListOrderComponent from "./ListOrderComponent";
import {
  faFileExcel,
  faFilePdf,
  faFileCsv,
} from "@fortawesome/free-solid-svg-icons";
import { API_BASE_URL } from "../../../../constants/SystemConstants";
import { Route } from "react-router-dom";

const ListOrder = () => {
  const dispatch = useDispatch();
  const listOrder = useSelector((state) => state.order.listOrder);

  useEffect(() => {
    dispatch(getAllOrder());
  }, [dispatch]);

  const itemsPerPage = 10;
  const searchByData = [
    { label: "Course", value: "course.name" },
    { label: "User", value: "user.lastName" },
    { label: "Created Time", value: "createdTime" },
    { label: "Total", value: "total" },
  ];

  const courseTableHead = ["", "Course", "User", "Created Time", "Total"];

  // const renderHead = (item, index) => <th key={index}>{item}</th>

  // const renderBody = (item, index) => (
  //     <tr key={index}>
  //         <td>{index + 1}</td>
  //         <td>{item.course.name} {item.lastName}</td>
  //         <td>{item.user.firstName} {item.user.lastName}</td>
  //         <td>{item.createdTime}</td>
  //         <td>${item.total}</td>
  //     </tr>
  // )

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div className="card-table">
        <h3 className="title">Order List</h3>
        <div className="card-table-header text-right">
          <a
            className="btn btn-success mr-20"
            href={API_BASE_URL + "/order/export/excel"}
          >
            <FontAwesomeIcon icon={faFileExcel} />
            &nbsp;Export to xls
          </a>
          <a
            className="btn btn-success mr-20"
            href={API_BASE_URL + "/order/export/csv"}
          >
            <FontAwesomeIcon icon={faFileCsv} />
            &nbsp;Export to csv
          </a>
          <a
            className="btn btn-success mr-20"
            href={API_BASE_URL + "/order/export/pdf"}
          >
            <FontAwesomeIcon icon={faFilePdf} />
            &nbsp;Export to pdf
          </a>
        </div>
        <div className="card-body">
          <Route
            exact
            component={() => (
              <ListOrderComponent
                data={listOrder}
                itemsPerPage={itemsPerPage}
                searchByData={searchByData}
                tableHead={courseTableHead}
              />
            )}
          />
          {/* data, itemsPerPage,startFrom,searchByData,tableHead */}
        </div>
      </div>
    </div>
  );
};

export default ListOrder;
