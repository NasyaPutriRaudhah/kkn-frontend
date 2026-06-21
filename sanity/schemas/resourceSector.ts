import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'resourceSector',
  title: 'Sektor SDA',
  type: 'document',
  fields: [
    defineField({ name: 'code', title: 'Kode', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'title', title: 'Judul', type: 'string' }),
    defineField({ name: 'value', title: 'Nilai (%)', type: 'string' }),
    defineField({ name: 'color', title: 'Warna', type: 'string' }),
    defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
    defineField({ name: 'orderRank', title: 'Urutan', type: 'number' }),
  ],
});
