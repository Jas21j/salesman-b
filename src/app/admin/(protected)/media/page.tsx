import { isServiceRoleConfigured } from '@/lib/supabase/server'
import MediaAdmin from './MediaAdmin'

export default async function AdminMediaPage() {
  if (!isServiceRoleConfigured()) {
    return <MediaAdmin initialAssets={[]} />
  }
  try {
    const { createServiceClient } = await import('@/lib/supabase/server')
    const { adminFetchMedia } = await import('@/lib/db/queries')
    const assets = await adminFetchMedia(createServiceClient()).catch(() => [])
    return <MediaAdmin initialAssets={assets} />
  } catch {
    return <MediaAdmin initialAssets={[]} />
  }
}
