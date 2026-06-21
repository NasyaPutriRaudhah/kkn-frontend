import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'umkm',
  title: 'UMKM',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nama', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
    defineField({ name: 'category', title: 'Kategori', type: 'string' }),
    defineField({ name: 'image', title: 'Gambar', type: 'image' }),
    defineField({ name: 'contact', title: 'Kontak', type: 'string' }),
    defineField({ name: 'location', title: 'Lokasi', type: 'string' }),
  ],
});
