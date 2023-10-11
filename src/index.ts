import Koa from 'koa';
import Router from 'koa-router';
import cors from 'koa2-cors';
import SetUploadHandler from './handlers/upload';

const PORT = 7000;

const app = new Koa();
const router = new Router();

router.get('/', async (context: Koa.Context) => {
	context.body = 'Hello';
});
SetUploadHandler(router);

app.use(cors());

app.use(router.routes());
app.listen(PORT, () => {
	console.log('Server running on port', PORT);
});
