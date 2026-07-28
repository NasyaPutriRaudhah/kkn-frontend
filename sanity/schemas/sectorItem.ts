import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'sectorItem',
  title: 'Item Sektor',
  type: 'document',
  fields: [
    defineField({
      name: 'sector',
      title: 'Sektor',
      type: 'reference',
      to: [{ type: 'resourceSector' }],
      validation: (r) => r.required(),
    }),
    defineField({ name: 'title', title: 'Nama', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'image', title: 'Gambar', type: 'image' }),
    defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
    defineField({ name: 'potensi', title: 'Potensi', type: 'text' }),
  ],
  preview: {
    select: { title: 'title', sectorTitle: 'sector.title' },
    prepare({ title, sectorTitle }) {
      return { title, subtitle: sectorTitle };
    },
  },
});
