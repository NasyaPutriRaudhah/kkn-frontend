import { NextRequest, NextResponse } from 'next/server';

const STRAPI_URL = (process.env.NEXT_PUBLIC_STRAPI_URL ?? '').replace(/\/+$/, '');

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const search = request.nextUrl.search;
  const url = `${STRAPI_URL}/api/${slug.join('/')}${search}`;

  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 204 });
}
