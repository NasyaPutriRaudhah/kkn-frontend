import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'kknProgram',
  title: 'Program KKN',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Judul', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
    defineField({ name: 'date', title: 'Tanggal', type: 'date' }),
    defineField({ name: 'documentation', title: 'Dokumentasi', type: 'array', of: [{ type: 'image' }] }),
  ],
});
