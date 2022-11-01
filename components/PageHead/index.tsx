import React from 'react'
import Head from 'next/head'

const PageHead: React.FC = () => {
    const pageWebsite = 'www.company.com'

    return (
        <>
            <Head>
                <title key="title">COMPANY</title>

                <link rel="icon" href="/favicon.ico" type="image/x-icon" />

                {/* Primary Meta Tags */}
                <meta name="title" key="meta-title" content="COMPANY" />
                <meta
                    name="description"
                    key="meta-description"
                    content="about company"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    key="meta-fb-website"
                    content={pageWebsite}
                />
                <meta
                    property="og:title"
                    key="meta-fb-title"
                    content="COMPANY"
                />
                <meta
                    property="og:description"
                    key="meta-fb-description"
                    content="about company"
                />
                <meta
                    property="og:image"
                    key="meta-fb-image"
                    content="/banner1.png"
                />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    key="meta-tw-website"
                    content={pageWebsite}
                />
                <meta
                    property="twitter:title"
                    key="meta-tw-title"
                    content="COMPANY"
                />
                <meta
                    property="twitter:description"
                    key="meta-tw-description"
                    content="about company"
                />
                <meta
                    property="twitter:image"
                    key="meta-tw-image"
                    content="/banner1.png"
                />
            </Head>
        </>
    )
}

export default PageHead
