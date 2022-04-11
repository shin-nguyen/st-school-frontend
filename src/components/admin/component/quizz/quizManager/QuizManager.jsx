import React, { useEffect } from 'react'
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuizzes } from '../../../../../services/quiz-services'
import QuizListComponent from "./QuizListComponent";
import { Link } from 'react-router-dom'
import {
    faFileExcel,
    faFilePdf,
    faFileCsv,
} from "@fortawesome/free-solid-svg-icons";
import { API_BASE_URL } from "../../../../../constants/SystemConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuizManager = () => {
    const dispatch = useDispatch()
    const listQuiz = useSelector(state => state.quiz.quizzes)

    useEffect(() => {
        dispatch(fetchQuizzes());
    }, [dispatch]);


    const itemsPerPage = 4;
    const searchByData = [
        { label: "Name", value: "name" },
        { label: "Create By", value: "firstName" }
    ];

    const tableHead = [
        '',
        'Name',
        'Duration',
        'Create By',
        'Status',
        '',
    ]

    return (
        <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to='quizzes/add'>
                    <button className="btn btn-info mb-10">
                        New Quiz
                    </button>
                </Link>

                <div className="card-table">
                    <h3 className="title">Quiz List</h3>
                    <div className="card-table-header text-right">
                        
                        <a
                            className="btn btn-success mr-20"
                            href={API_BASE_URL + "/quizzes/export/excel"}
                        >
                            <FontAwesomeIcon icon={faFileExcel} />
                            &nbsp;Export to xls
                        </a>
                        <a
                            className="btn btn-success mr-20"
                            href={API_BASE_URL + "/quizzes/export/csv"}
                        >
                            <FontAwesomeIcon icon={faFileCsv} />
                            &nbsp;Export to csv
                        </a>
                        <a
                            className="btn btn-success mr-20"
                            href={API_BASE_URL + "/quizzes/export/pdf"}
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
                            <QuizListComponent
                                data={listQuiz}
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

export default QuizManager;
