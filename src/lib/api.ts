export class ApiError extends Error{constructor(message:string,public status:number){super(message);}}
export async function api<T>(path:string,options:RequestInit={}):Promise<T>{
 const method=options.method||'GET';
 if(!['GET','HEAD'].includes(method)&&path!='/newsletter'){
   const token=await fetch('/api/token',{method:'POST',credentials:'include'});
   if(!token.ok){const data=await token.json();throw new ApiError(data.message||'Please log in to continue.',token.status);}
 }
 const response=await fetch(`/api${path}`,{...options,credentials:'include',cache:'no-store',headers:{...(options.body instanceof FormData?{}:{'Content-Type':'application/json'}),...options.headers}});
 const data=await response.json();if(!response.ok)throw new ApiError(data.message||'Please try again.',response.status);return data;
}
