import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abhishek Kumar Patel | Cloud Computing Portfolio',
  description:
    'Cloud Computing Student | Cloud & Networking Fundamentals | Hands-on Learner',
  keywords: [
    'cloud computing',
    'cloud engineer',
    'AWS',
    'Azure',
    'DevOps',
    'networking',
    'cloud portfolio',
  ],
  authors: [{ name: 'Abhishek Kumar Patel' }],
  openGraph: {
    title: 'Abhishek Kumar Patel | Cloud Computing Portfolio',
    description:
      'Cloud Computing student focused on cloud platforms, networking, and deployment',
    type: 'website',
    siteName: 'Abhishek Cloud Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
