import HomeClient from './home-client';
import { sanityFetchServer } from '~/sanity/lib/fetch';
import { newsQuery, tourismQuery, kknProgramsQuery } from '~/sanity/lib/queries';
import type { SanityNews, SanityTourism, SanityKknProgram } from '@/types/sanity';

export default async function HomePage() {
  const [newsItems, tourismItems, kknItems] = await Promise.all([
    sanityFetchServer<SanityNews[]>(newsQuery),
    sanityFetchServer<SanityTourism[]>(tourismQuery),
    sanityFetchServer<SanityKknProgram[]>(kknProgramsQuery),
  ]);

  return <HomeClient newsItems={newsItems} tourismItems={tourismItems} kknItems={kknItems} />;
}
