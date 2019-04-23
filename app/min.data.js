'use strict'

module.exports = {
	nodes: [
		{ index: 0, id: 'a', label: 'a', status: 'up' },
		{ index: 1, id: 'b', label: 'b', status: 'up' },
		{ index: 2, id: 'c', label: 'c', status: 'up' },
		{ index: 3, id: 'd', label: 'd', status: 'up' },
		{ index: 4, id: 'e', label: 'e', status: 'up' },
	],

	links: [
		{ source: 'a', target: 'b' },
		{ source: 'b', target: 'c' },
		// { source: 'a', target: 'c' },
		{ source: 'c', target: 'd' },
		{ source: 'c', target: 'e' }
	]
}
