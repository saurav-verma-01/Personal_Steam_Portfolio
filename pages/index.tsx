import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>
          Saurav Kumar Verma | Frontend Developer | Professional Portfolio
        </title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="description"
          content="Saurav Kumar Verma | Frontend Developer | Professional Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Saurav Kumar Verma | Frontend Developer | Professional Portfolio"
        />
        <meta
          name="description"
          content="Hey! I'm Saurav Kumar Verma, and I'm a Frontend Developer with a degree in Computer Science Engineering."
        />

        <meta
          property="og:title"
          content="Saurav Kumar Verma | Frontend Developer | Professional Portfolio"
        />
        <meta property="og:type" content="article" />
        {/* To CHange the url */}
        <meta property="og:url" content="https://deverajc.com/" />
        {/* Portfolio thumbnail Image */}
        <meta
          property="og:image"
          content="https://deverajc.com/screenshot.png"
        />
        <meta
          property="og:description"
          content="Hey! I'm Saurav Kumar Verma, and I'm a Frontend Developer with a degree in Computer Science Engineering."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@jc_devz" />
        <meta
          name="twitter:title"
          content="Saurav Kumar Verma | Frontend Developer | Professional Portfolio"
        />
        <meta
          name="twitter:description"
          content="Hey! I'm Saurav Kumar Verma, and I'm a Frontend Developer with a degree in Computer Science Engineering."
        />
        <meta name="twitter:creator" content="@jc_devz" />
        <meta
          name="twitter:image"
          content="https://deverajc.com/screenshot.png"
        />
      </Head>
      <Home />
    </>
  );
}
