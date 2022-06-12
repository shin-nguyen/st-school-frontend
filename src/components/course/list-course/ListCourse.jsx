import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCourse, getPurchasedCourses, getAllCourseByMe } from '../../../services/course-services';
import { getOrderByUser } from '../../../services/order-services';
import SearchBar from '../../share/search-bar/SearchBar';
import CardCourse from '../card-course/CardCourse'

const ListCourse = (props) => {

    const defaultSize = 12;
    const defaultValueIncreased = 12;

    const myList = props.listCourse? props.listCourse :  props.listOrder;

    const [listSize, setListSize] = useState(defaultSize);
    const listShow = myList.slice(0, listSize);

    const updateList = () => {
        listSize + defaultValueIncreased < myList?.length ? setListSize(listSize + defaultValueIncreased) : setListSize(myList.length)
    }

    return (
        <>
            <div>
                <div className='row'>
                {
                    props.isBought === true ?
                        listShow?.map((item) => (
                            <div className="col-md-3 col-sm-6 " key={item.id}>
                                <CardCourse
                                    course={item.course}
                                    goto={"/learning/" + item.course?.id}
                                    progress={item.progress}
                                    isBought />
                            </div>
                        ))
                        :
                        listShow?.map((item) => (
                            <div className="col-md-3 col-sm-6 " key={item.id}>
                                <CardCourse
                                    course={item}
                                    goto={"/course/" + item.id} />
                            </div>
                        ))
                }
                </div>
                <div className='loadmore-container'>
                {
                    listSize < myList?.length ?
                        <div className='loadmore-btn can-click' onClick={() => updateList()}>
                            Load more
                        </div> : listSize >= defaultSize && defaultSize < myList.length ?
                            <div className='loadmore-btn can-click' onClick={() => setListSize(defaultSize)}>
                                Hide
                            </div> : null
                }
                </div>                
            </div>
        </>
    )
}

export default ListCourse
