import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'statistic',
  title: 'Statistik',
  type: 'document',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'value', title: 'Nilai', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'sub', title: 'Sub Label', type: 'string' }),
    defineField({ name: 'icon', title: 'Icon', type: 'string', options: {
      list: [
        { title: 'Populasi (Users)', value: 'users' },
        { title: 'Luas Wilayah (Map)', value: 'map' },
        { title: 'Desa (Compass)', value: 'compass' },
        { title: 'ASN (Briefcase)', value: 'briefcase' },
        { title: 'Perangkat Desa (Building)', value: 'building' },
        { title: 'Event (Calendar)', value: 'calendar' },
        { title: 'Sekolah (GraduationCap)', value: 'graduation' },
        { title: 'Rumah Sakit (Hospital)', value: 'hospital' },
        { title: 'Jalan (Road)', value: 'road' },
      ],
    }}),
    defineField({ name: 'dark', title: 'Background Gelap', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Urutan', type: 'number' }),
  ],
  orderings: [
    { title: 'Urutan', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
});
