import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCourse, getPurchasedCourses,getAllCourseByMe } from '../../../services/course-services';
import CardCourse from '../card-course/CardCourse'

const ListCourse = (props) => {
    const dispatch = useDispatch()
    const listCourse = useSelector(state => state.course.listCourse)
    const purchasedCourses = useSelector(state => state.course.purchasedCourses)
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    useEffect(() => {
        if(props.isBought === true){
            console.log("is bought")
            dispatch(getPurchasedCourses());
        } else {
            if(isLoggedIn){
                dispatch(getAllCourseByMe());
            }
            else{
                dispatch(getAllCourse());
            }
        }
        return () => { 
            return []
        }
    }, [dispatch])

    return (
        <div className="row page-body body-content">
        {
            props.isBought === true ?
                purchasedCourses.map((item)=>(
                    <div className="col-md-3 col-sm-6 " key={item.id}>
                        <CardCourse 
                            image= {item.image}
                            title= {item.name}
                            description= {item.description}
                            price={item.price}
                            goto={"/learning/" + item.id}
                            isBought/>
                    </div>
                ))
            : 
                listCourse.map((item)=>(    
                    <div className="col-md-3 col-sm-6 " key={item.id}>
                        <CardCourse 
                            image= {item.image}
                            title= {item.name}
                            description= {item.description}
                            price={item.price}
                            goto={"/course/" + item.id}/>
                    </div>
                ))
        }
        </div>
    )
}

export default ListCourse
