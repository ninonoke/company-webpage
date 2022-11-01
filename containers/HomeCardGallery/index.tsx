import React, { useState } from 'react'
import STYLE_VARS from 'styles/vars'
import TextButton from 'components/buttons/TextButton'
import useTranslation from 'locale/useTranslation'
import GalleryCards from 'containers/GalleryCards'
import ThreeGrid from 'components/ThreeGrid'
import InlineSvg from 'components/InlineSvg'
import PrimaryButton from 'components/buttons/PrimaryButton'
import Right from 'public/svgs/rightArrowButtonIcon.svg'
import Left from 'public/svgs/leftArrowButtonIcon.svg'
import { PrimaryButtonType } from 'components/buttons/PrimaryButton/types/type.enum'
import { GALlERY } from './constants/mockData'

const HomeCardGallery: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const { t } = useTranslation()

    const galleryParagraph = GALlERY[activeIndex]?.text || ''

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
                                    <h2>New Product</h2>
                                </div>
                                <p className="paragraph-cards">
                                    {galleryParagraph}
                                </p>
                            </div>

                            <div className="text-button-wrapper">
                                <TextButton href="/">
                                    {t('DISCOVER')}
                                </TextButton>
                            </div>

                            <div className="link-container">
                                <div className="link-wrapper">
                                    <PrimaryButton
                                        type={
                                            PrimaryButtonType.ICON_BUTTON_UNCHANGE
                                        }
                                        onClick={() =>
                                            setActiveIndex(activeIndex - 1)
                                        }
                                    >
                                        <div className="lf-button">
                                            <InlineSvg
                                                fillColor="comp-black"
                                                src={Left}
                                            />
                                        </div>
                                    </PrimaryButton>
                                    <span className="efs-numbers ">
                                        {t('watchVideo')}
                                    </span>
                                </div>

                                <div className="all-videos-link">
                                    <PrimaryButton
                                        type={
                                            PrimaryButtonType.ICON_BUTTON_UNCHANGE
                                        }
                                        onClick={() =>
                                            setActiveIndex(activeIndex + 1)
                                        }
                                    >
                                        <div className="rg-button">
                                            <InlineSvg
                                                fillColor="comp-black"
                                                src={Right}
                                            />
                                        </div>
                                    </PrimaryButton>
                                    <span className="efs-numbers">
                                        {t('allVideos')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    }
                    slotTwo={<div />}
                    slotThree={
                        <>
                            <div className="svg-and-cards">
                                {/* hidden by the clients request */}

                                <GalleryCards
                                    images={GALlERY?.map((item) => item.src)}
                                    activeIndex={activeIndex}
                                    size="medium"
                                />
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
                    padding: 16rem 0 16rem 0;
                }

                .svg-and-cards {
                    position: relative;
                    width: 32.5rem;
                    height: 45rem;
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
                    font-family: 'helveticaneue';
                    line-height: 2.4rem;
                    font-weight: 200;
                    padding: 0 0 3rem 6rem;
                    max-width: 40rem;
                    height: 10rem;
                }

                .text-button-wrapper {
                    margin: 0 0 3rem 6rem;
                }

                .link-container {
                    padding-top: 5rem;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    margin-left: 6rem;
                }

                .all-videos-link {
                    padding-left: 2rem;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }

                .link-wrapper {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }

                .link-container span {
                    color: ${STYLE_VARS.COMP_CREME};
                    text-transform: uppercase;
                    padding-left: 1.6rem;
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

                    .text-mobile-wrapper {
                        display: block;
                        width: 100%;
                    }

                    .link-container {
                        padding-top: 2.7rem;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        width: 17.9rem;
                    }

                    .all-videos-link {
                        padding: 1.7rem 0 0;
                    }

                    .link-wrapper {
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                    }

                    .link-container span {
                        padding-left: 1.1rem;
                    }
                }
            `}</style>
        </>
    )
}

export default HomeCardGallery
