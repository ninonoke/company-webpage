import React, { useState } from 'react'
import STYLE_VARS from 'styles/vars'
import classNames from 'classnames'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

interface Props {
    index: number
    startNumber: number
    endNumber: number
    value: string
    label?: string
    isGrey?: boolean
    fontSize?: 'font-small' | 'font-medium'
}

const DataWithNumbersItem: React.FC<Props> = ({
    index,
    startNumber,
    endNumber,
    value,
    label,
    isGrey,
    fontSize = 'font-medium',
}) => {
    const [active, setActive] = useState(true)

    return (
        <div
            className={classNames('number', {
                'number-grey': isGrey,
            })}
        >
            <h2 className={fontSize}>
                <CountUp
                    duration={1}
                    start={startNumber}
                    end={endNumber}
                    onEnd={() => {
                        setActive(false)
                    }}
                >
                    {({ countUpRef, start }) => (
                        <VisibilitySensor
                            onChange={(isVisible) =>
                                isVisible ? start() : null
                            }
                            active={active}
                            delayedCall
                        >
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                </CountUp>{' '}
                {label}
            </h2>

            <div
                data-aos="fade-up"
                data-aos-duration="550"
                data-aos-delay={index * 450}
                className={classNames('line', {
                    'line-grey': isGrey,
                })}
            />
            <h4
                data-aos="fade-up"
                data-aos-duration="650"
                data-aos-delay={index * 500}
            >
                {value}
            </h4>

            <style jsx>{`
                .number {
                    display: flex;
                    text-align: center;
                    flex-direction: column;
                    align-items: center;
                }

                .number-grey h2 {
                    padding-bottom: 2.4rem;
                    line-height: 0.8;
                }

                h2 {
                    padding-bottom: 2.4rem;
                    line-height: 0.8;
                }

                .font-small {
                    font-size: 4.4rem;
                }

                .font-medium {
                    font-size: 6.4rem;
                }

                h4 {
                    max-width: 25rem;
                    padding-top: 1.6rem;
                    font-family: 'Lato', sans-serif;
                    font-style: normal;
                    font-weight: 200;
                }

                .line {
                    display: inline-block;
                    width: 2.5rem;
                    border-bottom: 0.3rem solid ${STYLE_VARS.COMP_CREME};
                }

                .line-grey {
                    border-bottom: 0.3rem solid ${STYLE_VARS.COMP_BLACK};
                }

                @media (max-width: ${STYLE_VARS.DESKTOP_MD}) {
                    .number h2 {
                        font-size: 5rem;
                    }

                    .number-grey h2 {
                        padding-bottom: 1.8rem;
                        line-height: 0.5;
                    }

                    .font-medium {
                        font-size: 5.4rem;
                    }

                    h4 {
                        font-size: 2.4rem;
                        padding-top: 1.4rem;
                    }
                }

                @media (max-width: ${STYLE_VARS.DESKTOP_SM}) {
                    .number h2 {
                        font-size: 4.5rem;
                    }

                    h4 {
                        font-size: 2rem;
                    }
                }

                @media (max-width: ${STYLE_VARS.TABLET}) {
                    h2 {
                        padding-top: 7rem;
                        padding-bottom: 1.6rem;
                    }

                    h4 {
                        max-width: 26rem;
                        font-family: 'Lato', sans-serif;
                        font-style: normal;
                    }

                    .line {
                        width: 2rem;
                    }
                }
            `}</style>
        </div>
    )
}

export default DataWithNumbersItem
