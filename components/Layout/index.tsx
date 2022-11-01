import React from 'react'
import STYLE_VARS from 'styles/vars'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
    children: React.ReactElement
    isHeaderActive?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, isHeaderActive }) => {
    return (
        <div className="page-layout">
            <Header isActive={isHeaderActive} />

            {children}

            <Footer />

            <style jsx global>{`
                /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

                /* Document========================================================================== */

                /**
                * 1. Correct the line height in all browsers.
                * 2. Prevent adjustments of font size after orientation changes in iOS.
                */
                html {
                    line-height: 1.15; /* 1 */
                    -webkit-text-size-adjust: 100%; /* 2 */
                    font-size: 62.5%;
                }

                /* Sections========================================================================== */

                /**
                * Remove the margin in all browsers.
                */

                body {
                    margin: 0;
                    font-family: 'Albra', sans-serif;
                    width: 100%;
                    overflow-x: hidden;
                }

                /**
                * Render the main element consistently in IE.
                */

                main {
                    display: block;
                }

                /* Grouping content========================================================================== */

                /**
                * 1. Add the correct box sizing in Firefox.
                * 2. Show the overflow in Edge and IE.
                */

                hr {
                    box-sizing: content-box; /* 1 */
                    height: 0; /* 1 */
                    overflow: visible; /* 2 */
                }

                /**
                * 1. Correct the inheritance and scaling of font size in all browsers.
                * 2. Correct the odd em font sizing in all browsers.
                */

                pre {
                    font-family: monospace; /* 1 */
                    font-size: 1em; /* 2 */
                }

                /* Text-level semantics========================================================================== */

                /**
                * Remove the gray background on active links in IE 10.
                */

                a {
                    display: inline-block;
                    background-color: transparent;
                    text-decoration: none;
                    color: inherit;
                    box-sizing: border-box;
                }

                /**
                * 1. Remove the bottom border in Chrome 57-
                * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
                */

                li,
                ul,
                ol {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                li {
                    list-style-type: none;
                }

                abbr[title] {
                    border-bottom: none; /* 1 */
                    text-decoration: underline; /* 2 */
                    text-decoration: underline dotted; /* 2 */
                }

                /**
                * Add the correct font weight in Chrome, Edge, and Safari.
                */

                b,
                strong {
                    font-weight: bolder;
                }

                /**
                * 1. Correct the inheritance and scaling of font size in all browsers.
                * 2. Correct the odd em font sizing in all browsers.
                */

                code,
                kbd,
                samp {
                    font-family: monospace; /* 1 */
                    font-size: 1em; /* 2 */
                }

                /**
                * Add the correct font size in all browsers.
                */

                small {
                    font-size: 80%;
                }

                /**
                * Prevent sub and sup elements from affecting the line height in
                * all browsers.
                */

                sub,
                sup {
                    font-size: 75%;
                    line-height: 0;
                    position: relative;
                    vertical-align: baseline;
                }

                sub {
                    bottom: -0.25em;
                }

                sup {
                    top: -0.5em;
                }

                /* Embedded content========================================================================== */

                /**
                * Remove the border on images inside links in IE 10.
                */

                img {
                    border-style: none;
                    object-fit: cover;
                }

                /* Forms========================================================================== */

                /**
                * Correct the padding in Firefox.
                */

                fieldset {
                    padding: 0.35em 0.75em 0.625em;
                }

                /**
                * 1. Correct the text wrapping in Edge and IE.
                * 2. Correct the color inheritance from fieldset elements in IE.
                * 3. Remove the padding so developers are not caught out when they zero out
                *fieldset elements in all browsers.
                */

                legend {
                    box-sizing: border-box; /* 1 */
                    color: inherit; /* 2 */
                    display: table; /* 1 */
                    max-width: 100%; /* 1 */
                    padding: 0; /* 3 */
                    white-space: normal; /* 1 */
                }

                /**
                * 1. Correct the inability to style clickable types in iOS and Safari.
                * 2. Change font properties to inherit in Safari.
                */

                ::-webkit-file-upload-button {
                    -webkit-appearance: button; /* 1 */
                    font: inherit; /* 2 */
                }

                /* Interactive========================================================================== */

                /*
                * Add the correct display in Edge, IE 10+, and Firefox.
                */

                details {
                    display: block;
                }

                /*
                * Add the correct display in all browsers.
                */

                summary {
                    display: list-item;
                }

                /* Misc========================================================================== */

                /**
                * Add the correct display in IE 10+.
                */

                template {
                    display: none;
                }

                /**
                * Add the correct display in IE 10.
                */

                [hidden] {
                    display: none;
                }

                div {
                    box-sizing: border-box;
                }

                div:focus,
                video:focus,
                button:focus {
                    outline: none;
                }

                header {
                    box-sizing: border-box;
                }

                h1 {
                    font-size: 9.5rem;
                    font-weight: 600;
                    margin: 0;
                    padding: 0;
                }

                h2 {
                    font-size: 6rem;
                    font-weight: 500;
                    margin: 0;
                    padding: 0;
                }

                h3 {
                    font-size: 4.4rem;
                    font-weight: 500;
                    margin: 0;
                    padding: 0;
                }

                h4 {
                    font-size: 3rem;
                    font-weight: 200;
                    font-style: italic;
                    margin: 0;
                    padding: 0;
                }

                p {
                    font-size: 1.7rem;
                    font-weight: 200;
                    line-height: 2.4rem;
                    margin: 0;
                    padding: 0;
                    font-family: 'Lato', sans-serif;
                }

                button {
                    margin: 0;
                    padding: 0;
                    display: inline-block;
                    box-shadow: none;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    color: inherit;
                    font-style: inherit;
                }

                @-webkit-keyframes rotating /* Safari and Chrome */ {
                    from {
                        -webkit-transform: rotate(0deg);
                        -o-transform: rotate(0deg);
                        transform: rotate(0deg);
                    }
                    to {
                        -webkit-transform: rotate(360deg);
                        -o-transform: rotate(360deg);
                        transform: rotate(360deg);
                    }
                }
                @keyframes rotating {
                    from {
                        -ms-transform: rotate(0deg);
                        -moz-transform: rotate(0deg);
                        -webkit-transform: rotate(0deg);
                        -o-transform: rotate(0deg);
                        transform: rotate(0deg);
                    }
                    to {
                        -ms-transform: rotate(360deg);
                        -moz-transform: rotate(360deg);
                        -webkit-transform: rotate(360deg);
                        -o-transform: rotate(360deg);
                        transform: rotate(360deg);
                    }
                }

                @keyframes scrolldown {
                    0% {
                        background-position: 0 -5rem;
                    }
                    75% {
                        background-position: 0 0;
                    }
                    100% {
                        background-position: 0 5rem;
                    }
                }

                .scroll-down {
                    animation: scrolldown 2.2s cubic-bezier(0.76, 0, 0.3, 1)
                        forwards infinite;
                }

                .rotating {
                    -webkit-animation: rotating 13s linear infinite;
                    -moz-animation: rotating 13s linear infinite;
                    -ms-animation: rotating 13s linear infinite;
                    -o-animation: rotating 13s linear infinite;
                    animation: rotating 13s linear infinite;
                }

                @media (max-width: ${STYLE_VARS.TABLET}) {
                    h1 {
                        font-size: 5.6rem;
                        font-weight: 600;
                    }

                    h2 {
                        font-size: 3.6rem;
                        font-weight: 500;
                    }

                    h3 {
                        font-size: 2.8rem;
                        font-weight: 500;
                    }

                    h4 {
                        font-size: 2rem;
                        font-weight: 200;
                        font-style: italic;
                    }
                }
            `}</style>
        </div>
    )
}

export default Layout
