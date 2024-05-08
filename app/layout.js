import "./globals.css";

export const metadata = {
  title: "Blue Blocks",
  description: "Blue Block home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full flex flex-col items-center justify-center ">
        {children}
      </body>
    </html>
  );
}
