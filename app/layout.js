import "./globals.css";

export const metadata = {
  title: "VideoChat - Video Calling Website",
  description: "Video Calling Website using Next.js and WebRTC to connect with your friends and family anywhere in the world. Use this website to call your friends and family for free.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
