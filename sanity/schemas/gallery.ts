import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'gallery',
  title: 'Galeri',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Judul', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'category', title: 'Kategori', type: 'string' }),
    defineField({ name: 'images', title: 'Gambar', type: 'array', of: [{ type: 'image' }] }),
  ],
});
