# Lumina Gear - Landing Page de Fotografía

Landing page funcional desarrollada con Next.js 16 (App Router) y Supabase para la exhibición y gestión de catálogo de equipos fotográficos.

##  Tecnologías Utilizadas
- **Next.js 16+** (App Router, Server Components)
- **Supabase** (Base de datos PostgreSQL serverless y RLS)
- **Tailwind CSS** (Diseño adaptable y estilos)
- **Vercel** (Despliegue en producción)

##  Funcionalidades
- Consumo de datos directo desde Supabase mediante Server Components.
- Implementación de 2 rutas dinámicas independientes:
  - `/producto/[id]`: Búsqueda y renderizado mediante identificador UUID.
  - `/detalles/[slug]`: Búsqueda y renderizado semántico mediante Slug.
- Estado de carga automatizado mediante `loading.tsx`.
- Políticas de acceso seguro activas con Row Level Security (RLS).

##  Instalación y Configuración Local

1. Clonar el repositorio:
   ```bash
   git clone <URL_DE_TU_REPOSITORIO_GITHUB>
   cd mi-landing-supabase