import { sanityFetchServer } from '~/sanity/lib/fetch';
import { allNewsQuery } from '~/sanity/lib/queries';
import type { SanityNews } from '@/types/sanity';
import BeritaListClient from './berita-list-client';

export const metadata = {
  title: 'Berita Terkini | Sebatik Barat',
  description: 'Informasi terbaru seputar kegiatan pemerintahan dan masyarakat Kecamatan Sebatik Barat.',
};

export default async function BeritaPage() {
  const newsItems = await sanityFetchServer<SanityNews[]>(allNewsQuery);
  return <BeritaListClient newsItems={newsItems} />;
}
