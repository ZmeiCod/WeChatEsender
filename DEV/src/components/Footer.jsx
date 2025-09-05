import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants'

export default function Footer() {
  return (
    <div className='mb-8 mt-8'>
        <div className='flex items-center justify-center gap-8'>
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <a key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
                    {link.icon}
                </a>
            ))}
        </div>
        <p className='mt-8 text-center tracking-tight text-neutral-500'> &copy;Restaura. All rights reservd.</p>
    </div>
  )
}
