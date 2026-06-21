import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'calendarEvent',
  title: 'Event Kalender',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Judul', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
    defineField({ name: 'eventDate', title: 'Tanggal Event', type: 'date' }),
    defineField({ name: 'color', title: 'Warna (Tailwind)', type: 'string' }),
  ],
});
