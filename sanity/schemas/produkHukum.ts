import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'produkHukum',
  title: 'Produk Hukum',
  type: 'document',
  fields: [
    defineField({ name: 'namaDokumen', title: 'Nama Dokumen', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'file', title: 'File', type: 'file' }),
    defineField({
      name: 'desa',
      title: 'Desa',
      type: 'string',
      options: {
        list: [
          { title: 'Desa Setabu', value: 'Setabu' },
          { title: 'Desa Bambangan', value: 'Bambangan' },
          { title: 'Desa Tembaring', value: 'Tembaring' },
          { title: 'Desa Binalawan', value: 'Binalawan' },
          { title: 'Desa Liang Bunyu', value: 'Liang Bunyu' },
        ],
      },
      validation: (r) => r.required(),
    }),
  ],
});
