import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import usePagination from "../../pagination/usePagination";
import ModalDelete from "../../../../modal/ModalDelete";
import SearchForm from "../../../../searchForm/SearchForm";
import PaginationItem from "../../pagination/PaginationItem";
import { deleteQuiz } from '../../../../../services/quiz-services'
import Spinner from "../../../../../components/spinner/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen, faLock } from "@fortawesome/free-solid-svg-icons";
const QuizListComponent = ({
  data,
  itemsPerPage,
  startFrom,
  searchByData,
  tableHead,
}) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.quiz.isQuizLoading);
  const [modalActive, setModalActive] = useState(false);
  const [quizInfo, setQuizInfo] = useState();

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

  const deleteHandler = (id) => {
    dispatch(deleteQuiz(id));
  };

  const showDeleteModalWindow = (quiz) => {
    setModalActive(true);
    setQuizInfo(quiz);
  };

  const messege = {
    title: "Delete Quiz",
  }

  const renderHead = (item, index) => <th key={index}>{item}</th>;
  return (
    <>
      {modalActive ? (
        <ModalDelete
          object={quizInfo}
          deleteHandler={deleteHandler}
          setModalActive={setModalActive}
          messege={messege}
        />
      ) : null}
      <br />
      <SearchForm
        data={data}
        searchByData={searchByData}
        setFilteredData={setFilteredData}
        setSearching={setSearching}
      />

      {loading ? (
        <Spinner />
      ) : (
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
                    {/* <td>
                      <img src={item.image} alt="" className="custom-img"></img>
                    </td> */}
                    <td>{item.name}</td>
                    <td className="mw-445">{item.duration}</td>
                    <td>{item.createBy?.firstName}</td>
                    <td>
                      {item.status ? (
                        <FontAwesomeIcon icon={faLockOpen} />
                      ) : (
                        <FontAwesomeIcon icon={faLock} />
                      )}
                    </td>
                    <td>
                      {/* <Link to={'quizzes/' + item.id + '/detail'}>
                        <button className="btn-a btn btn-info mr-10">Detail</button>
                      </Link> */}
                      <Link to={'quizzes/' + item.id + '/edit'}>
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

export default QuizListComponent;
