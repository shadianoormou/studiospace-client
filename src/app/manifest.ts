import type {MetadataRoute} from 'next';
export default function manifest():MetadataRoute.Manifest{return{name:'StudioSpace',short_name:'StudioSpace',description:'Find your space. Make your mark.',start_url:'/',display:'standalone',background_color:'#fbfaf6',theme_color:'#234d3c',icons:[{src:'/icon.svg',sizes:'any',type:'image/svg+xml',purpose:'maskable'}]};}
