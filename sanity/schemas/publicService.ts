import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'publicService',
  title: 'Layanan Publik',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Layanan',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
    }),
    defineField({
      name: 'icon',
      title: 'Ikon',
      type: 'string',
      description: 'Nama ikon dari Lucide React (contoh: FileText, BookUser, ScrollText)',
    }),
    defineField({
      name: 'orderRank',
      title: 'Urutan',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: 'Urutan', name: 'orderRank', by: [{ field: 'orderRank', direction: 'asc' }] },
  ],
});
