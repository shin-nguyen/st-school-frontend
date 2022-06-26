import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import BlogListComponent from "./BlogListComponent";
import {
  addBlogByExcel,
  fetchBlogsByQuery,
} from "../../../../services/blog-service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExcel,
  faFilePdf,
  faFileCsv,
} from "@fortawesome/free-solid-svg-icons";
import { API_BASE_URL } from "../../../../constants/SystemConstants";
const BlogList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const blogs = useSelector((state) => state.blog.blogs);
  const [file, setFile] = useState(null);

  useEffect(() => {
    dispatch(fetchBlogsByQuery(""));
  }, []);

  const itemsPerPage = 5;
  const searchByData = [
    { label: "Title", value: "title" },
    { label: "Summary", value: "summary" },
  ];

  const tableHead = ["", "Title", "Status", ""];

  const handelBack = () => {
    history.push("/admin/blogs");
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    let params = new FormData();
    params.append("file", file);
    dispatch(addBlogByExcel(params, history));
    handelBack();
  };
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div className="card-table">
        <div className="card-table-header">
          <h3 className="title">Blog List</h3>

          <a
            className="btn btn-success mr-20"
            href={API_BASE_URL + "/blogs/export/excel"}
          >
            <FontAwesomeIcon icon={faFileExcel} />
            &nbsp;Export to xls
          </a>
          <a
            className="btn btn-success mr-20"
            href={API_BASE_URL + "/blogs/export/csv"}
          >
            <FontAwesomeIcon icon={faFileCsv} />
            &nbsp;Export to csv
          </a>
          <a
            className="btn btn-success mr-20"
            href={API_BASE_URL + "/blogs/export/pdf"}
          >
            <FontAwesomeIcon icon={faFilePdf} />
            &nbsp;Export to pdf
          </a>
          {/* btn btn-primary */}
          <div className=" float-right">
            <form onSubmit={onFormSubmit}>
              <input
                type="file"
                name="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <button type="submit" className="btn btn-dark">
                <FontAwesomeIcon icon={faFileExcel} />
                &nbsp;Import Excel
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="card-body">
        <Route
          exact
          component={() => (
            <BlogListComponent
              data={blogs}
              itemsPerPage={itemsPerPage}
              searchByData={searchByData}
              tableHead={tableHead}
            />
          )}
        />
      </div>
    </div>
  );
};

export default BlogList;
