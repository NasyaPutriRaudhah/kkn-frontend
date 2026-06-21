import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'tourism',
  title: 'Wisata',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nama', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
    defineField({ name: 'image', title: 'Gambar', type: 'image' }),
    defineField({ name: 'location', title: 'Lokasi', type: 'string' }),
    defineField({ name: 'category', title: 'Kategori', type: 'string' }),
  ],
});
