    import type { Handle } from '@sveltejs/kit';
    import { redirect } from '@sveltejs/kit';


    const unProtectedRoutes = ['/', '/login', '/register'];
    const logout = ['/logout'];
    export const handle: Handle = async ({ event,resolve }) => {	
    
    
    const sessionId = event.cookies.get('session_id');
    console.log('Session ID: ',sessionId); 
    
    
    
    if (!sessionId && !unProtectedRoutes.includes(event.url.pathname)) {

        throw redirect(303, '/');
    }
    console.log(!unProtectedRoutes.includes(event.url.pathname));

    const urlSearchParams = new URLSearchParams(event.url.search);
   

    console.log( logout.includes(event.url.pathname));  

    if (sessionId && logout.includes(event.url.pathname)) {
        event.cookies.delete('session_id', { path: '/' });
        throw redirect(303, '/');
    }


    return resolve(event);
    
    
    }