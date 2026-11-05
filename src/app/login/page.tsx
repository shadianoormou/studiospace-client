import {Suspense} from 'react';
import {AuthForm} from '@/components/auth-form';
import {Loading} from '@/components/feedback';
export const metadata={title:'Log in'};
export default function Page(){return <Suspense fallback={<Loading/>}><AuthForm/></Suspense>;}
