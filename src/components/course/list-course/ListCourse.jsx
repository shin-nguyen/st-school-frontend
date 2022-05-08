import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCourse, getPurchasedCourses,getAllCourseByMe } from '../../../services/course-services';
import { getOrderByUser } from '../../../services/order-services';
import CardCourse from '../card-course/CardCourse'

const ListCourse = (props) => {
    const dispatch = useDispatch()
    const listCourse = useSelector(state => state.course.listCourse)
    const listOrder = useSelector(state => state.order.listOrder)
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    useEffect(() => {
        if(props.isBought === true){
            dispatch(getOrderByUser());
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
                listOrder.map((item)=>(
                    <div className="col-md-3 col-sm-6 " key={item.id}>
                        <CardCourse 
                            course = {item.course}
                            goto={"/learning/" + item.course?.id}
                            progress = {item.progress}
                            isBought/>
                    </div>
                ))
            : 
                listCourse.map((item)=>(    
                    <div className="col-md-3 col-sm-6 " key={item.id}>
                        <CardCourse 
                            course = {item}
                            goto={"/course/" + item.id}/>
                    </div>
                ))
        }
        </div>
    )
}

export default ListCourse
