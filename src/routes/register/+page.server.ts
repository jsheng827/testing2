import type { Actions,PageServerLoad } from './$types';
import { getMoviesCollection } from '$lib/db'
import bcrypt from 'bcryptjs'
import { MongoClient } from "mongodb";


const uri = "mongodb+srv://jsheng:Cheng1416@cluster0.hmuholi.mongodb.net/";
const client = new MongoClient(uri);

const MoviesCollection = await getMoviesCollection()

export const load: PageServerLoad = async () => {
    // todo
  }

export const actions = {


	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const useremail = data.get('email');
		const userpassword:any = data.get('password');

        const database = client.db("signup");
        const signup = database.collection("signup");
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync( userpassword , salt);

        const result = await signup.findOne({email:useremail});
        if (result == null){
          
           signup.insertOne({email:useremail,password:hash});
        
        }else{
            console.log("Email already exist");
        }


       

	}
    
} satisfies Actions;
