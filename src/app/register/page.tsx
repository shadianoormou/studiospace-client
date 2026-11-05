import {Suspense} from 'react';
import {AuthForm} from '@/components/auth-form';
import {Loading} from '@/components/feedback';
export const metadata={title:'Create account'};
export default function Page(){return <Suspense fallback={<Loading/>}><AuthForm register/></Suspense>;}
