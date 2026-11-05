import {Suspense} from 'react';
import {Explore} from '@/components/explore';
import {Loading} from '@/components/feedback';
export const metadata={title:'Explore Studios'};
export default function Page(){return <Suspense fallback={<Loading/>}><Explore/></Suspense>;}
