'use client';
import {ErrorState} from '@/components/feedback';
export default function ErrorPage({reset}:{error:Error;reset:()=>void}){return <div className="container section-small"><ErrorState message="This page could not be loaded. Please try again." retry={reset}/></div>;}
