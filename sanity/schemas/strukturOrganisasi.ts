import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'strukturOrganisasi',
  title: 'Struktur Organisasi',
  type: 'document',
  fields: [
    defineField({ name: 'nama', title: 'Nama', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'jabatan', title: 'Jabatan', type: 'string' }),
    defineField({ name: 'foto', title: 'Foto', type: 'image' }),
    defineField({ name: 'orderRank', title: 'Urutan', type: 'number' }),
  ],
});
