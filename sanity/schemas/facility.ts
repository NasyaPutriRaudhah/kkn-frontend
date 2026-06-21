import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'facility',
  title: 'Fasilitas',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nama', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'type', title: 'Tipe', type: 'string', options: { list: ['pendidikan', 'olahraga', 'kesehatan', 'transportasi', 'ibadah'] } }),
    defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
    defineField({ name: 'image', title: 'Gambar', type: 'image' }),
    defineField({ name: 'desaLocation', title: 'Lokasi Desa', type: 'string' }),
    defineField({ name: 'googleMapsLink', title: 'Google Maps Link', type: 'url' }),
  ],
});
