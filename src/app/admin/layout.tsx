import AdminSidebar from './components/AdminSidebar'
import AdminTopBar from './components/AdminTopBar'

export const metadata = {
  title: 'Admin — Salesman Solutions',
  robots: { index: false, follow: false },
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0F1422',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'var(--font-inter, Inter, sans-serif)',
      }}
    >
      <AdminTopBar />
      <div style={{ display: 'flex', flex: 1 }}>
        <AdminSidebar />
        <main
          style={{
            flex: 1,
            padding: '32px 40px',
            overflowY: 'auto',
            minHeight: 'calc(100vh - 56px)',
          }}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
