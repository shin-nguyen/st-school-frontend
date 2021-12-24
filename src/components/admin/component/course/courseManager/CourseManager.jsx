import React, { useEffect } from 'react'
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourse } from '../../../../../services/course-services'
import CourseListComponent from "./CourseListComponent";
import { Link } from 'react-router-dom'
import {
    faFileExcel,
    faFilePdf,
    faFileCsv,
} from "@fortawesome/free-solid-svg-icons";
import { API_BASE_URL } from "../../../../../constants/SystemConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CoursesManager = () => {
    const dispatch = useDispatch()
    const listCourse = useSelector(state => state.course.listCourse)

    useEffect(() => {
        dispatch(getAllCourse());
    }, [dispatch]);


    const itemsPerPage = 4;
    const searchByData = [
        { label: "Name", value: "name" },
        { label: "Description", value: "description" },
        { label: "Price", value: "price" },
    ];

    const tableHead = [
        '',
        'Image',
        'Name',
        'Description',
        'Price',
        '',
    ]

    return (
        <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to='course/add'>
                    <button className="btn btn-info mb-10">
                        New Course
                    </button>
                </Link>

                <div className="card-table">
                    <div className="card-table-header">
                        <h3 className="title">Course List</h3>
                        <a
                            className="btn btn-outline-primary text-primary"
                            href={API_BASE_URL + "/course/export/excel"}
                        >
                            <FontAwesomeIcon icon={faFileExcel} />
                            &nbsp;Export to xls
                        </a>
                        <a
                            className="btn btn-outline-primary text-primary"
                            href={API_BASE_URL + "/course/export/csv"}
                        >
                            <FontAwesomeIcon icon={faFileCsv} />
                            &nbsp;Export to csv
                        </a>
                        <a
                            className="btn btn-outline-primary text-primary"
                            href={API_BASE_URL + "/course/export/pdf"}
                        >
                            <FontAwesomeIcon icon={faFilePdf} />
                            &nbsp;Export to pdf
                        </a>
                    </div>
                </div>
                <div className="card-body">
                    <Route
                        exact
                        component={() => (
                            <CourseListComponent
                                data={listCourse}
                                itemsPerPage={itemsPerPage}
                                searchByData={searchByData}
                                tableHead={tableHead}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

export default CoursesManager;
