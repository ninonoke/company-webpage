import React from 'react'
import { NextPage } from 'next'
import TextHorizontalScroll from 'components/TextHorizontalScroll'
import useTranslation from 'locale/useTranslation'
import PageHead from 'components/PageHead'
import Videos from 'containers/Videos'
import HomeBanner from 'containers/HomePage/HomeBanner'
import HomeCardGallery from 'containers/HomeCardGallery'
import DataWithNumbers from 'components/DataWithNumbers'

const Home: NextPage = () => {
    const { t } = useTranslation()

    return (
        <div>
            <PageHead />

            <HomeBanner />

            <div className="horizontal-text-padding">
                <TextHorizontalScroll pageTitle={t('PRODUCT_OF_THE_DAY')} />
            </div>

            <Videos />

            <HomeCardGallery />

            <DataWithNumbers />

            <style jsx>{`
                .horizontal-text-padding {
                    padding-top: 10rem;
                }
            `}</style>
        </div>
    )
}

export default Home
