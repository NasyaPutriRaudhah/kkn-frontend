import { createClient } from '@sanity/client';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config({ path: resolve(__dirname, '..', '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const villages = [
  {
    _type: 'village',
    name: 'Desa Binalawan',
    tagline: 'Pusat Pemerintahan & Ekonomi',
    description: 'Sebagai ibukota kecamatan, Binalawan menjadi pusat denyut nadi pemerintahan dan aktivitas komersial. Infrastruktur yang mapan menjadikannya desa percontohan digital.',
    population: '3,332',
    area: '18.99',
    geoType: 'Desa',
    features: 'Pusat Perbelanjaan, Layanan Publik Terpadu, Akses Pendidikan Tinggi',
  },
  {
    _type: 'village',
    name: 'Desa Liang Bunyu',
    tagline: 'Mutiara Pesisir & Perikanan',
    description: 'Terkenal dengan garis pantainya yang indah dan komunitas nelayan yang tangguh. Liang Bunyu adalah produsen utama rumput laut dan hasil laut berkualitas tinggi.',
    population: '3,424',
    area: '17.84',
    geoType: 'Desa',
    features: 'Wisata Bahari, Sentra Rumput Laut, Kuliner Seafood',
  },
  {
    _type: 'village',
    name: 'Desa Setabu',
    tagline: 'Agribisnis & Perkebunan',
    description: 'Bentang alam hijau yang mendominasi wilayah ini menjadikannya paru-paru Sebatik Barat. Komoditas kakao dan kelapa sawit menjadi tulang punggung ekonomi desa.',
    population: '4,471',
    area: '34.56',
    geoType: 'Desa',
    features: 'Industri Kakao, Ekowisata Hutan, Produktivitas Pangan',
  },
  {
    _type: 'village',
    name: 'Desa Bambangan',
    tagline: 'Gerbang Transportasi & Logistik',
    description: 'Lokasi Dermaga Bambangan menjadikannya titik konektivitas vital antara Pulau Sebatik dan Kabupaten Nunukan. Transformasi logistik menjadi fokus utama pembangunan.',
    population: '2,859',
    area: '21.88',
    geoType: 'Desa',
    features: 'Pelabuhan Utama, Hub Pergudangan, Transit Wisata',
  },
];

const villageProfile = {
  _type: 'villageProfile',
  _id: 'villageProfile-main',
  badge: 'Regional & Data',
  pageTitle: 'Data Terpadu.',
  pageDescription: 'Eksplorasi mendalam 4 desa mandiri yang menjadi pilar kedaulatan Sebatik Barat.',
  mapTitle: 'Peta Kewilayahan',
  mapDescription: 'Strategis di garda terdepan, Sebatik Barat membawahi 4 desa mandiri yang terus berkembang pesat.',
};

async function seed() {
  console.log('Seeding village profile...');
  await client.createOrReplace(villageProfile);
  console.log('  ✓ villageProfile seeded');

  for (const village of villages) {
    console.log(`Seeding ${village.name}...`);
    const existing = await client.fetch(`*[_type == "village" && name == $name][0]._id`, { name: village.name });
    if (existing) {
      console.log(`  ⏭ ${village.name} already exists, skipping`);
    } else {
      await client.create(village);
      console.log(`  ✓ ${village.name} created`);
    }
  }

  console.log('\nDone! Refresh /kewilayahan to see the data.');
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
