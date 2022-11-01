import React, { useRef, useEffect } from 'react'
import classNames from 'classnames'
import { useSprings, animated } from 'react-spring'
import STYLE_VARS from 'styles/vars'
import RoundedImage from 'components/RoundedImage'

interface Props {
    images: string[]
    activeIndex: number
    size?: 'small' | 'medium'
}

const GalleryCards: React.FC<Props> = ({
    images,
    activeIndex,
    size = 'medium',
}) => {
    const prevIndex = useRef(activeIndex)

    const isNext = prevIndex.current <= activeIndex

    const getInitialState = (index: number) => ({
        translateX: '9.6rem',
        translateY: '-4.3rem',
        rotate: '10deg',
        zIndex: STYLE_VARS.Z_INDEX_GALLERY_CARD_UNDER - index,
    })

    const getMiddleState = (index: number) => {
        const isMobile =
            window && window.innerWidth < parseInt(STYLE_VARS.TABLET, 10)

        return {
            translateX: size === 'medium' && !isMobile ? '35.5rem' : '25.5rem',
            rotate: '0deg',
            zIndex: isNext
                ? STYLE_VARS.Z_INDEX_GALLERY_CARD + index
                : STYLE_VARS.Z_INDEX_GALLERY_CARD_UNDER - index,
        }
    }

    const getFinalState = (index: number) => ({
        translateX: '0.1rem',
        translateY: '0.1rem',
        rotate: '0deg',
        zIndex: STYLE_VARS.Z_INDEX_GALLERY_CARD + index,
    })

    const [props, api] = useSprings(images.length, (index) =>
        getInitialState(index)
    )

    useEffect(() => {
        api((index) => {
            if (index === 0) {
                return {
                    from: getFinalState(index),
                    to: [getFinalState(index), getFinalState(index)],
                }
            }
            if (isNext && index === activeIndex) {
                return {
                    from: getInitialState(index),
                    to: [getMiddleState(index), getFinalState(index)],
                }
            }
            if (!isNext && index === activeIndex + 1) {
                return {
                    from: getFinalState(index),
                    to: [getMiddleState(index), getInitialState(index)],
                }
            }
            return { to: undefined }
        })

        prevIndex.current = activeIndex
    }, [activeIndex])

    return (
        <div className="gallery-cards">
            <div className={classNames('images-wrapper', size)}>
                {props &&
                    props.map((styles, i) => (
                        <animated.div
                            style={{
                                ...styles,
                                position: 'absolute',
                            }}
                            // eslint-disable-next-line react/no-array-index-key
                            key={i}
                        >
                            <RoundedImage
                                size={size}
                                src={images[i]}
                                alt="galleryImage"
                            />
                        </animated.div>
                    ))}
            </div>

            <style jsx>{`
                .images-wrapper {
                    margin-right: 13rem;
                }

                .image {
                    position: relative;
                    border-radius: 17rem;
                    overflow: hidden;
                    background-color: ${STYLE_VARS.GAS_LIGHT_GREY};
                }

                @media (max-width: ${STYLE_VARS.TABLET}) {
                    .images-wrapper {
                        width: 20rem;
                        height: 32rem;
                    }
                }
            `}</style>
        </div>
    )
}

export default GalleryCards
