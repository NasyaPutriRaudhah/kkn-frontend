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
          { title: 'Kependudukan', value: 'Kependudukan' },
          { title: 'Administrasi', value: 'Administrasi' },
          { title: 'Kesehatan', value: 'Kesehatan' },
          { title: 'Pendidikan', value: 'Pendidikan' },
          { title: 'Sosial', value: 'Sosial' },
          { title: 'Hukum', value: 'Hukum' },
          { title: 'Pertanian', value: 'Pertanian' },
          { title: 'Lainnya', value: 'Lainnya' },
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
