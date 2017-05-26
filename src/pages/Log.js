import React from 'react'
import {connect} from 'react-redux'

class Log extends React.Component{
	render(){
		return(
			<div style={styles.container}>
				<div style={{marginLeft : 10}}>
					<p style={{color : 'white', whiteSpace : 'pre-wrap', fontFamily : 'verdana'}}>
						{this.props.log.text}
					</p>
				</div>
			</div>
		)
	}
}

const styles = {
	container : {
		position : 'absolute',
		top : 0,
		bottom : 0,
		left : 0,
		right : 0,
		backgroundColor : 'black',
		overflow : 'scroll'
	}
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(Log)