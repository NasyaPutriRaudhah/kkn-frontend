import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'publicService',
  title: 'Layanan Publik',
  type: 'document',
  fields: [
    defineField({
      name: 'nomor',
      title: 'Nomor',
      type: 'number',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'kategori',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Kasi Ekonomi', value: 'Kasi Ekonomi' },
          { title: 'Kasi Kesra', value: 'Kasi Kesra' },
          { title: 'Kasi Trantib', value: 'Kasi Trantib' },
          { title: 'Kasi Pemerintah', value: 'Kasi Pemerintah' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'jenisPelayanan',
      title: 'Jenis Pelayanan',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'persyaratan',
      title: 'Persyaratan',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'keterangan',
      title: 'Keterangan',
      type: 'text',
      rows: 3,
    }),
  ],
  orderings: [
    { title: 'Nomor', name: 'nomor', by: [{ field: 'nomor', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'jenisPelayanan', subtitle: 'kategori' },
  },
});
