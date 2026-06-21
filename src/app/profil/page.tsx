import { sanityFetchServer } from '~/sanity/lib/fetch';
import { profilQuery, strukturOrganisasiQuery } from '~/sanity/lib/queries';
import type { SanityProfil, SanityStrukturOrganisasi } from '@/types/sanity';

export const dynamic = 'force-dynamic';

export default async function ProfilePage() {
  let profil: SanityProfil | null = null;
  let struktur: SanityStrukturOrganisasi[] = [];

  try {
    const [profilData, strukturData] = await Promise.all([
      sanityFetchServer<SanityProfil>(profilQuery),
      sanityFetchServer<SanityStrukturOrganisasi[]>(strukturOrganisasiQuery),
    ]);
    profil = profilData;
    struktur = strukturData || [];
  } catch (error) {
    console.error("Failed to load profil", error);
  }

  if (!profil) {
    return (
      <main className="pt-32 pb-24 px-8 bg-stone-50 dark:bg-brand-creme min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black text-emerald-900 dark:text-stone-900">Profil belum tersedia</h1>
          <p className="mt-4 text-stone-600 dark:text-stone-600">
            Isi dan publish konten <strong>Profil</strong> di Studio Sanity untuk menampilkan halaman ini.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 px-8 bg-stone-50 dark:bg-brand-creme min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <span className="inline-block px-4 py-1.5 bg-emerald-50 dark:bg-emerald-300/30 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-100">
            Kecamatan Sebatik Barat
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-emerald-900 dark:text-stone-900 mb-8 tracking-tighter leading-none">
            Filosofi & <br />Profil.
          </h1>
          <p className="text-stone-500 dark:text-stone-600 max-w-2xl text-xl font-light leading-relaxed">
            Visi, misi, serta struktur organisasi sebagai fondasi pembangunan berkelanjutan di batas kedaulatan.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <article className="bg-white dark:bg-brand-creme rounded-[3rem] p-12 border border-emerald-50 dark:border-stone-300 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-emerald-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
            </div>
            <h2 className="text-3xl font-black text-emerald-900 dark:text-stone-900 mb-6 tracking-tight">Visi</h2>
            <p className="text-stone-600 dark:text-stone-600 leading-relaxed text-lg font-light whitespace-pre-line">
              {profil.visi || "-"}
            </p>
          </article>

          <article className="bg-white dark:bg-brand-creme rounded-[3rem] p-12 border border-emerald-50 dark:border-stone-300 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-emerald-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/><path d="m15 5 3 3"/></svg>
            </div>
            <h2 className="text-3xl font-black text-emerald-900 dark:text-stone-900 mb-6 tracking-tight">Misi</h2>
            <p className="text-stone-600 dark:text-stone-600 leading-relaxed text-lg font-light whitespace-pre-line">
              {profil.misi || "-"}
            </p>
          </article>
        </section>

        {struktur.length > 0 && (
          <section>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 dark:text-stone-900 mb-4">Struktur Organisasi</h2>
              <p className="text-stone-500 dark:text-stone-600 max-w-xl mx-auto">
                Perangkat kecamatan yang berkomitmen melayani masyarakat Sebatik Barat.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {struktur.map((anggota) => (
                <article
                  key={anggota._id}
                  className="bg-white dark:bg-brand-creme rounded-[2.5rem] p-8 border border-emerald-50 dark:border-stone-300 shadow-sm hover:shadow-xl transition-all duration-500 text-center group"
                >
                  <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden bg-stone-100 dark:bg-stone-200 ring-4 ring-emerald-50 dark:ring-stone-300 group-hover:ring-emerald-200 transition-all">
                    {anggota.fotoUrl ? (
                      <img
                        src={anggota.fotoUrl}
                        alt={anggota.nama}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-stone-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-black text-emerald-900 dark:text-stone-900 mb-2">{anggota.nama}</h3>
                  <p className="text-emerald-500 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest">
                    {anggota.jabatan}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
