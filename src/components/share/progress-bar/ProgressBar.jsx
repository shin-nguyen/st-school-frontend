import React from 'react'

const ProgressBar = ({bgcolor,progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		margin: 5
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
		borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding:3,
		color: 'black',
		fontWeight: 900,
	}
		
	return (
		<div style={Parentdiv}>
			<div style={Childdiv}>
				<span style={progresstext}>{`${progress}%`}</span>
			</div>
		</div>
	)
}

export default ProgressBar;
