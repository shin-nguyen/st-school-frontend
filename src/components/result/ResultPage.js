import React, { useState, useEffect } from "react";
import "./ResultPage.css";
import { Container, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, List, ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import Spinner from "../../components/spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Adjust, ExpandMore, Check, Close, Warning } from "@material-ui/icons";
import { getRecord } from "../../services/record-service";

function ResultPage() {
	const dispatch = useDispatch();

	let { recordId } = useParams();
	const loading = useSelector((state) => state.quiz.isQuizLoading);
	const record = useSelector((state) => state.record.record);
	const [responses, setResponses] = useState([]);

	const resIcon = (response) => {

		if (response.select == response.correct) {
			return <Check style={{ color: 'green', marginLeft: '3px' }} />
		} else if (response.select === null) {

			return <Warning style={{ color: 'goldenrod', marginLeft: '3px' }} />
		}
		else {
			return <Close style={{ color: 'red', marginLeft: '3px' }} />
		}
	}

	const getRecordDetail = () => {
		dispatch(getRecord(recordId));
		if (record.jsonQuiz != undefined)
			setResponses(JSON.parse(record.jsonQuiz));
	};

	useEffect(() => {
		if (recordId) {
			getRecordDetail();
		}
	}, [record.id]);

	if (loading || responses.length == 0) {
		return <Spinner />
	}
	return (
		<Container className="result-page">
			<div className="result-head">
				<Typography variant="h4" className="result-title">Results</Typography>
			</div>
			<div className="result-quiz-info">
				<Typography variant="h5"><span className="profile-param">Quiz:</span> <strong>{record?.quiz?.name}</strong></Typography>
				<Typography variant="h5"><span className="profile-param">Scored:</span> <strong>{record.score}</strong></Typography>
			</div>
			<div className="result-responses">
				<div className="result-response-title">
					<Typography variant="h5">Responses</Typography>
				</div>
				<div className="result-responses-list">
					{
						responses?.map((response) => (
							<ExpansionPanel elevation={3} className="expansion"
								key={response.id}
							>
								<ExpansionPanelSummary
									className="question-response"
									expandIcon={<ExpandMore />}
									aria-controls="question-content"
									aria-label="Expand"
								>
									<Typography className="question-label">{response.description} {resIcon(response)}</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<List component="nav" className="options-display">
										{response.options.map((option) => (
											<ListItem button key={option.id}>
												<ListItemIcon><Adjust style={{ color: response.correct === option.text ? 'green' : (response.select === option.text ? 'red' : 'black') }} /></ListItemIcon>
												<ListItemText style={{ color: response.correct === option.text ? 'green' : (response.select === option.text ? 'red' : 'black') }} primary={option.text} />
											</ListItem>
										))}
									</List>
								</ExpansionPanelDetails>
							</ExpansionPanel>
						))
					}
				</div>

			</div>
		</Container >
	)
}

export default ResultPage;