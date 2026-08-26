import { supabase } from '../lib/supabase'
import { useState } from 'react'

export default function Dashboard() {
  const [message, setMessage] = useState('')

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ color: '#e6eef8' }}>Upload dashboard (scaffold)</h1>
      <p style={{ color: '#9aa0a6' }}>
        This page is a scaffold for the authenticated upload dashboard. To enable uploads:
      </p>
      <ol style={{ color: '#9aa0a6' }}>
        <li>1) Create a Supabase project and add Storage buckets.</li>
        <li>2) Set environment variables NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in Vercel/Netlify or in .env.local.</li>
        <li>3) Implement file input and call supabase.storage.from(bucket).upload(...) from this page.</li>
      </ol>

      <div style={{ marginTop: 16 }}>
        <label style={{ color: '#cbd5e1' }}>Example status</label>
        <div style={{ marginTop: 8, color: '#9aa0a6' }}>{message || 'No uploads yet — add Supabase keys to enable.'}</div>
      </div>
    </div>
  )
}
