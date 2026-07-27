import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'villageProfile',
  title: 'Profil Kewilayahan',
  type: 'document',
  fields: [
    defineField({ name: 'badge', title: 'Badge Label', type: 'string', initialValue: 'Regional & Data' }),
    defineField({ name: 'pageTitle', title: 'Judul Halaman', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'pageDescription', title: 'Deskripsi Halaman', type: 'text' }),
    defineField({ name: 'mapTitle', title: 'Judul Peta', type: 'string', initialValue: 'Peta Kewilayahan' }),
    defineField({ name: 'mapDescription', title: 'Deskripsi Peta', type: 'text' }),
  ],
  preview: {
    select: { title: 'pageTitle' },
  },
});
