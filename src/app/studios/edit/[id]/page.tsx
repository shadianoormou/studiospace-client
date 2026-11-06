import {StudioEditor} from '@/components/studio-form';
export const metadata={title:'Edit studio'};
export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;return <StudioEditor id={id}/>;}
