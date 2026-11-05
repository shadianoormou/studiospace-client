'use client';
import {useEffect} from 'react';
import {usePathname,useRouter} from 'next/navigation';
import {authClient} from '@/lib/auth-client';
import {Loading} from './feedback';
export function Guard({children}:{children:React.ReactNode}){const {data,isPending,error}=authClient.useSession();const router=useRouter();const path=usePathname();useEffect(()=>{if(!isPending&&!data&&!error)router.replace(`/login?next=${encodeURIComponent(path)}`);},[data,isPending,error,path,router]);if(error)return <div className="empty-state"><h2>Could not check your session</h2><p>Please refresh and try again.</p></div>;if(isPending||!data)return <Loading/>;return children;}
