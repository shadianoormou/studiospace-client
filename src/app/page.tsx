import Home from '@/components/home';
import DemoPage from './demo/page';

export default async function Page({searchParams}:{searchParams:Promise<{demo?:string}>}){
  const params=await searchParams;
  if(params.demo==='video') return <DemoPage/>;
  return <Home/>;
}
