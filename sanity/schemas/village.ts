import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'village',
  title: 'Desa',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nama', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
    defineField({ name: 'population', title: 'Populasi', type: 'string' }),
    defineField({ name: 'area', title: 'Luas (KM²)', type: 'string' }),
    defineField({ name: 'geoType', title: 'Tipe Geografis', type: 'string' }),
    defineField({ name: 'features', title: 'Fitur (dipisah koma)', type: 'string' }),
    defineField({ name: 'image', title: 'Gambar', type: 'image' }),
  ],
});
