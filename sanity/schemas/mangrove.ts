import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'mangrove',
  title: 'Mangrove',
  type: 'document',
  fields: [
    defineField({ name: 'jenis', title: 'Jenis', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'foto', title: 'Foto', type: 'image' }),
    defineField({ name: 'ciriCiri', title: 'Ciri-ciri', type: 'text' }),
    defineField({ name: 'potensiPemanfaatan', title: 'Potensi Pemanfaatan', type: 'text' }),
  ],
});
