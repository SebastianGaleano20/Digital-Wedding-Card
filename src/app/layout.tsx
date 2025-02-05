import '../styles/globals.css';
import type { Metadata } from 'next';
import { inter } from '../fonts/fonts';

export const metadata: Metadata = {
  title: 'Boda Lu y Sebas',
  description: 'Tarjeta de invitación digital - Casamiento de Luciana y Sebastian',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
