'use client';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import {Heart,MapPin,Users,Star,ArrowUpRight} from 'lucide-react';
import {toast} from 'sonner';
import {authClient} from '@/lib/auth-client';
import {api} from '@/lib/api';
import {money} from '@/lib/utils';
import type {Studio} from '@/lib/types';
import {Button} from './ui/button';
export function StudioCard({studio,saved=false,onSavedChange}:{studio:Studio;saved?:boolean;onSavedChange?:()=>void}){const [busy,setBusy]=useState(false),[localSaved,setLocalSaved]=useState(saved);const {data}=authClient.useSession();const router=useRouter();async function save(){if(!data){router.push(`/login?next=${encodeURIComponent('/saved-studios')}`);return;}setBusy(true);try{await api(`/wishlist/${studio._id}`,{method:localSaved?'DELETE':'POST'});setLocalSaved(!localSaved);toast.success(localSaved?'Removed from saved studios.':'Studio saved for later.');onSavedChange?.();}catch(e){toast.error((e as Error).message);}finally{setBusy(false);}}
 return <article className="studio-card"><div className="card-image-wrap"><Link href={`/studios/${studio._id}`} tabIndex={-1} aria-hidden="true"><img src={studio.image} alt={studio.title} loading="lazy"/></Link><span className="card-badge">{studio.category}</span><button className={`save-button ${localSaved?'saved':''}`} aria-label={`${localSaved?'Unsave':'Save'} ${studio.title}`} aria-pressed={localSaved} disabled={busy} onClick={save}><Heart size={15} fill={localSaved?'currentColor':'none'}/></button></div><div className="card-body"><span className="card-location"><MapPin size={12}/>{studio.location}</span><h3><Link href={`/studios/${studio._id}`}>{studio.title}</Link></h3><div className="card-meta"><span className="rating"><Star size={12} fill="currentColor"/>{studio.reviewCount?`${studio.rating.toFixed(1)} (${studio.reviewCount})`:'New space'}</span><span style={{display:'flex',alignItems:'center',gap:4}}><Users size={12}/>Up to {studio.maxCapacity}</span></div><div className="card-bottom"><span className="price">{money(studio.hourlyRate)}<small> / hour</small></span><Button asChild variant="outline" size="small"><Link href={`/studios/${studio._id}`}>View Details<ArrowUpRight size={14}/></Link></Button></div></div></article>;}
