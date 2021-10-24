import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCourse } from '../../../actions/courseAction';
import CardCourse from '../cardCourse/CardCourse'

const ListCourse = (props) => {
    const dispatch = useDispatch()
    const listCourse = useSelector(state => state.course.listCourse)

    useEffect(() => {
        if(props.isBought === true){
            console.log("isBought");
        } else {
            dispatch(getAllCourse());
        }
        return () => {
            return []
        }
    }, [dispatch])

    return (
        <div className="row page-body">
        {
            listCourse.map((item)=>(
                props.isBought === true ?
                <div className="col-md-3 col-sm-6 " key={item.id}>
                    <CardCourse 
                        image= {item.image}
                        title= {item.name}
                        description= {item.description}
                        price={item.price}
                        goto={"/learning/" + item.id}
                        isBought/>
                </div>
                :
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
