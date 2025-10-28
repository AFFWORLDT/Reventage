import { NextResponse } from 'next/server';

export async function GET() {
  const API_BASE_URL = 'https://revantage-api.propfusion.io';
  const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjAzNSwicm9sZV9pZHMiOlsxMDBdLCJ0eXBlIjoiYWdlbnQiLCJleHAiOjE5MTQ3MDYyODB9.HomftCQdlLSR1LLuageO1uo_iJTYw59pktyFQ_cuK0I';

  try {
    const res = await fetch(`${API_BASE_URL}/agent/all`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`,
        'Content-Type': 'application/json',
      },
      // Ensure the request is made server-side without caching issues
      cache: 'no-store',
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ success: false, message: text || 'Upstream error' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error?.message || 'Failed to fetch agents' }, { status: 500 });
  }
}
