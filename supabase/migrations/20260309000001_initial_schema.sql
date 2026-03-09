-- Salesman Solutions — Phase 2 Initial Schema
-- Run this in the Supabase dashboard SQL Editor or via `npx supabase db push`

-- ─── SITE SETTINGS ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value text,
  updated_at timestamptz DEFAULT now()
);

-- Seed default settings
INSERT INTO site_settings (key, value) VALUES
  ('contact_email', 'JaheimSalesman@gmail.com'),
  ('contact_phone', '954-830-6310'),
  ('contact_location', 'Tallahassee, FL · South Florida, FL'),
  ('social_linkedin', ''),
  ('seo_title', 'Salesman Solutions — Global Venture Platform'),
  ('seo_description', 'Salesman Solutions is a global venture platform that builds operational systems that improve industries.')
ON CONFLICT (key) DO NOTHING;

-- ─── SITE SECTIONS ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS site_sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section_key text UNIQUE NOT NULL,
  visible boolean DEFAULT true,
  sort_order int DEFAULT 0,
  label text,
  updated_at timestamptz DEFAULT now()
);

INSERT INTO site_sections (section_key, label, sort_order) VALUES
  ('hero', 'Hero', 1),
  ('cost_of_complexity', 'Cost of Complexity', 2),
  ('platform_architecture', 'Platform Architecture', 3),
  ('deployment_domains', 'Deployment Domains', 4),
  ('doctrine', 'The Method (Doctrine)', 5),
  ('proof_of_system', 'Proof of System', 6),
  ('founder_block', 'Founder Block', 7),
  ('statistics', 'Statistics', 8),
  ('insights_preview', 'Insights Preview', 9),
  ('cta_band', 'CTA Band', 10)
ON CONFLICT (section_key) DO NOTHING;

-- ─── SOLUTIONS ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS solutions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  platform text NOT NULL CHECK (platform IN ('IRIS', 'ASSAN')),
  title text NOT NULL,
  summary text,
  body text,
  status text DEFAULT 'live' CHECK (status IN ('draft', 'scheduled', 'live', 'archived')),
  featured boolean DEFAULT false,
  sort_order int DEFAULT 0,
  hero_image text,
  published_at timestamptz,
  archived_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

INSERT INTO solutions (slug, platform, title, summary, status, featured, sort_order) VALUES
  ('iris', 'IRIS', 'IRIS — Intelligent Resource Infrastructure Systems',
   'Digital infrastructure and intelligence platform for embedded system development, dashboards, analytics, and digital optimization.',
   'live', true, 1),
  ('assan', 'ASSAN', 'ASSAN — Applied Systems for Service and Network Operations',
   'Operational systems and deployment platform for property, logistics, hospitality, labor, and field execution.',
   'live', true, 2)
ON CONFLICT (slug) DO NOTHING;

-- ─── CASE STUDIES ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  platform text NOT NULL CHECK (platform IN ('IRIS', 'ASSAN')),
  title text NOT NULL,
  summary text,
  status text DEFAULT 'live' CHECK (status IN ('draft', 'scheduled', 'live', 'archived')),
  featured boolean DEFAULT false,
  sort_order int DEFAULT 0,
  hero_image text,
  published_at timestamptz,
  archived_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

INSERT INTO case_studies (slug, platform, title, status, featured, sort_order) VALUES
  ('first-mile', 'ASSAN', 'First Mile Operations', 'live', true, 1),
  ('livebetter', 'ASSAN', 'LiveBetter Property Systems', 'live', false, 2),
  ('saatva', 'ASSAN', 'Saatva Fulfillment Operations', 'live', false, 3),
  ('miss-scholastic-america', 'IRIS', 'Miss Scholastic America', 'live', false, 4)
ON CONFLICT (slug) DO NOTHING;

-- ─── INSIGHTS ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS insights (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  summary text,
  body text,
  category text,
  platform text CHECK (platform IN ('IRIS', 'ASSAN') OR platform IS NULL),
  source_name text,
  source_url text,
  read_time text,
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'live', 'archived')),
  featured boolean DEFAULT false,
  published_at timestamptz,
  archived_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- ─── MEDIA ASSETS ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS media_assets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  filename text NOT NULL,
  storage_path text NOT NULL,
  storage_bucket text DEFAULT 'media',
  label text,
  alt_text text,
  category text,
  usage_context text,
  archived boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- ─── ADMIN LOGS ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS admin_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  action text NOT NULL,
  entity_type text,
  entity_id uuid,
  payload jsonb,
  created_at timestamptz DEFAULT now()
);

-- ─── ROW LEVEL SECURITY ───────────────────────────────────────────────────────
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE solutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE insights ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_logs ENABLE ROW LEVEL SECURITY;

-- Public read access for live content only
CREATE POLICY "Public can read live solutions"
  ON solutions FOR SELECT
  USING (status = 'live');

CREATE POLICY "Public can read live case_studies"
  ON case_studies FOR SELECT
  USING (status = 'live');

CREATE POLICY "Public can read live insights"
  ON insights FOR SELECT
  USING (status = 'live');

CREATE POLICY "Public can read site_settings"
  ON site_settings FOR SELECT
  USING (true);

CREATE POLICY "Public can read site_sections"
  ON site_sections FOR SELECT
  USING (true);

-- Service role (admin) has full access — granted via service_role key (bypasses RLS)

-- ─── STORAGE BUCKET ──────────────────────────────────────────────────────────
-- Create the media storage bucket
-- Note: Run this separately in the Supabase dashboard Storage section
-- or uncomment and run via service role:
-- INSERT INTO storage.buckets (id, name, public) VALUES ('media', 'media', false)
-- ON CONFLICT (id) DO NOTHING;
