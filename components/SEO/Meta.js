import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>Rαηյαη Kumαr</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Rαηյαη Kumαr Portfolio - Red Teamer & Security Professional" />
            <meta name="description"
                content="Rαηյαη Kumαr's (redteamranjan) Personal Portfolio Website. Built with a modern, Linux-inspired theme using Next.js and Tailwind CSS." />
            <meta name="author" content="Rαηյαη Kumαr (redteamranjan)" />
            <meta name="keywords"
                content="Rαηյαη Kumαr, redteamranjan, cybersecurity portfolio, red teaming, penetration testing, cloud security, Ranjan red team portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            {/* Search Engine */}
            <meta name="image" content="images/logos/fevicon.png" />
            {/* Schema.org for Google */}
            <meta itemProp="name" content="Rαηյαη Kumαr Portfolio - Red Teamer & Security Professional" />
            <meta itemProp="description"
                content="Rαηյαη Kumαr's (redteamranjan) Personal Portfolio Website. Built with a modern, Linux-inspired theme using Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Rαηյαη Kumαr Portfolio - Red Teamer & Security Professional" />
            <meta name="twitter:description"
                content="Rαηյαη Kumαr's (redteamranjan) Personal Portfolio Website. Built with a modern, Linux-inspired theme using Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="redteamranjan" />
            <meta name="twitter:creator" content="redteamranjan" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            {/* Open Graph general (Facebook, Pinterest & Google+) */}
            <meta name="og:title" content="Rαηյαη Kumαr Portfolio - Red Teamer & Security Professional" />
            <meta name="og:description"
                content="Rαηյαη Kumαr's (redteamranjan) Personal Portfolio Website. Built with a modern, Linux-inspired theme using Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="http://yourdomain.com/" />
            <meta name="og:site_name" content="Rαηյαη Kumαr Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/feicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
