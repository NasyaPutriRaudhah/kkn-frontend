import HomeClient from './home-client';
import { sanityFetchServer } from '~/sanity/lib/fetch';
import { newsQuery, tourismQuery, kknProgramsQuery, statisticsQuery, profilQuery } from '~/sanity/lib/queries';
import type { SanityNews, SanityTourism, SanityKknProgram, SanityStatistic, SanityProfil } from '@/types/sanity';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const [newsItems, tourismItems, kknItems, statistics, profil] = await Promise.all([
    sanityFetchServer<SanityNews[]>(newsQuery),
    sanityFetchServer<SanityTourism[]>(tourismQuery),
    sanityFetchServer<SanityKknProgram[]>(kknProgramsQuery),
    sanityFetchServer<SanityStatistic[]>(statisticsQuery),
    sanityFetchServer<SanityProfil>(profilQuery),
  ]);

  return <HomeClient newsItems={newsItems} tourismItems={tourismItems} kknItems={kknItems} statistics={statistics} profil={profil} />;
}
