import React, { useState } from 'react'
import STYLE_VARS from 'styles/vars'
import TextButton from 'components/buttons/TextButton'
import useTranslation from 'locale/useTranslation'
import BaseResizableButton from 'components/buttons/BaseResizableButton'
import ArrowLeftSvg from 'public/svgs/arrow-left.svg'
import ArrowRightSvg from 'public/svgs/arrow-right.svg'
import {
    HomeCardGalleryDataInterface,
    HomeCardGalleryInterface,
} from 'interfaces/homeCardGalleryInterfaces'
import GalleryCards from 'containers/GalleryCards'
import ThreeGrid from 'components/ThreeGrid'
import { useRouter } from 'next/router'
import InlineSvg from 'components/InlineSvg'
import ExclusiveProductSvg from 'public/svgs/exclusive-products.svg'
import ExclusiveProductGeSvg from 'public/svgs/exclusive-products-ge.svg'

interface HomeCardGalleryProps {
    homeCardGalleryData: HomeCardGalleryDataInterface[]
}

const HomeCardGallery: React.FC<HomeCardGalleryProps> = ({
    homeCardGalleryData,
}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const { t, tData } = useTranslation()

    const { locale } = useRouter()

    const { galleryTitle, galleryParagraph, link } =
        tData<HomeCardGalleryInterface>(homeCardGalleryData[activeIndex]) || {}

    function createMarkup() {
        return { __html: galleryParagraph }
    }

    return (
        <>
            <div className="card-gallery-wrapper">
                <ThreeGrid
                    alignment={['center', 'center', 'center']}
                    isReversedOnMobile
                    slotOne={
                        <div className="text-and-buttons">
                            <div className="text-wrapper">
                                <div className="title">
                                    <h2>{galleryTitle}</h2>
                                </div>
                                <div
                                    className="paragraph-cards"
                                    dangerouslySetInnerHTML={createMarkup()}
                                />
                            </div>

                            <div className="text-button-wrapper">
                                <TextButton href={link}>
                                    {t('DISCOVER')}
                                </TextButton>
                            </div>
                            <div className="arrow-buttons-wrapper">
                                <div className="left-button">
                                    <BaseResizableButton
                                        src={ArrowLeftSvg}
                                        onClick={() =>
                                            setActiveIndex(activeIndex - 1)
                                        }
                                        disabled={activeIndex <= 0}
                                    />
                                </div>
                                <div className="right-button">
                                    <BaseResizableButton
                                        onClick={() =>
                                            setActiveIndex(activeIndex + 1)
                                        }
                                        disabled={
                                            activeIndex + 1 >=
                                            homeCardGalleryData.length
                                        }
                                        isContentRight
                                        src={ArrowRightSvg}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                    slotTwo={<div />}
                    slotThree={
                        <>
                            <div className="svg-and-cards">
                                {/* hidden by the clients request */}
                                <div className="exclusive-products rotating">
                                    <InlineSvg
                                        src={
                                            locale === 'en_GB'
                                                ? ExclusiveProductSvg
                                                : ExclusiveProductGeSvg
                                        }
                                    />
                                </div>
                                <GalleryCards
                                    images={homeCardGalleryData.map(
                                        (item) =>
                                            tData<HomeCardGalleryInterface>(
                                                item
                                            ).galleryImage
                                    )}
                                    activeIndex={activeIndex}
                                    size="medium"
                                />
                            </div>

                            <div className="text-mobile-wrapper">
                                <div className="arrow-mobile-buttons-wrapper">
                                    <div className="left-mobile-button">
                                        <BaseResizableButton
                                            src={ArrowLeftSvg}
                                            onClick={() =>
                                                setActiveIndex(activeIndex - 1)
                                            }
                                            disabled={activeIndex <= 0}
                                        />
                                    </div>
                                    <div className="right-mobile-button">
                                        <BaseResizableButton
                                            onClick={() =>
                                                setActiveIndex(activeIndex + 1)
                                            }
                                            disabled={
                                                activeIndex + 1 >=
                                                homeCardGalleryData.length
                                            }
                                            isContentRight
                                            src={ArrowRightSvg}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                />
            </div>

            <style jsx>{`
                .card-gallery-wrapper {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    padding: 16rem 0 0 0;
                }

                .svg-and-cards {
                    position: relative;
                    width: 32.5rem;
                    height: 45rem;
                }

                .exclusive-products {
                    position: absolute;
                    width: 19rem;
                    height: 19rem;
                    top: 0;
                    right: 23rem;
                    z-index: ${STYLE_VARS.Z_INDEX_GALLERY_CARD_OVER};
                }

                .text-and-buttons {
                    display: block;
                }

                .text-wrapper {
                    padding: 0 0 0 0;
                    text-align: left;
                    width: 60rem;
                    max-height: 35rem;
                }

                .title {
                    padding-bottom: 3.5rem;
                    max-width: 44rem;
                }

                .paragraph-cards {
                    font-size: 1.7rem;
                    font-family: 'Lato', sans-serif;
                    line-height: 2.4rem;
                    font-weight: 200;
                    padding-left: 6rem;
                    padding-bottom: 4.5rem;
                    max-width: 40rem;
                }

                .text-button-wrapper {
                    margin: 0 0 6rem 6rem;
                }

                .arrow-buttons-wrapper {
                    display: flex;
                    padding-left: 6rem;
                    width: 17.3rem;
                    justify-content: space-between;
                }

                .left-button {
                    margin-right: 1.9rem;
                }

                .arrow-mobile-buttons-wrapper {
                    display: none;
                }

                @media (max-width: ${STYLE_VARS.DESKTOP_SM}) {
                    .title h2 {
                        font-size: 5rem;
                    }

                    .title {
                        padding-bottom: 2rem;
                    }

                    .paragraph-cards {
                        font-size: 1.4rem;
                    }
                }

                @media (max-width: ${STYLE_VARS.TABLET}) {
                    .card-gallery-wrapper {
                        width: 100%;
                        height: unset;
                        flex-wrap: wrap-reverse;
                        justify-content: center;
                        padding: 8rem 0 0 3rem;
                        position: relative;
                        overflow: hidden;
                    }

                    .exclusive-products {
                        width: 11rem;
                        height: 11rem;
                        top: -0.6rem;
                        left: -3.5rem;
                    }

                    .text-and-buttons {
                        display: block;
                    }

                    .svg-and-cards {
                        height: unset;
                        margin: 0 auto;
                    }

                    .text-wrapper {
                        padding: 0;
                        text-align: left;
                        width: 23rem;
                        margin-left: 4.4rem;
                    }

                    .title {
                        max-width: unset;
                    }

                    .paragraph {
                        padding-left: 2.5rem;
                        padding-bottom: 4rem;
                        max-width: 25rem;
                    }

                    .text-button-wrapper {
                        padding-left: 6.9rem;
                        margin: 0;
                    }

                    .arrow-buttons-wrapper {
                        display: none;
                    }

                    .text-mobile-wrapper {
                        display: block;
                        width: 100%;
                    }

                    .arrow-mobile-buttons-wrapper {
                        display: flex;
                        justify-content: flex-end;
                        padding: 0 2rem 3rem 0;
                    }

                    .left-mobile-button {
                        margin-right: 2.5rem;
                    }
                }
            `}</style>
        </>
    )
}

export default HomeCardGallery
