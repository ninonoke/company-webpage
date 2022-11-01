import React from 'react'
import STYLE_VARS from 'styles/vars'
import Marquee from 'react-fast-marquee'
import ContentWrapper from 'components/ContentWrapper'

interface TextHorizontalScrollProps {
    pageTitle: string
}

const TextHorizontalScroll: React.FC<TextHorizontalScrollProps> = ({
    pageTitle,
}) => {
    const generateMoreList = (list: number[]) => {
        if (list.length > 20) {
            return list
        }

        const result = []
        let i = 0

        while (result.length < 20) {
            const selectedIndex =
                result.length < list.length ? i : i % list.length

            result.push({
                item: list[selectedIndex],
                id: selectedIndex,
            })
            i += 1
        }

        return result
    }

    return (
        <div className="text-horizontal-scroll">
            <ContentWrapper>
                <div className="title">
                    <h4>{pageTitle}</h4>
                </div>
            </ContentWrapper>
            <Marquee speed={200} gradient={false}>
                <div className="countries">
                    {generateMoreList([1, 2, 3]).map((item) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div className="scroll-item" key={item.id}>
                            <h1>
                                Product of the Day - 7.71, 2022 —
                                <span>Repeat</span> —
                            </h1>

                            <div className="bullet-wrapper">
                                <div className="bullet" />
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>

            <style jsx>{`
                .text-horizontal-scroll {
                    padding-bottom: 10rem;
                }

                .title {
                    padding-bottom: 3rem;
                }

                .title h3 {
                    font-family: 'Lato', sans-serif;
                    font-weight: 300;
                }

                .scroll-item {
                    display: flex;
                    align-items: center;
                    height: 13rem;
                }

                .countries {
                    display: flex;
                    align-items: center;
                    width: 100%;
                }

                .bullet-wrapper {
                    padding: 0 4.5rem;
                }

                .bullet {
                    width: 2.7rem;
                    height: 2.7rem;
                    border-radius: 50%;
                    background-color: ${STYLE_VARS.COMP_ALLOW};
                }

                h1 {
                    font-weight: 300;
                    font-size: 7rem;
                    font-family: 'Lato', sans-serif;
                }

                span {
                    font-weight: 600;
                }

                @media (max-width: ${STYLE_VARS.DESKTOP_MD}) {
                    .text-horizontal-scroll {
                        padding-bottom: 8rem;
                    }

                    h1 {
                        font-size: 6rem;
                    }

                    .bullet-wrapper {
                        padding: 0 3.5rem;
                    }

                    .bullet {
                        width: 1.4rem;
                        height: 1.4rem;
                    }
                }

                @media (max-width: ${STYLE_VARS.DESKTOP_SM}) {
                    .text-horizontal-scroll {
                        padding-bottom: 5rem;
                    }

                    .title {
                        padding-bottom: 4rem;
                    }

                    .title h4 {
                        font-size: 2.5rem;
                    }

                    .scroll-item {
                        height: 10rem;
                    }

                    h1 {
                        font-size: 6rem;
                    }
                }

                @media (max-width: ${STYLE_VARS.TABLET}) {
                    .title {
                        padding: 7.2rem 0 2rem 4.7rem;
                    }

                    .scroll-item {
                        display: flex;
                        align-items: center;
                        height: 8rem;
                    }

                    .countries {
                        display: flex;
                        align-items: center;
                        width: 100%;
                    }

                    .bullet-wrapper {
                        padding: 0 2.3rem;
                    }

                    .bullet {
                        width: 1.1rem;
                        height: 1.1rem;
                        border-radius: 50%;
                        background-color: ${STYLE_VARS.COMP_ALLOW};
                    }

                    h1 {
                        font-weight: 500;
                        font-size: 5rem;
                    }
                }
            `}</style>
        </div>
    )
}

export default TextHorizontalScroll
