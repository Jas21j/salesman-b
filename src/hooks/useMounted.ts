import { useState, useEffect } from 'react'

/**
 * useMounted — returns true only after the component has mounted on the client.
 *
 * Purpose: Prevents Framer Motion hydration mismatch. During SSR and initial
 * hydration, animated elements rendered with `initial={{ opacity: 0 }}` are
 * invisible. By gating animations behind `mounted`, we ensure the SSR render
 * is always fully visible and JS animations only start after hydration.
 */
export function useMounted(): boolean {
    const [mounted, setMounted] = useState(false)
    useEffect(() => { setMounted(true) }, [])
    return mounted
}
