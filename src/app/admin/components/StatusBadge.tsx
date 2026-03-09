import type { ContentStatus } from '@/lib/db/types'

const STATUS_STYLES: Record<ContentStatus, { bg: string; color: string; label: string }> = {
  live: { bg: 'rgba(34, 197, 94, 0.15)', color: '#22c55e', label: 'Live' },
  draft: { bg: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)', label: 'Draft' },
  scheduled: { bg: 'rgba(201, 169, 110, 0.15)', color: '#B8862A', label: 'Scheduled' },
  archived: { bg: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.25)', label: 'Archived' },
}

export default function StatusBadge({ status }: { status: ContentStatus }) {
  const style = STATUS_STYLES[status] ?? STATUS_STYLES.draft
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: 4,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        background: style.bg,
        color: style.color,
      }}
    >
      {style.label}
    </span>
  )
}
