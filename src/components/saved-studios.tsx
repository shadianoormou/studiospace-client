'use client';
import {useResource} from '@/lib/use-resource';
import type {Studio} from '@/lib/types';
import {Guard} from './guard';
import {StudioCard} from './studio-card';
import {Empty,ErrorState,Loading} from './feedback';
export function SavedStudios(){const {data,error,loading,reload}=useResource<Studio[]>('/wishlist');return <Guard><div className="container section-small"><div className="page-heading"><span className="eyebrow">A little inspiration saved for later</span><h1>Saved studios.</h1><p>Keep the spaces that caught your eye close at hand.</p></div>{loading?<Loading cards/>:error?<ErrorState message={error} retry={reload}/>:data?.length?<div className="studio-grid">{data.map(s=><StudioCard key={s._id} studio={s} saved onSavedChange={reload}/>)}</div>:<Empty title="Your shortlist is waiting" text="Tap the heart on a studio to save it here." href="/studios" label="Explore studios"/>}</div></Guard>}
