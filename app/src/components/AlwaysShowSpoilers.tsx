import { useSpoilers } from '../hooks/useSpoilers'

export default function AlwaysShowSpoilers() {
  const { alwaysShowSpoilers, setAlwaysShowSpoilers } = useSpoilers()
  return (
    <label className="spoiler-preference" title="Show every spoiler across the documentation">
      <input
        type="checkbox"
        checked={alwaysShowSpoilers}
        onChange={event => setAlwaysShowSpoilers(event.target.checked)}
        className="spoiler-preference-input"
      />
      <span className="spoiler-preference-box" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none" focusable="false">
          <path d="M3 8.5 6.5 12 13 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>Always show spoilers</span>
    </label>
  )
}
