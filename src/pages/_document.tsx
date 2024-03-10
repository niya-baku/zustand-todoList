import { Html, Head, Main, NextScript } from "next/document";
// import { ColorModeScript, extendTheme } from "@chakra-ui/react";

// const theme = extendTheme({
//   config: {
//     initialColorMode: "dark",
//     useSystemColorMode: true,
//   },
// });

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
