import type {Metadata} from 'next';
import './globals.css';
import {Providers} from '@/components/providers';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
export const metadata:Metadata={title:{default:'StudioSpace — Find your space. Make your mark.',template:'%s | StudioSpace'},description:'Discover and book inspiring photo studios, podcast rooms, film stages, music suites, and creative workshops by the hour.',openGraph:{type:'website',title:'StudioSpace — Find your space. Make your mark.',description:'Discover and book inspiring creative spaces by the hour.',images:['/media/studiospace-demo-poster.jpg'],videos:[{url:'https://studiospace-client-gamma-pink.vercel.app/media/studiospace-demo.mp4',type:'video/mp4',width:1920,height:1080}]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body><Providers><a href="#main" className="sr-only focus:not-sr-only">Skip to main content</a><Header/><main id="main">{children}</main><Footer/></Providers></body></html>;}
