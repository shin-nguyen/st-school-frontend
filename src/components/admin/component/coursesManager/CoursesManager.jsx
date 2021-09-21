import React,{useState, useEffect} from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourse, deleteCourse, addCourse, updateCourse } from '../../../../actions/courseAction'
import Table from '../table/Table'
import { getAllLanguage } from '../../../../actions/languageAction'

const CoursesManager = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const listCourse = useSelector(state => state.course.listCourse)
    const listLanguage = useSelector(state => state.language.listLanguage)
    
    const [id, setId] = useState(-1);
    const [name, setName] = useState('');
    const [descripton, setDescription] = useState('');
    const [totalLength, setTotalLength] = useState('');
    const [price, setPrice] = useState(0);
    const [language, setLanguage] = useState('');
    const [file, setFile] = useState('');

    const [modalTitle, setModalTitle] = useState('');

    const courseTableHead = [
        '',
        'Image',
        'Name',
        'Description',
        'Price',
        '',
    ]
    
    const renderHead = (item, index) => <th key={index}>{item}</th>
    
    const renderBody = (item, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>
                <img src={item.image} alt="" className="custom-img"></img>
            </td>
            <td>{item.name}</td>
            <td className="mw-445">{item.description}</td>
            <td>{item.price}</td>
            <td>
                <button className="btn-a btn btn-success mr-10" data-toggle="modal" data-target="#myModal" onClick={() => handleRequire(item)}>Edit</button>
                <button className="btn btn-danger mr-10" onClick={() => handleDelete(item.id)}>Delete</button> 
            </td>
        </tr>
    )

    const onChange = (e) =>{
        switch (e.target.name){
            case "name" :   
                setName(e.target.value);
                break;
            case "description" :    
                setDescription(e.target.value);
                break;
            case "price":
                setPrice(e.target.value);
                break;
            case "totalLength":
                setTotalLength(e.target.value);
                break;
            case "language":
                console.log(e.target.value);
                setLanguage(e.target.value);
                break;
            case "file":
                setFile(e.target.files[0]);
                break;
            default : 
        }
    }

    const handelReset = () =>{
        setId(-1);
        setName("");
        setDescription("");
        setTotalLength("");
        setPrice("");
        setFile("");
        setLanguage("");
        setModalTitle("Add New Course");
    }

    const handleRequire = (item) => {
        console.log("require");
        console.log(item);
        setId(item.id);
        setName(item.name);
        setDescription(item.description);
        setTotalLength(item.totalLength);
        setPrice(item.price);
        setLanguage(item.language);
        setFile(item.file);
        setModalTitle("Edit Course");

        console.log(language);
    }

    const handleDelete = (id) =>{
        if(confirm('Are you sure to delete it ?')){ //eslint-disable-line
            dispatch(deleteCourse(id));
            history.push('/admin/courses')
        } 
    }

    const handleSubmit = (evt) => {
        // evt.preventDefault();
        let params = new FormData();

        params.append("name", name);
        params.append("description", descripton);
        params.append("totalLength", totalLength);
        params.append("price", price);
        // params.append("language", language)
        // params.appendd("language", listLanguage[0])
        params.append("file", file);

        if(id===-1){
            dispatch(addCourse(params));
        }
        else {
            params.append("id", id)
            dispatch(updateCourse(params));
        }

        handelReset();
        // history.push('/admin/courses')  
    }

    useEffect(() => {
        dispatch(getAllCourse());
        dispatch(getAllLanguage());
        return () => {
            return [];
        }
    }, [dispatch]);

    return (    
        <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button className="btn btn-info mb-10" 
                        data-toggle="modal" 
                        data-target="#myModal"
                        onClick={() => handelReset()}>
                    New Course
                </button>
                <div className="card-table">
                    <div className="card-header">
                        <h3 className="title">Course List</h3>
                    </div>
                    <div className="card-body">
                        <Table 
                            headData={courseTableHead}
                            renderHead={(item, index) => renderHead(item, index)}
                            bodyData={listCourse}
                            renderBody={(item, index) => renderBody(item, index)}
                        />         
                    </div>
                </div>
            </div>  
            
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{modalTitle}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit= { handleSubmit } encType="multipart/form-data">
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            placeholder="Enter Name" 
                                            name="name"
                                            value={name}
                                            onChange={onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Description:</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            placeholder="Enter Description" 
                                            name="description"
                                            value={descripton}
                                            onChange={onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Total length:</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            placeholder="Enter Total Length" 
                                            name="totalLength"
                                            value={totalLength}
                                            onChange={onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Language:</label>
                                    <select className="form-control"
                                            name="language"
                                            value={language}
                                            onChange={onChange} 
                                    >
                                            {
                                               listLanguage.map((language) => (
                                                    <option key={language.id} 
                                                            value={language.obj}>
                                                        {language.name}
                                                    </option> )
                                               )
                                            }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Price:</label>
                                    <input  type="number" 
                                            className="form-control" 
                                            placeholder="Enter Price" 
                                            name="price"
                                            value={price}
                                            onChange={onChange}
                                            
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Image:</label>
                                    <input  type="file"  multiple
                                            className="form-control"
                                            name="file"
                                            files={file}
                                            onChange={onChange}
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesManager;
