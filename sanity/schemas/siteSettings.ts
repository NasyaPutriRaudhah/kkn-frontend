import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Pengaturan Situs',
  type: 'document',
  fields: [
    defineField({ name: 'address', title: 'Alamat', type: 'text' }),
    defineField({ name: 'phone', title: 'No. Telepon', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'facebook', title: 'URL Facebook', type: 'url' }),
    defineField({ name: 'twitter', title: 'URL Twitter / X', type: 'url' }),
    defineField({ name: 'instagram', title: 'URL Instagram', type: 'url' }),
    defineField({ name: 'youtube', title: 'URL YouTube', type: 'url' }),
    defineField({ name: 'tiktok', title: 'URL TikTok', type: 'url' }),
    defineField({ name: 'description', title: 'Deskripsi Singkat', type: 'text' }),
  ],
  preview: {
    prepare() {
      return { title: 'Pengaturan Situs' };
    },
  },
});
