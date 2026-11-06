import type {MetadataRoute} from 'next';
export default function sitemap():MetadataRoute.Sitemap{const base='https://studiospace.example';return['/','/studios','/how-it-works','/about','/support','/terms','/privacy'].map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:path==='/'?'weekly':'monthly',priority:path==='/'?1:.6}));}
