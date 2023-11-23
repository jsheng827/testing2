import type { Actions } from './$types';
import { getMoviesCollection } from '$lib/db'
import bcrypt from 'bcryptjs'
import { MongoClient,Collection } from "mongodb";
import { redirect } from '@sveltejs/kit';
import path from 'path';
const uri = "mongodb+srv://jsheng:Cheng1416@cluster0.hmuholi.mongodb.net/";
const client = new MongoClient(uri);











