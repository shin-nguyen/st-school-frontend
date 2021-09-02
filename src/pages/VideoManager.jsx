import React,{useState, useEffect} from 'react'

import { connect } from 'react-redux';
import Table from '../components/table/Table';

const VideoManager = () => {
    const [videos, setVideos] = useState([]);
    const [id, setId] = useState(-1);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [position, setPosition] = useState(-1);
    const [course, setCourse] = useState();

    const videoTableHead = [
        '',
        'Title',
        'Content',
        'Course',
        'Position',
        '',
    ]
    
    const renderHead = (item, index) => <th key={index}>{item}</th>
    
    const renderBody = (item, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>
                <button>View</button>
            </td>
            <td>{item.position}</td>
            <td>{item.course}</td>
            <td>
                <button className="btn-a btn btn-success mr-10" data-toggle="modal" data-target="#myModal" onClick={() => handleRequire(item)}>Edit</button>
                <button className="btn btn-danger mr-10" onClick={() => handleDelete(item.id, index)}>Delete</button> 
            </td>
        </tr>
    )

    // const onChange = (e) =>{
    //     switch (e.target.name){
    //         case "name" :   
    //             setName(e.target.value);
    //             break;
    //         case "description" :    
    //             setDescription(e.target.value);
    //             break;
    //         case "price":
    //             setPrice(e.target.value);
    //             break;
    //         case "image":
    //             setImage(e.target.files[0]);
    //             break;
    //         default : 
    //     }
    // }

    const handelReset = () =>{
        setId(-1);
        setTitle("");
        setContent("");
        setPosition(-1);
        setCourse();
    }

    const handleRequire = (item) => {
        console.log("require");
        console.log(item);
        setId(item.id);
        setTitle(item.title);
        setContent(item.content);
        setPosition(item.position);
        setCourse(item.course);
    }

    const handleDelete = (id, index) =>{
        // let coursess = courses;
        // if(confirm('Are you sure to delete it ?')){ //eslint-disable-line
        //     CourseServices.deleteCourse(id).then((response) => {
        //         console.log("delete"+id + "in index" + index);
        //         coursess.splice(index, 1);
        //         setCourses(coursess);
        //         console.log(coursess);
        //         console.log(courses);
        //     })
        // } 
    }

    const handleSubmit = (evt) => {
        // evt.preventDefault();
        // const params = new URLSearchParams();
        // params.append('name', name);
        // params.append('description', descripton);
        // params.append('price', price);
        // params.append('image', image);

        // if(id===-1){
        //     CourseServices.addCourse(params).then((response) =>{
        //         if(response.status === 200){
                    
        //         }    
        //     })
        // }
        // else {
        //     params.append("id", id)
        //     CourseServices.editCourse(params).then((response) =>{
        //         if(response.status === 200){
                    
        //         }    
        //     })
        // }

        // handelReset();  
    }

    useEffect(() => {
        // CourseServices.getCourses().then((response) => {
        //     if(response != null){
        //         setCourses(response.data);
        //     }
        // })
    },[]);

    return (
        <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button className="btn btn-info mb-10" 
                        data-toggle="modal" 
                        data-target="#myModal"
                        onClick={() => handelReset()}>
                    New Video
                </button>
                <div className="card">
                    <div className="card-">
                        <h3 className="card-title">Video List</h3>
                    </div>
                    <div className="card-body">
                        <Table 
                            headData={videoTableHead}
                            renderHead={(item, index) => renderHead(item, index)}
                            bodyData={videos}
                            renderBody={(item, index) => renderBody(item, index)}
                        />         
                    </div>
                </div>
            </div>  
            
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add New Course</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit= { handleSubmit }>
                                {/* <div className="form-group">
                                    <label>Name:</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            placeholder="Enter name" 
                                            name="name"
                                            value={title}
                                            // onChange={onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Description:</label>
                                    <input  type="text" 
                                            className="form-control" 
                                            placeholder="Enter Description" 
                                            name="description"
                                            value={content}
                                            // onChange={onChange}
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
                                </div> */}
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

export default VideoManager
