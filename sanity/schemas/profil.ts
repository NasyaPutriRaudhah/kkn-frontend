import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'profil',
  title: 'Profil',
  type: 'document',
  fields: [
    defineField({ name: 'visi', title: 'Visi', type: 'text' }),
    defineField({ name: 'misi', title: 'Misi', type: 'text' }),
  ],
});
