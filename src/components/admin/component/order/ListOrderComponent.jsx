import usePagination from "../pagination/usePagination";
import SearchForm from "../../../searchForm/SearchForm.js";
import PaginationItem from "../pagination/PaginationItem";
import Spinner from "../../../spinner/Spinner";

const ListOrderComponent = ({
  data,
  itemsPerPage,
  startFrom,
  searchByData,
  tableHead,
}) => {
  // const loading= useSelector((state) => state.order.isBlogLoading);
  const loading = false;
  // const [modalActive, setModalActive] = useState(false);
  // const [blogInfo, setBlogInfo] = useState();

  const {
    slicedData,
    pagination,
    prevPage,
    nextPage,
    changePage,
    setFilteredData,
    setSearching,
  } = usePagination({ itemsPerPage, data, startFrom });

  // useEffect(() => {
  //     setModalActive(false);
  // }, [data]);

  // const deleteBlogHandler = (id) => {
  //     dispatch(deleteBlog(id));
  // };

  // const showDeleteModalWindow = (blog) => {
  //     setModalActive(true);
  //     setBlogInfo(blog);
  // };

  const renderHead = (item, index) => <th key={index}>{item}</th>;
  return (
    <>
      {/* {modalActive ?
                <Modal blog={blogInfo}
                       deleteBlogHandler={deleteBlogHandler}
                       setModalActive={setModalActive}/> : null} */}
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
            </thead>
            <tbody>
              {slicedData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.course.name}</td>
                    <td>
                      {item.user.firstName} {item.user.lastName}
                    </td>
                    <td>{item.createdTime}</td>
                    <td>${item.total}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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

export default ListOrderComponent;
