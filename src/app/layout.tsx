import '../styles/globals.css';
import type { Metadata } from 'next';
import { inter, mea_culpa } from '../fonts/fonts';
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
      <body className={`${inter.variable} ${mea_culpa.variable}`}>{children}</body>
    </html>
  );
}
