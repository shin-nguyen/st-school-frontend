import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import usePagination from "../../pagination/usePagination";
import ModalCourse from "../../../../modal/ModalCourse";
import SearchForm from "../../../../searchForm/SearchForm";
import PaginationItem from "../../pagination/PaginationItem";
import { deleteCourse } from '../../../../../services/course-services'

const CourseListComponent = ({
  data,
  itemsPerPage,
  startFrom,
  searchByData,
  tableHead,
}) => {
  const dispatch = useDispatch();
  const loading = false;
  const [modalActive, setModalActive] = useState(false);
  const [courseInfo, setCourseInfo] = useState();

  const {
    slicedData,
    pagination,
    prevPage,
    nextPage,
    changePage,
    setFilteredData,
    setSearching,
  } = usePagination({ itemsPerPage, data, startFrom });

  useEffect(() => {
    setModalActive(false);
  }, [data]);

  const deleteCourseHandler = (id) => {
    dispatch(deleteCourse(id));
  };

  const showDeleteModalWindow = (course) => {
    setModalActive(true);
    setCourseInfo(course);
  };

  const renderHead = (item, index) => <th key={index}>{item}</th>;
  return (
    <>
      {modalActive ? (
        <ModalCourse
          course={courseInfo}
          deleteBlogHandler={deleteCourseHandler()}
          setModalActive={setModalActive}
        />
      ) : null}
      <br />
      <SearchForm
        data={data}
        searchByData={searchByData}
        setFilteredData={setFilteredData}
        setSearching={setSearching}
      />

      {(
        <>
          <table className="table table-hover">
            <thead>
              <tr>{tableHead.map((item, index) => renderHead(item, index))}</tr>
            </thead >
            <tbody>
              {slicedData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={item.image} alt="" className="custom-img"></img>
                    </td>
                    <td>{item.name}</td>
                    <td className="mw-445">{item.description}</td>
                    <td>${item.price}</td>
                    <td>
                      <Link to={'course/' + item.id + '/detail'}>
                        <button className="btn-a btn btn-info mr-10">Detail</button>
                      </Link>
                      <Link to={'course/' + item.id + '/edit'}>
                        <button className="btn-a btn btn-success mr-10">Edit</button>
                      </Link>
                      <button className="btn btn-danger mr-10" onClick={() => showDeleteModalWindow(item)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table >
          <PaginationItem
            pagination={pagination}
            prevPage={prevPage}
            changePage={changePage}
            nextPage={nextPage}
          />
        </>
      )}
    </>
  );
};

export default CourseListComponent;
