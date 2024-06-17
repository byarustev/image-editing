import Mobilenav from '@/components/shared/Mobilenav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <main className='root'>
            <Sidebar />
            <Mobilenav />
            <div className='root-container'>
                <div className='wrapper'>
                    {children}
                </div>
                <Toaster />
            </div>
        </main>
    )
}

export default layout