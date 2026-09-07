import { supabase } from '../../../lib/supabase';
import Link from 'next/link';
import { notFound } from 'next/navigation';
 
export default async function ProductoBySlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: producto } = await supabase.from('productos').select('*').eq('slug', slug).single();

  if (!producto) notFound();

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8 flex items-center justify-center">
      <div className="max-w-lg w-full bg-slate-800 rounded-lg p-6 border border-slate-700">
        <Link href="/" className="text-sm text-emerald-400 hover:underline mb-4 inline-block">&larr; Volver al inicio</Link>
        <img src={producto.imagen_url} alt={producto.nombre} className="w-full h-64 object-cover rounded mb-4" />
        <span className="text-xs bg-emerald-900 text-emerald-200 px-2 py-1 rounded">Vista por Slug: {slug}</span>
        <h1 className="text-2xl font-bold mt-2">{producto.nombre}</h1>
        <p className="text-slate-300 my-4">{producto.descripcion}</p>
        <p className="text-2xl font-bold text-emerald-400">${producto.precio}</p>
      </div>
    </main>
  );
}