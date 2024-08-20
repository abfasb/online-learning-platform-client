import React from 'react'
import Header from '@/components/Header'
import AnimatedModal from '@/components/AnimatedModal'


type Props = {
    children: React.ReactNode;
}

export default function Layout({}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AnimatedModal />
      <div className="container mx-auto flex-1 py-10"></div>
  </div>
  )
}
