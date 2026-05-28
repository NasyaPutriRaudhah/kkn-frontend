import HomeClient from './home-client';
import { fetchStrapiCollectionSafe } from '../lib/strapi';
import type { KknProgramAttributes, NewsAttributes, TourismAttributes } from '../types/strapi';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const [newsItems, tourismItems, kknItems] = await Promise.all([
    fetchStrapiCollectionSafe<NewsAttributes>(
      '/api/newss?populate=thumbnail&sort=published_date:desc&pagination[pageSize]=3'
    ),
    fetchStrapiCollectionSafe<TourismAttributes>(
      '/api/tourisms?populate=image&pagination[pageSize]=3'
    ),
    fetchStrapiCollectionSafe<KknProgramAttributes>(
      '/api/kkn-programs?populate=documentation&sort=date:desc&pagination[pageSize]=3'
    ),
  ]);

  return <HomeClient newsItems={newsItems} tourismItems={tourismItems} kknItems={kknItems} />;
}
