import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'mangrove',
  title: 'Mangrove',
  type: 'document',
  fields: [
    defineField({ name: 'jenis', title: 'Jenis', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'fotoDaun', title: 'Foto 1 (Daun)', type: 'image' }),
    defineField({ name: 'fotoBuahBunga', title: 'Foto 2 (Buah/Bunga)', type: 'array', of: [{ type: 'image' }], validation: (r) => r.max(2) }),
    defineField({ name: 'fotoAkar', title: 'Foto 3 (Akar)', type: 'image' }),
    defineField({ name: 'fotoKeseluruhan', title: 'Foto 4 (Keseluruhan)', type: 'image' }),
    defineField({ name: 'ciriCiri', title: 'Ciri-ciri', type: 'text' }),
    defineField({ name: 'penanaman', title: 'Penanaman', type: 'text' }),
    defineField({ name: 'perawatan', title: 'Perawatan', type: 'text' }),
    defineField({ name: 'pemanfaatan', title: 'Pemanfaatan', type: 'text' }),
  ],
  preview: {
    select: { title: 'jenis' },
  },
});
