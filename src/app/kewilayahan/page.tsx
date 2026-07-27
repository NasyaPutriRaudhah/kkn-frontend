import { sanityFetchServer } from '~/sanity/lib/fetch';
import { villagesQuery, villageProfileQuery } from '~/sanity/lib/queries';
import type { SanityVillage, SanityVillageProfile } from '@/types/sanity';
import KewilayahanClient from './kewilayahan-client';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Kewilayahan | Sebatik Barat',
  description: 'Eksplorasi mendalam 4 desa mandiri yang menjadi pilar kedaulatan Sebatik Barat.',
};

export default async function KewilayahanPage() {
  const [villages, profile] = await Promise.all([
    sanityFetchServer<SanityVillage[]>(villagesQuery),
    sanityFetchServer<SanityVillageProfile>(villageProfileQuery),
  ]);
  return <KewilayahanClient villages={villages} profile={profile} />;
}
