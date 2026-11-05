'use client';
import {useEffect,useState,useCallback} from 'react';
import {api} from './api';
export function useResource<T>(path:string|null){const [data,setData]=useState<T|null>(null),[error,setError]=useState(''),[loading,setLoading]=useState(true),[version,setVersion]=useState(0);const reload=useCallback(()=>setVersion(v=>v+1),[]);useEffect(()=>{if(!path){setLoading(false);return;}let active=true;setLoading(true);setError('');api<T>(path).then(result=>{if(active)setData(result);}).catch(e=>{if(active)setError(e.message);}).finally(()=>{if(active)setLoading(false);});return()=>{active=false;};},[path,version]);return{data,error,loading,reload,setData};}
