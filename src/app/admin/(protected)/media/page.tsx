import { createServiceClient } from '@/lib/supabase/server'
import { adminFetchMedia } from '@/lib/db/queries'
import MediaAdmin from './MediaAdmin'

export default async function AdminMediaPage() {
  const assets = await adminFetchMedia(createServiceClient()).catch(() => [])
  return <MediaAdmin initialAssets={assets} />
}
