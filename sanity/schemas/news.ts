import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'news',
  title: 'Berita',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Judul', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'content', title: 'Konten', type: 'text' }),
    defineField({ name: 'thumbnail', title: 'Thumbnail', type: 'image' }),
    defineField({ name: 'publishedDate', title: 'Tanggal Publikasi', type: 'date' }),
  ],
});
