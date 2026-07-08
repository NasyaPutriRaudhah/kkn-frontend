export type SanityNews = {
  _id: string;
  title: string;
  slug?: { current: string };
  content?: string;
  publishedDate?: string;
  thumbnailUrl?: string | null;
};

export type SanityTourism = {
  _id: string;
  name: string;
  description?: string;
  location?: string;
  category?: string;
  imageUrl?: string | null;
};

export type SanityKknProgram = {
  _id: string;
  title: string;
  description?: string;
  date?: string;
  documentationUrls?: (string | null)[];
};

export type SanityProfil = {
  _id: string;
  visi?: string;
  misi?: string;
};

export type SanityStrukturOrganisasi = {
  _id: string;
  nama: string;
  jabatan?: string;
  fotoUrl?: string | null;
};

export type SanityGallery = {
  _id: string;
  title: string;
  category?: string;
  images?: (string | null)[];
};

export type SanityVillage = {
  _id: string;
  name: string;
  tagline?: string;
  description?: string;
  population?: string;
  area?: string;
  geoType?: string;
  features?: string;
  imageUrl?: string | null;
};

export type SanityProdukHukum = {
  _id: string;
  namaDokumen: string;
  desa: string;
  fileUrl?: string | null;
};

export type SanityFacility = {
  _id: string;
  name: string;
  type: string;
  description?: string;
  desaLocation?: string;
  googleMapsLink?: string;
  imageUrl?: string | null;
};

export type SanityUmkm = {
  _id: string;
  name: string;
  description?: string;
  category?: string;
  contact?: string;
  location?: string;
  imageUrl?: string | null;
};

export type SanityMangrove = {
  _id: string;
  jenis: string;
  ciriCiri?: string;
  penanaman?: string;
  perawatan?: string;
  pemanfaatanLanjutan?: string;
  fotoDaunUrl?: string | null;
  fotoBuahBungaUrl?: string | null;
  fotoAkarUrl?: string | null;
  fotoKeseluruhanUrl?: string | null;
};

export type SanityResourceSector = {
  _id: string;
  code: string;
  title: string;
  value?: string;
  color?: string;
  description?: string;
};

export type SanityPublicService = {
  _id: string;
  nomor: number;
  kategori: string;
  jenisPelayanan: string;
  persyaratan?: string;
  keterangan?: string;
};

export type SanitySectorItem = {
  _id: string;
  sector: string;
  title: string;
  description?: string;
  potensi?: string;
  imageUrl?: string | null;
};

export type SanityCalendarEvent = {
  _id: string;
  title: string;
  description?: string;
  eventDate: string;
  color?: string;
};
