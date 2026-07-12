import HomeClient from './home-client';
import { sanityFetchServer } from '~/sanity/lib/fetch';
import { newsQuery, tourismQuery, kknProgramsQuery, statisticsQuery } from '~/sanity/lib/queries';
import type { SanityNews, SanityTourism, SanityKknProgram, SanityStatistic } from '@/types/sanity';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const [newsItems, tourismItems, kknItems, statistics] = await Promise.all([
    sanityFetchServer<SanityNews[]>(newsQuery),
    sanityFetchServer<SanityTourism[]>(tourismQuery),
    sanityFetchServer<SanityKknProgram[]>(kknProgramsQuery),
    sanityFetchServer<SanityStatistic[]>(statisticsQuery),
  ]);

  return <HomeClient newsItems={newsItems} tourismItems={tourismItems} kknItems={kknItems} statistics={statistics} />;
}
