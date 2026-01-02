import "./globals.css";

;

export const metadata = {
  title: "Oohpoint Test Repo For UI ",
  description: "This is a Oohpoint Official UI Repo for UI Testing Purpose",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
