import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from '@/context/LangContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: 'InfinityAlgo Academy | Targets for Overlay Indicators',
    description: 'Professional trading indicators by InfinityAlgo Academy.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                <LangProvider>
                    <Navbar />
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                </LangProvider>
            </body>
        </html>
    )
}
