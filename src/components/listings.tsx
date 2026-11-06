'use client';
import Link from 'next/link';
import {useState} from 'react';
import {Edit3,Trash2,Plus,MapPin} from 'lucide-react';
import {useResource} from '@/lib/use-resource';
import {api} from '@/lib/api';
import type {Studio} from '@/lib/types';
import {money} from '@/lib/utils';
import {toast} from 'sonner';
import {Guard} from './guard';
import {Button} from './ui/button';
import {Dialog} from './ui/dialog';
import {Empty,ErrorState,Loading} from './feedback';
export function Listings(){const {data,error,loading,reload}=useResource<Studio[]>('/studios/mine');const [remove,setRemove]=useState<Studio|null>(null),[busy,setBusy]=useState(false);async function confirm(){if(!remove)return;setBusy(true);try{await api(`/studios/${remove._id}`,{method:'DELETE'});toast.success('Studio listing deleted.');setRemove(null);reload();}catch(e){toast.error((e as Error).message);}finally{setBusy(false);}}return <Guard><div className="container section-small"><div className="section-heading"><div><span className="eyebrow">Your creative footprint</span><h1>My studio listings.</h1><p>Keep your space details current and ready for the next creator.</p></div><Button asChild><Link href="/add-studio"><Plus size={16}/>Add a studio</Link></Button></div>{loading?<Loading cards/>:error?<ErrorState message={error} retry={reload}/>:data?.length?<div className="manage-list">{data.map(s=><article className="manage-card" key={s._id}><img src={s.image} alt=""/><div className="manage-content"><span className="badge">{s.category}</span><h3>{s.title}</h3><p><MapPin size={13} style={{display:'inline',verticalAlign:'-2px'}}/> {s.location} · {money(s.hourlyRate)} / hour · Up to {s.maxCapacity} guests</p><p style={{marginTop:7}}>{s.reviewCount?s.rating.toFixed(1)+` from ${s.reviewCount} reviews`:'No reviews yet'}</p></div><div className="manage-actions"><Button asChild variant="outline" size="small"><Link href={`/studios/edit/${s._id}`}><Edit3 size={14}/>Edit</Link></Button><Button variant="danger" size="small" onClick={()=>setRemove(s)}><Trash2 size={14}/>Delete</Button></div></article>)}</div>:<Empty title="Your first studio starts here" text="Share a space that helps someone make something meaningful." href="/add-studio" label="Add your studio"/>}<Dialog open={Boolean(remove)} onOpenChange={v=>!v&&setRemove(null)} title="Delete this studio?" description={`This will remove “${remove?.title}” from your listings. Pending bookings will be cancelled. Confirmed upcoming bookings must finish first.`}><div style={{display:'flex',justifyContent:'flex-end',gap:10}}><Button variant="outline" onClick={()=>setRemove(null)}>Keep listing</Button><Button variant="danger" disabled={busy} onClick={confirm}>{busy?'Deleting…':'Delete listing'}</Button></div></Dialog></div></Guard>}
