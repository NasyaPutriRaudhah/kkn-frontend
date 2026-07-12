export const newsQuery = `*[_type == "news"] | order(publishedDate desc) [0...3] {
  _id,
  title,
  slug,
  content,
  publishedDate,
  "thumbnailUrl": thumbnail.asset->url
}`;

export const tourismQuery = `*[_type == "tourism"] | order(_createdAt desc) [0...3] {
  _id,
  name,
  description,
  location,
  category,
  "imageUrl": image.asset->url
}`;

export const kknProgramsQuery = `*[_type == "kknProgram"] | order(date desc) [0...3] {
  _id,
  title,
  description,
  date,
  "documentationUrls": documentation[].asset->url
}`;

export const profilQuery = `*[_type == "profil"][0] {
  _id,
  visi,
  misi
}`;

export const strukturOrganisasiQuery = `*[_type == "strukturOrganisasi"] | order(orderRank) {
  _id,
  nama,
  jabatan,
  "fotoUrl": foto.asset->url
}`;

export const galleriesQuery = `*[_type == "gallery"] | order(_createdAt desc) {
  _id,
  title,
  category,
  "images": images[].asset->url
}`;

export const villagesQuery = `*[_type == "village"] | order(name asc) {
  _id,
  name,
  tagline,
  description,
  population,
  area,
  geoType,
  features,
  "imageUrl": image.asset->url
}`;

export const produkHukumQuery = `*[_type == "produkHukum"] | order(_createdAt desc) {
  _id,
  namaDokumen,
  desa,
  "fileUrl": file.asset->url
}`;

export const facilitiesQuery = `*[_type == "facility"] | order(_createdAt desc) {
  _id,
  name,
  type,
  description,
  desaLocation,
  googleMapsLink,
  "imageUrl": image.asset->url
}`;

export const umkmQuery = `*[_type == "umkm"] | order(_createdAt desc) {
  _id,
  name,
  description,
  category,
  contact,
  location,
  "imageUrl": image.asset->url
}`;

export const mangrovesQuery = `*[_type == "mangrove"] | order(_createdAt desc) {
  _id,
  jenis,
  ciriCiri,
  penanaman,
  perawatan,
  pemanfaatan,
  "fotoDaunUrl": fotoDaun.asset->url,
  "fotoBuahBungaUrls": fotoBuahBunga[].asset->url,
  "fotoAkarUrl": fotoAkar.asset->url,
  "fotoKeseluruhanUrl": fotoKeseluruhan.asset->url
}`;

export const resourceSectorsQuery = `*[_type == "resourceSector"] | order(orderRank) {
  _id,
  code,
  title,
  value,
  color,
  description
}`;

export const calendarEventsQuery = `*[_type == "calendarEvent"] | order(eventDate asc) {
  _id,
  title,
  description,
  eventDate,
  color
}`;


export const publicServicesQuery = `*[_type == "publicService"] | order(nomor asc) {
  _id,
  nomor,
  kategori,
  jenisPelayanan,
  persyaratan,
  keterangan
}`;

export const allNewsQuery = `*[_type == "news"] | order(publishedDate desc) {
  _id,
  title,
  slug,
  content,
  publishedDate,
  "thumbnailUrl": thumbnail.asset->url
}`;

export const newsBySlugQuery = `*[_type == "news" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  content,
  publishedDate,
  "thumbnailUrl": thumbnail.asset->url
}`;

export const sectorItemsQuery = `*[_type == "sectorItem" && sector == $sector] | order(_createdAt desc) {
  _id,
  sector,
  title,
  description,
  potensi,
  "imageUrl": image.asset->url
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  _id,
  address,
  phone,
  email,
  facebook,
  twitter,
  instagram,
  youtube,
  tiktok,
  description
}`;

export const statisticsQuery = `*[_type == "statistic"] | order(order asc) {
  _id,
  label,
  value,
  sub,
  icon,
  dark
}`;
