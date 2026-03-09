import { redirect } from 'next/navigation'
import { createClient, createServiceClient } from '@/lib/supabase/server'
import { isAuthorizedAdmin } from '@/lib/auth/utils'
import { adminFetchMedia } from '@/lib/db/queries'
import MediaAdmin from './MediaAdmin'

export default async function AdminMediaPage() {
  const supabase = await createClient()
  if (!(await isAuthorizedAdmin(supabase))) redirect('/admin/unauthorized')
  const assets = await adminFetchMedia(createServiceClient()).catch(() => [])
  return <MediaAdmin initialAssets={assets} />
}
