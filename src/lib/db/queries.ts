import type { SupabaseClient } from '@supabase/supabase-js'
import type {
  Insight,
  Solution,
  CaseStudyRecord,
  SiteSetting,
  SiteSection,
  MediaAsset,
  AdminLog,
  StatusCounts,
} from './types'

// ─── PUBLIC QUERIES (anon key, status=live only) ───────────────────────────

/** Fetch live insights, featured first, for the public /insights page. */
export async function fetchLiveInsights(
  supabase: SupabaseClient,
  limit = 10
): Promise<Insight[]> {
  const { data } = await supabase
    .from('insights')
    .select('*')
    .eq('status', 'live')
    .order('featured', { ascending: false })
    .order('published_at', { ascending: false })
    .limit(limit)
  return data ?? []
}

/** Fetch live + featured insights for the homepage preview block. */
export async function fetchFeaturedInsights(
  supabase: SupabaseClient,
  limit = 3
): Promise<Insight[]> {
  const { data } = await supabase
    .from('insights')
    .select('*')
    .eq('status', 'live')
    .eq('featured', true)
    .order('published_at', { ascending: false })
    .limit(limit)
  return data ?? []
}

// ─── ADMIN QUERIES (service-role key) ─────────────────────────────────────

/** Fetch all insights (all statuses) for the admin panel. */
export async function adminFetchInsights(
  supabase: SupabaseClient
): Promise<Insight[]> {
  const { data } = await supabase
    .from('insights')
    .select('*')
    .order('created_at', { ascending: false })
  return data ?? []
}

export async function adminUpsertInsight(
  supabase: SupabaseClient,
  insight: Partial<Insight> & { id?: string }
): Promise<Insight | null> {
  const { data, error } = await supabase
    .from('insights')
    .upsert({ ...insight, updated_at: new Date().toISOString() })
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data
}

export async function adminDeleteInsight(
  supabase: SupabaseClient,
  id: string
): Promise<void> {
  const { error } = await supabase.from('insights').delete().eq('id', id)
  if (error) throw new Error(error.message)
}

/** Fetch all solutions for the admin panel. */
export async function adminFetchSolutions(
  supabase: SupabaseClient
): Promise<Solution[]> {
  const { data } = await supabase
    .from('solutions')
    .select('*')
    .order('sort_order', { ascending: true })
  return data ?? []
}

export async function adminUpsertSolution(
  supabase: SupabaseClient,
  solution: Partial<Solution> & { id?: string }
): Promise<Solution | null> {
  const { data, error } = await supabase
    .from('solutions')
    .upsert({ ...solution, updated_at: new Date().toISOString() })
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data
}

/** Fetch all case study records for the admin panel. */
export async function adminFetchCaseStudies(
  supabase: SupabaseClient
): Promise<CaseStudyRecord[]> {
  const { data } = await supabase
    .from('case_studies')
    .select('*')
    .order('sort_order', { ascending: true })
  return data ?? []
}

export async function adminUpsertCaseStudy(
  supabase: SupabaseClient,
  record: Partial<CaseStudyRecord> & { id?: string }
): Promise<CaseStudyRecord | null> {
  const { data, error } = await supabase
    .from('case_studies')
    .upsert({ ...record, updated_at: new Date().toISOString() })
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data
}

/** Fetch site settings. */
export async function adminFetchSettings(
  supabase: SupabaseClient
): Promise<SiteSetting[]> {
  const { data } = await supabase
    .from('site_settings')
    .select('*')
    .order('key', { ascending: true })
  return data ?? []
}

export async function adminUpsertSetting(
  supabase: SupabaseClient,
  key: string,
  value: string
): Promise<void> {
  const { error } = await supabase
    .from('site_settings')
    .upsert({ key, value, updated_at: new Date().toISOString() })
  if (error) throw new Error(error.message)
}

/** Fetch site sections. */
export async function adminFetchSections(
  supabase: SupabaseClient
): Promise<SiteSection[]> {
  const { data } = await supabase
    .from('site_sections')
    .select('*')
    .order('sort_order', { ascending: true })
  return data ?? []
}

export async function adminToggleSectionVisibility(
  supabase: SupabaseClient,
  id: string,
  visible: boolean
): Promise<void> {
  const { error } = await supabase
    .from('site_sections')
    .update({ visible, updated_at: new Date().toISOString() })
    .eq('id', id)
  if (error) throw new Error(error.message)
}

/** Fetch media assets. */
export async function adminFetchMedia(
  supabase: SupabaseClient
): Promise<MediaAsset[]> {
  const { data } = await supabase
    .from('media_assets')
    .select('*')
    .eq('archived', false)
    .order('created_at', { ascending: false })
  return data ?? []
}

export async function adminInsertMediaRecord(
  supabase: SupabaseClient,
  asset: Omit<MediaAsset, 'id' | 'created_at' | 'updated_at'>
): Promise<MediaAsset | null> {
  const { data, error } = await supabase
    .from('media_assets')
    .insert({ ...asset, updated_at: new Date().toISOString() })
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data
}

/** Fetch recent admin logs. */
export async function adminFetchLogs(
  supabase: SupabaseClient,
  limit = 20
): Promise<AdminLog[]> {
  const { data } = await supabase
    .from('admin_logs')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)
  return data ?? []
}

export async function adminWriteLog(
  supabase: SupabaseClient,
  action: string,
  entity_type?: string,
  entity_id?: string,
  payload?: Record<string, unknown>
): Promise<void> {
  await supabase.from('admin_logs').insert({ action, entity_type, entity_id, payload })
}

/** Dashboard: count items by status for all content types. */
export async function adminFetchStatusCounts(supabase: SupabaseClient): Promise<{
  insights: StatusCounts
  solutions: StatusCounts
  case_studies: StatusCounts
}> {
  const tables = ['insights', 'solutions', 'case_studies'] as const
  const statuses = ['draft', 'scheduled', 'live', 'archived'] as const

  const results: Record<string, StatusCounts> = {}

  for (const table of tables) {
    const counts: StatusCounts = { draft: 0, scheduled: 0, live: 0, archived: 0 }
    for (const status of statuses) {
      const { count } = await supabase
        .from(table)
        .select('*', { count: 'exact', head: true })
        .eq('status', status)
      counts[status] = count ?? 0
    }
    results[table] = counts
  }

  return results as {
    insights: StatusCounts
    solutions: StatusCounts
    case_studies: StatusCounts
  }
}
