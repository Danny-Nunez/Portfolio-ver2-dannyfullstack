import dynamicImport from 'next/dynamic'

const ClientPage = dynamicImport(() => import('./ClientPage'), { 
  ssr: false,
  loading: () => <div className="min-h-screen bg-black" />
})

export default function HomePage() {
  return <ClientPage />
}
