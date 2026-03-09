export type ContentStatus = 'draft' | 'scheduled' | 'live' | 'archived'
export type Platform = 'IRIS' | 'ASSAN'

export type SiteSetting = {
  id: string
  key: string
  value: string | null
  updated_at: string
}

export type SiteSection = {
  id: string
  section_key: string
  visible: boolean
  sort_order: number
  label: string | null
  updated_at: string
}

export type Solution = {
  id: string
  slug: string
  platform: Platform
  title: string
  summary: string | null
  body: string | null
  status: ContentStatus
  featured: boolean
  sort_order: number
  hero_image: string | null
  published_at: string | null
  archived_at: string | null
  created_at: string
  updated_at: string
}

export type CaseStudyRecord = {
  id: string
  slug: string
  platform: Platform
  title: string
  summary: string | null
  status: ContentStatus
  featured: boolean
  sort_order: number
  hero_image: string | null
  published_at: string | null
  archived_at: string | null
  created_at: string
  updated_at: string
}

export type Insight = {
  id: string
  title: string
  summary: string | null
  body: string | null
  category: string | null
  platform: Platform | null
  source_name: string | null
  source_url: string | null
  read_time: string | null
  status: ContentStatus
  featured: boolean
  published_at: string | null
  archived_at: string | null
  created_at: string
  updated_at: string
}

export type MediaAsset = {
  id: string
  filename: string
  storage_path: string
  storage_bucket: string
  label: string | null
  alt_text: string | null
  category: string | null
  usage_context: string | null
  archived: boolean
  created_at: string
  updated_at: string
}

export type AdminLog = {
  id: string
  action: string
  entity_type: string | null
  entity_id: string | null
  payload: Record<string, unknown> | null
  created_at: string
}

export type StatusCounts = {
  draft: number
  scheduled: number
  live: number
  archived: number
}
