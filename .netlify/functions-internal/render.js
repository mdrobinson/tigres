const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","favicon-16x16.png","favicon.ico","favicon.png","robots.txt","smui.css"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".txt":"text/plain",".css":"text/css"},
	_: {
		entry: {"file":"start-17d58c9d.js","js":["start-17d58c9d.js","chunks/index-18aedabf.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				type: 'page',
				id: "schedule",
				pattern: /^\/schedule\/?$/,
				names: [],
				types: [],
				path: "/schedule",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/schedule.ts.js')),
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
