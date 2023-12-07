import type { Actions ,PageServerLoad} from './$types';
import { getMoviesCollection } from '$lib/db'
import bcrypt from 'bcryptjs'
import { MongoClient,Collection } from "mongodb";
import { redirect } from '@sveltejs/kit';
const uri = "mongodb+srv://jsheng:Cheng1416@cluster0.hmuholi.mongodb.net/";
const client = new MongoClient(uri);

const MoviesCollection = await getMoviesCollection()



export const actions = {
	

	default: async ({ cookies, request }) => {
		
		const data = await request.formData();
		const useremail = await data.get('email');
		const userpassword:any = data.get('password');
              
    const database = client.db('signup');
    const user = database.collection('signup');


const result = await user.findOne({email:useremail});
if (result==null){

  console.log("No result");

}else{                                              //continue compare with password

 let passwordpass = await bcrypt.compare(userpassword,result.password)

 if(passwordpass){
	
	     cookies.set('session_id', result.email, {
	  	 httpOnly: true,
	  	 sameSite: 'strict',
	  	 secure: false,
	  	 path: '/',
	  	 maxAge: 60 * 60 * 24 * 7
	     });
     
		
	   
	  throw redirect(302, '../dashboard/')

 }}

	}

} satisfies Actions;





