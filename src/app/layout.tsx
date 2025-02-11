import '../styles/globals.css';
import type { Metadata } from 'next';
import { mea_culpa, outfit } from '../fonts/fonts';
import type React from "react"

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
      <body className={`${outfit.variable} ${mea_culpa.variable}`}>{children}</body>
    </html>
  );
}
