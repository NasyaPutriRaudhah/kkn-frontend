import { sanityFetchServer } from '~/sanity/lib/fetch';
import { villagesQuery } from '~/sanity/lib/queries';
import type { SanityVillage } from '@/types/sanity';
import KewilayahanClient from './kewilayahan-client';

export const metadata = {
  title: 'Kewilayahan | Sebatik Barat',
  description: 'Eksplorasi mendalam 4 desa mandiri yang menjadi pilar kedaulatan Sebatik Barat.',
};

export default async function KewilayahanPage() {
  const villages = await sanityFetchServer<SanityVillage[]>(villagesQuery);
  return <KewilayahanClient villages={villages} />;
}
