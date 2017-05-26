import store from './store'
import * as LogActions from './actions/LogActions'
import io from 'socket.io-client'

var socket = io()


socket.on('text', function(data){
	console.log('on')
	store.dispatch(LogActions.addText(data))
})

// setInterval(() => {
// 	store.dispatch(LogActions.addText('test\n'))
// }, 500)