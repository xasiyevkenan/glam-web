import localFont from "next/font/local";

/** Montserrat — mobil appdakı eyni fayllar (src/assets/fonts). */
export const montserrat = localFont({
  src: [
    { path: "../assets/fonts/Montserrat-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/Montserrat-Medium.ttf", weight: "500", style: "normal" },
    { path: "../assets/fonts/Montserrat-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../assets/fonts/Montserrat-Bold.ttf", weight: "700", style: "normal" },
    { path: "../assets/fonts/Montserrat-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});
