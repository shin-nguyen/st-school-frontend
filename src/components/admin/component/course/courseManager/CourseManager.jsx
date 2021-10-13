import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourse, deleteCourse } from '../../../../../actions/courseAction'
import Table from '../../table/Table'
import { Link } from 'react-router-dom'

const CoursesManager = (props) => {
    const dispatch = useDispatch()
    const listCourse = useSelector(state => state.course.listCourse)

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
                <Link to={'course/'+item.id+'/edit'}>
                    <button className="btn-a btn btn-success mr-10">Edit</button>
                </Link>
                <button className="btn btn-danger mr-10" onClick={() => handleDelete(item)}>Delete</button>
            </td>
        </tr>
    )

    const handleDelete = (item) => {
        if(confirm('Are you sure to delete it ?')){ //eslint-disable-line
            dispatch(deleteCourse(item.id));
        } 
    }

    useEffect(() => {
        dispatch(getAllCourse());
        console.log("render");
        return () => {
            return [];
        }
    }, [dispatch]);

    useEffect(() => {
        console.log("render2");
        return () => {
            return [];
        }
    }, [listCourse]);

    return (    
        <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to='course/add'>
                    <button className="btn btn-info mb-10">
                        New Course
                    </button>
                </Link>
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
        </div>
    )
}

export default CoursesManager;
