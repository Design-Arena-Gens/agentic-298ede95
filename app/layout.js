export const metadata = {
  title: 'R - Interactive App',
  description: 'A simple interactive counter application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
