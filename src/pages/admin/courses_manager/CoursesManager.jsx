import React,{useState, useEffect} from 'react'

import { connect } from 'react-redux';
import Table from '../../../components/table/Table';
import { CourseServices } from '../../../services/services'

const Courses = (props) => {
    const [courses, setCourses] = useState([]);
    const [id, setId] = useState(-1);
    const [name, setName] = useState('');
    const [descripton, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
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
                <img src={"http://localhost:8080/images/"+item.image} alt="" className="custom-img"></img>
            </td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>
                <button className="btn-a btn btn-success mr-10" data-toggle="modal" data-target="#myModal" onClick={() => handleRequire(item)}>Edit</button>
                <button className="btn btn-danger mr-10" onClick={() => handleDelete(item.id, index)}>Delete</button> 
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
            case "image":
                setImage(e.target.files[0]);
                break;
            default : 
        }
    }

    const handelReset = () =>{
        setId(-1);
        setName("");
        setDescription("");
        setPrice("");
        setImage("");
        setModalTitle("Add New Course");
    }

    const handleRequire = (item) => {
        console.log("require");
        console.log(item);
        setId(item.id);
        setName(item.name);
        setDescription(item.description);
        setPrice(item.price);
        setImage(item.image);
        setModalTitle("Edit Course");
    }

    const handleDelete = (id, index) =>{
        let coursess = courses;
        if(confirm('Are you sure to delete it ?')){ //eslint-disable-line
            CourseServices.deleteCourse(id).then((response) => {
                console.log("delete"+id + "in index" + index);
                coursess.splice(index, 1);
                setCourses(coursess);
                console.log(coursess);
                console.log(courses);
            })
        } 
    }

    const handleSubmit = (evt) => {
        // evt.preventDefault();
        const params = new URLSearchParams();
        params.append('name', name);
        params.append('description', descripton);
        params.append('price', price);
        params.append('image', image);

        if(id===-1){
            CourseServices.addCourse(params).then((response) =>{
                if(response.status === 200){
                    
                }    
            })
        }
        else {
            params.append("id", id)
            CourseServices.editCourse(params).then((response) =>{
                if(response.status === 200){
                    
                }    
            })
        }

        handelReset();  
    }

    useEffect(() => {
        CourseServices.getCourses().then((response) => {
            if(response != null){
                setCourses(response.data);
            }
        })
    },[]);

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
                            bodyData={courses}
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
                            <form onSubmit= { handleSubmit }>
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            placeholder="Enter name" 
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
                                            name="image"
                                            files={image}
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

const mapStateToProps = state =>{
    return{
        courses : state.courses
    }
}

export default connect(mapStateToProps, null) (Courses);
