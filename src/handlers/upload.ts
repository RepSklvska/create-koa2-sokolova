import { koaBody } from 'koa-body';
import Koa from 'koa';
import Router from 'koa-router';
import fs from 'fs';

const SetUploadHandler = (router: Router,) => {
	router.post('/upload', koaBody({
		multipart: true,
		formidable: {
			keepExtensions: true,
			allowEmptyFiles: false,
			multiples: false,
			// onFileBegin: async (name, file) => {
			// 	// console.log('收到文件', name, file);
			// 	console.log(file.filepath);
			// }
		}
	}), async (context: Koa.Context) => {
		const file = context.request.files?.file;
		// @ts-ignore
		console.log('file.filepath', file.filepath);
		// @ts-ignore
		if (file.filepath?.split('.').reverse()[0] === 'docx') {
			// @ts-ignore
			const buffer = fs.readFileSync(file.filepath);
			const blob = new Blob([buffer]);

		}

		context.body = { code: 200, message: 'OK' };
	});
};

export default SetUploadHandler;
