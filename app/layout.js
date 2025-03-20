import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Correction du nom de la variable et des options
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono", // Nom de variable CSS cohérent
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], // Correction de "weigth" en "weight"
  subsets: ["latin"],
});

export const metadata = {
  title: "AshadDev",
  description: "Make by AshadDev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>{children}</body>
    </html>
  );
}