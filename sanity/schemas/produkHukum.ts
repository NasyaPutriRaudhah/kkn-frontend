import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'produkHukum',
  title: 'Produk Hukum',
  type: 'document',
  fields: [
    defineField({ name: 'namaDokumen', title: 'Nama Dokumen', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'file', title: 'File', type: 'file' }),
  ],
});
