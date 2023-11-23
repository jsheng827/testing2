import * as mongoDB from 'mongodb'


import { DB_URI } from '$env/static/private';
	
const client: mongoDB.MongoClient = new mongoDB.MongoClient(DB_URI);
await client.connect();
const db: mongoDB.Db = client.db('signup');



export const getMoviesCollection = async () =>
	(await db.collection('signup'))

	

