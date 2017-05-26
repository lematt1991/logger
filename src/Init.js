import store from './store'
import * as LogActions from './actions/LogActions'


setInterval(() => {
	store.dispatch(LogActions.addText('test\n'))
}, 500)