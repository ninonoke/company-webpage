import React, { useEffect } from 'react'
import Layout from 'components/Layout'
import 'fonts.css'
import axios from 'axios'
import AOS from 'aos'
import { ParallaxProvider } from 'react-scroll-parallax'
import 'swiper/swiper.min.css'
import 'aos/dist/aos.css'

axios.defaults.baseURL = 'https://n1.noxtton.com'
axios.defaults.headers.common['x-api-key'] =
    'bf2c4b4ee1d773c04e1e8e6ed870e732a27cb1dd3577e2b3'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <ParallaxProvider>
            <Layout
                contactsData={pageProps.contactsData}
                isHeaderActive={pageProps.isHeaderActive}
            >
                <Component {...pageProps} />
            </Layout>
        </ParallaxProvider>
    )
}

export default MyApp
