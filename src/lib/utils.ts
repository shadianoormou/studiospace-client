import {clsx,type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';
export function cn(...inputs:ClassValue[]){return twMerge(clsx(inputs));}
export const money=(n:number)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2}).format(n);
export const dateTime=(value:string)=>new Date(value).toLocaleString(undefined,{dateStyle:'medium',timeStyle:'short'});
export function safeNext(value:string|null){return value?.startsWith('/')&&!value.startsWith('//')&&!value.includes('\\')&&!value.startsWith('/login')&&!value.startsWith('/register')?value:'/';}
export const categories=['Photo Studio','Film Stage','Podcast Lounge','Music Suite','Workshop'];
export const categoryLabels=['Photo studios','Film stages','Podcast rooms','Music suites','Art workshops'];
