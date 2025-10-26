import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Nav from "@/components/Nav";
import "./globals.css";
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo App | Manage Your Tasks Easily",
  description:
    "A simple and interactive Todo App built with Next.js. Add, edit, and delete your daily tasks to stay organized.",
  openGraph: {
    title: "Todo App | Manage Your Tasks Easily",
    description:
      "Organize your daily tasks with this simple Todo App. Built using Next.js and Clerk authentication.",
    url: "https://fullstack-nextjs-todo-dev-mohamed.vercel.app",
    siteName: "Todo App",
    images: [
      {
        url: "https://fullstack-nextjs-todo-dev-mohamed.vercel.app/Cover.png",
        // width: 1200,
        // height: 630,
        alt: "Preview of Todo App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Todo App | Manage Your Tasks Easily",
    description:
      "A clean and intuitive Todo App that helps you stay productive every day.",
    images: ["https://fullstack-nextjs-todo-dev-mohamed.vercel.app/Cover.png"],
  },
  alternates: {
    canonical: "https://fullstack-nextjs-todo-dev-mohamed.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        style={{ colorScheme: "light dark" }}
        suppressHydrationWarning
      >
        <body
          className={`${montserrat.variable} ${montserrat.variable} antialiased`}
          style={{ colorScheme: "light dark" }}
          suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
