import React, { FC, useState } from 'react'
import classNames from 'classnames'
import STYLE_VARS from 'styles/vars'
import { HOME_VIDEOS } from './constants/mockData'

const VIDEO_ITEM_SIZE = 10.2
const VIDEO_ITEM_SCALED_SIZE_MOBILE = 8.2
const VIDEO_ITEM_SCALED_SIZE = 12.5

const Videos: FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const activeHomeVideo = HOME_VIDEOS[activeIndex]

    return (
        <div className="videos">
            <div className="img-wrapper">
                <img alt="thumbnail" src={activeHomeVideo.src} />
            </div>

            <div className="videos-container">
                <div className="videos-inner">
                    <div className="efs-subtitle videos-label">
                        <h4>Product Videos</h4>
                    </div>

                    <div className="videos-inner-title efs-subtitle">Title</div>
                </div>

                <div className="video-list">
                    {HOME_VIDEOS?.map((title, index) => {
                        return (
                            <div
                                key={title.video}
                                className={classNames(
                                    'item-container',
                                    index === activeIndex && 'active'
                                )}
                                onFocus={() => setActiveIndex(index)}
                                onMouseOver={() => setActiveIndex(index)}
                            >
                                <img alt="thumbnail" src={title.src} />
                            </div>
                        )
                    })}
                </div>
            </div>

            <style global jsx>
                {`
                    .lf-button {
                        margin-right: 0.4rem;
                        width: 1rem;
                        height: 1.8rem;
                    }
                    .rg-button {
                        margin-left: 0.4rem;
                        width: 1rem;
                        height: 1.8rem;
                    }
                `}
            </style>

            <style jsx>{`
                .videos {
                    display: inline-flex;
                    height: 68rem;
                    align-items: center;
                    width: 100%;
                    padding: 11rem 10rem 0 10rem;
                    position: relative;
                    background-color: ${STYLE_VARS.COMP_PRIMARY};
                }

                .videos-label {
                    color: ${STYLE_VARS.COMP_CREME};
                    position: relative;
                }

                .videos-container {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    width: 100%;
                    position: relative;
                }

                .videos-inner-title {
                    font-size: 6rem;
                    line-height: 7.2rem;
                    font-family: 'Noto Sans Georgian';
                    font-style: normal;
                    font-weight: 400;
                    color: ${STYLE_VARS.COMP_CREME};
                    width: 56rem;
                    padding-top: 2.4rem;
                    height: 16.7rem;
                }

                .img-wrapper {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    position: absolute;
                    top: 0;
                    left: 0;
                }

                .img-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: top;
                }

                .video-list {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: flex-end;
                }

                .item-container {
                    width: ${VIDEO_ITEM_SIZE}rem;
                    height: ${VIDEO_ITEM_SIZE}rem;
                    border-radius: 6.55rem;
                    margin-bottom: 2.2rem;
                    transition: width 0.3s ease-in-out, height 0.3s ease-in-out,
                        border-radius 0.3s ease-in-out;
                    border: 2px solid ${STYLE_VARS.COMP_CREME};
                    overflow: hidden;
                    cursor: pointer;
                }

                .item-container:hover,
                .active {
                    width: 19.6rem;
                    height: ${VIDEO_ITEM_SCALED_SIZE}rem;
                    border-radius: 6.55rem;
                    border: 4px solid ${STYLE_VARS.COMP_CREME};
                }

                .item-container img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                @media (max-width: ${STYLE_VARS.TABLET}) {
                    .videos {
                        height: 5.25rem;
                        padding: 8.1rem 10rem 0 10rem;
                    }

                    .videos-inner-title {
                        font-size: 4rem;
                        line-height: 4.5rem;
                        width: 100%;
                        padding-top: 1.8rem;
                    }

                    .videos-container {
                        display: flex;
                        flex-direction: column;
                    }

                    .video-list {
                        display: flex;
                        flex-direction: unset;
                        margin-top: 7rem;
                    }

                    .item-container {
                        width: 5rem;
                        height: 5rem;
                        border-radius: 3.9rem;
                        margin-bottom: 0;
                        border: 1px solid ${STYLE_VARS.COMP_CREME};
                        margin-right: 2rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .item-container:last-child {
                        margin-right: 0;
                    }

                    .item-container:hover,
                    .active {
                        width: 13.5rem;
                        height: ${VIDEO_ITEM_SCALED_SIZE_MOBILE};
                        border-radius: 3.9rem;
                        border: 2px solid ${STYLE_VARS.COMP_CREME};
                    }
                }
            `}</style>
        </div>
    )
}

export default Videos
