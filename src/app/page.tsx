import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export const revalidate = 0; // Para asegurar datos frescos

export default async function HomePage() {
  const { data: productos, error } = await supabase.from('productos').select('*');

  if (error) {
    return <div className="p-8 text-red-500">Error al cargar productos: {error.message}</div>;
  }

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <header className="max-w-5xl mx-auto text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Lumina Gear - Tienda para Fotógrafos</h1>
        <p className="text-slate-400">Encuentra los mejores equipos para capturar momentos inolvidables.</p>
      </header>

      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {productos?.map((prod) => (
          <div key={prod.id} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 flex flex-col justify-between">
            <img src={prod.imagen_url} alt={prod.nombre} className="h-48 w-full object-cover" />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">{prod.nombre}</h2>
                <p className="text-emerald-400 font-bold mb-4">${prod.precio}</p>
              </div>
              <div className="flex gap-2">
                {/* Ruta dinámica 1: por ID */}
                <Link 
                  href={`/producto/${prod.id}`}
                  className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-sm py-2 rounded font-medium"
                >
                  Ver por ID
                </Link>
                {/* Ruta dinámica 2: por Slug */}
                <Link 
                  href={`/detalles/${prod.slug}`}
                  className="flex-1 text-center bg-emerald-600 hover:bg-emerald-700 text-sm py-2 rounded font-medium"
                >
                  Ver por Slug
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}