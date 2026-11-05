'use client';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {X} from 'lucide-react';
export function Dialog({open,onOpenChange,title,description,children}:{open:boolean;onOpenChange:(v:boolean)=>void;title:string;description?:string;children:React.ReactNode}){
 return <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}><DialogPrimitive.Portal><DialogPrimitive.Overlay className="dialog-overlay"/><DialogPrimitive.Content className="dialog-content"><DialogPrimitive.Title className="dialog-title">{title}</DialogPrimitive.Title>{description?<DialogPrimitive.Description className="muted">{description}</DialogPrimitive.Description>:<DialogPrimitive.Description className="sr-only">{title}</DialogPrimitive.Description>}<DialogPrimitive.Close className="dialog-close" aria-label="Close dialog"><X size={20}/></DialogPrimitive.Close>{children}</DialogPrimitive.Content></DialogPrimitive.Portal></DialogPrimitive.Root>;
}
