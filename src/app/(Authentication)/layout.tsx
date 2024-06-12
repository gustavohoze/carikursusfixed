
import { Inter, Poppins } from "next/font/google";
import LoginHeader from "./component/LoginHeader";
import LoginFooter from "./component/LoginFooter";
const poppins = Poppins({weight:"200", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <LoginHeader></LoginHeader>
        {children}
        <LoginFooter></LoginFooter>
        </body>
    </html>
  );
}
