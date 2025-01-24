import { Inter } from "next/font/google";
import "./globals.css";

const InterFont = Inter({
	display: "block",
	style: "normal",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	fallback: ["sans-serif"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={InterFont.className}>
				{children}
			</body>
		</html>
	);
}
