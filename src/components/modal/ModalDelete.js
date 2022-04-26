const ModalDelete = ({ object, deleteHandler, setModalActive, message }) => {
  return (
    <>
      <div className="modal-open">
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{message?.title}</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setModalActive(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="row modal-body">
                <div className="col-md-8 text-center">
                  <p> Are you sure too delete? ID: {object.id}</p>
                  <h6>{object?.name}</h6>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteHandler(object.id)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => setModalActive(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default ModalDelete;
