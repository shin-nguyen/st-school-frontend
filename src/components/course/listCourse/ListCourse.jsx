import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCourse } from '../../../actions/courseAction';
import CardCourse from '../cardCourse/CardCourse'

const ListCourse = (props) => {
    const dispatch = useDispatch()
    const listCourse = useSelector(state => state.course.listCourse)

    useEffect(() => {
        dispatch(getAllCourse())
        return () => {
            return []
        }
    }, [dispatch])

    console.log(listCourse)

    return (
        <div className="row page-body">
        {
            listCourse ? 
            listCourse.map((item, index)=>(
                <div className="col-md-3 col-sm-6 " key={item.id}>
                    <CardCourse 
                        image= {item.image}
                        title= {item.name}
                        description= {item.description}
                        price={item.price}
                        goto={"/course/" + item.id}/>
                </div>
            )) : <h3>No Course</h3>
        }
        </div>
    )
}

export default ListCourse
