export function changeValue(e) {
	console.log('Change value')
	return {
		type: 'VALUE_CHANGED',
		payload: e.target.value
	}
}