import React from 'react'
import Header from '@/components/Header'

type Props = {
    children: React.ReactNode;
}

export default function Layout({}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto flex-1 py-10"></div>
  </div>
  )
}
