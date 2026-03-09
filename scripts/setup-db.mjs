/**
 * Salesman Solutions — Database Setup Script
 *
 * Applies the initial schema to your Supabase project.
 * Requires SUPABASE_SERVICE_ROLE_KEY to be set in .env.local
 *
 * Usage: node scripts/setup-db.mjs
 */

import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Load .env.local manually
try {
  const envContent = readFileSync(resolve(__dirname, '../.env.local'), 'utf-8')
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const [key, ...rest] = trimmed.split('=')
    process.env[key.trim()] = rest.join('=').trim()
  }
} catch {
  console.error('Could not read .env.local — ensure it exists with SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local')
  process.exit(1)
}

if (SERVICE_ROLE_KEY === 'REPLACE_WITH_SERVICE_ROLE_KEY') {
  console.error('\n⚠️  You need to add your SUPABASE_SERVICE_ROLE_KEY to .env.local')
  console.error('Get it from: Supabase Dashboard → Project Settings → API → service_role key\n')
  process.exit(1)
}

const sqlPath = resolve(__dirname, '../supabase/migrations/20260309000001_initial_schema.sql')
const sql = readFileSync(sqlPath, 'utf-8')

console.log('Applying schema to Supabase project...')

// Supabase Management API - execute SQL
const projectRef = SUPABASE_URL.match(/https:\/\/([^.]+)\.supabase\.co/)?.[1]
if (!projectRef) {
  console.error('Could not extract project ref from SUPABASE_URL')
  process.exit(1)
}

const response = await fetch(
  `https://api.supabase.com/v1/projects/${projectRef}/database/query`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // This requires a Supabase personal access token, not the service role key.
      // See: https://supabase.com/dashboard/account/tokens
      'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
    },
    body: JSON.stringify({ query: sql }),
  }
)

if (!response.ok) {
  const text = await response.text()
  console.warn('\nManagement API approach failed (may need personal access token).')
  console.log('\n─── MANUAL SETUP INSTRUCTIONS ────────────────────────────────')
  console.log('1. Open the Supabase Dashboard: https://supabase.com/dashboard')
  console.log(`2. Go to project: ${projectRef}`)
  console.log('3. Click "SQL Editor" in the left sidebar')
  console.log('4. Paste the contents of: supabase/migrations/20260309000001_initial_schema.sql')
  console.log('5. Click "Run"')
  console.log('\nThis creates all tables, policies, and seed data.')
  console.log('──────────────────────────────────────────────────────────────\n')
} else {
  console.log('✓ Schema applied successfully!')
  console.log('\nNext step:')
  console.log('  Create the "media" storage bucket in Supabase Dashboard → Storage → New bucket')
  console.log('  Name: media | Public: false')
}
