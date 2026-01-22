import '@/app/ui/global.css'
import { work_sans } from '@/app/ui/invoices/fonts'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${work_sans.className} antialiased`}>{children}
              <h1>Hola Jeanpierre</h1>
      </body>
    </html>
  );
}
