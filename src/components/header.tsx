'use client';
import Link from 'next/link';
import {usePathname,useRouter} from 'next/navigation';
import {useState,useEffect} from 'react';
import {useTheme} from 'next-themes';
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import {Aperture,Sun,Moon,Menu,X,LogOut,LayoutDashboard,Plus,Building2,CalendarDays,Heart} from 'lucide-react';
import {authClient} from '@/lib/auth-client';
import {Button} from './ui/button';
import {toast} from 'sonner';
export function Logo(){return <Link className="logo" href="/" aria-label="StudioSpace home"><Aperture strokeWidth={1.6}/><span>studio<span style={{fontWeight:400}}>space</span><span style={{color:'var(--green)'}}>.</span></span></Link>;}
const links=[['/','Home'],['/studios','Explore Studios'],['/how-it-works','How It Works'],['/about','About Us']];
export function Header(){
 const path=usePathname(),router=useRouter();const {data,isPending}=authClient.useSession();const {theme,setTheme}=useTheme();const [mounted,setMounted]=useState(false),[mobile,setMobile]=useState(false);
 useEffect(()=>setMounted(true),[]);useEffect(()=>setMobile(false),[path]);
 async function logout(){const result=await authClient.signOut();if(result.error){toast.error(result.error.message||'Could not log out.');return;}toast.success('You have been logged out.');router.push('/');router.refresh();}
 const items=[['/dashboard','Dashboard',LayoutDashboard],['/add-studio','Add New Studio',Plus],['/my-listings','My Studio Listings',Building2],['/my-bookings','My Bookings',CalendarDays],['/saved-studios','Saved Studios',Heart]] as const;
 return <header className="site-header"><div className="container header-inner"><Logo/><nav className="desktop-nav" aria-label="Main navigation">{links.map(([href,label])=><Link key={href} href={href} className={path===href?'active':''} aria-current={path===href?'page':undefined}>{label}</Link>)}</nav><div className="header-actions"><Button variant="ghost" size="icon" aria-label={mounted&&theme==='dark'?'Switch to light theme':'Switch to dark theme'} onClick={()=>setTheme(theme==='dark'?'light':'dark')}>{mounted&&theme==='dark'?<Sun size={18}/>:<Moon size={18}/>}</Button>{isPending?<span className="avatar" aria-label="Checking session">…</span>:data?<Dropdown.Root><Dropdown.Trigger asChild><button aria-label="Open account menu" style={{background:'none',border:0,padding:3}}><span className="avatar">{data.user.image?<img src={data.user.image} alt=""/>:data.user.name.slice(0,1).toUpperCase()}</span></button></Dropdown.Trigger><Dropdown.Portal><Dropdown.Content className="dropdown" align="end" sideOffset={12}><Dropdown.Label className="dropdown-label">{data.user.name}</Dropdown.Label>{items.map(([href,label,Icon])=><Dropdown.Item asChild key={href}><Link href={href}><Icon size={16}/>{label}</Link></Dropdown.Item>)}<Dropdown.Item asChild><button onClick={logout}><LogOut size={16}/>Logout</button></Dropdown.Item></Dropdown.Content></Dropdown.Portal></Dropdown.Root>:<><Button className="login-link" variant="ghost" asChild><Link href="/login">Log in</Link></Button><Button className="register-link" asChild><Link href="/register">Get started <Plus size={15}/></Link></Button></>}<Button className="mobile-toggle" variant="ghost" size="icon" onClick={()=>setMobile(!mobile)} aria-label={mobile?'Close navigation':'Open navigation'} aria-expanded={mobile}>{mobile?<X size={20}/>:<Menu size={20}/>}</Button></div></div>{mobile&&<nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}{!data&&<><Link href="/login">Log in</Link><Link href="/register">Create an account</Link></>}</nav>}</header>;
}
