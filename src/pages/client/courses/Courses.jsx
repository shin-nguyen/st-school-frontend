import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../../../components/card/Card'
import {CourseServices} from '../../../services/services'
 
const Courses = (props) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        CourseServices.getCourses().then((response) => {
            if(response != null){
                setCourses(response.data);
            }
        })
    },[]);

    return (
        <div>
            <div className="row page-body">
                {
                    courses.map((item, index)=>(
                        <div className="col-md-3 col-sm-6 " key={item.id}>
                            <Card 
                                image= {"http://localhost:8080/images/" + item.image}
                                title= {item.name}
                                description= {item.description}
                                price={item.price}
                                goto={"/course/" + item.id}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Courses
