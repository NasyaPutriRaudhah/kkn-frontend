export type StrapiMediaFormat = {
  url: string;
  width?: number;
  height?: number;
};

export type StrapiMedia = {
  id: number;
  url: string;
  alternativeText?: string | null;
  formats?: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  };
};

export type StrapiSingleResponse<T> = {
  data: {
    id: number;
    attributes?: T;
    documentId?: string;
  } | null;
};

export type StrapiCollectionResponse<T> = {
  data: Array<{
    id: number;
    attributes?: T;
    documentId?: string;
  }>;
};

export type VillageProfileAttributes = {
  district_name: string;
  description: string;
  vision?: string;
  mission?: string;
  map_embed?: string;
  hero_image?: StrapiMedia | null;
};

export type ProfilAttributes = {
  visi: string;
  misi: string;
};

export type StrukturOrganisasiAttributes = {
  nama: string;
  jabatan: string;
  foto?: StrapiMedia | null;
};

export type UmkmAttributes = {
  name: string;
  description?: string;
  category?: string;
  image?: StrapiMedia | null;
  contact?: string;
  location?: string;
};

export type FacilityAttributes = {
  name: string;
  type?: string;
  description?: string;
  image?: StrapiMedia | null;
  desa_location?: string;
  google_maps_link?: string;
};

export type TourismAttributes = {
  name: string;
  description?: string;
  image?: StrapiMedia | null;
  location?: string;
  category?: string;
};

export type NewsAttributes = {
  title: string;
  slug: string;
  content?: string;
  thumbnail?: StrapiMedia | null;
  published_date?: string;
};

export type GalleryAttributes = {
  title: string;
  category?: string;
  images?: StrapiMedia[];
};

export type KknProgramAttributes = {
  title: string;
  description?: string;
  date?: string;
  documentation?: StrapiMedia[];
};

export type VillageAttributes = {
  name: string;
  tagline?: string;
  description?: string;
  population?: string;
  area?: string;
  geo_type?: string;
  features?: string;
  image?: StrapiMedia | null;
};

export type ResourceSectorAttributes = {
  code: string;
  title: string;
  value?: string;
  color?: string;
  description?: string;
};

export type MangroveAttributes = {
  jenis: string;
  foto?: StrapiMedia | null;
  ciri_ciri?: string;
  potensi_pemanfaatan?: string;
};

export type CalendarEventAttributes = {
  title: string;
  description?: string;
  event_date: string;
  color?: string;
};

export type ProdukHukumAttributes = {
  nama_dokumen: string;
  file?: StrapiMedia | null;
};
