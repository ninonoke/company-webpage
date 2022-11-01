import classNames from 'classnames'
import React from 'react'
import STYLE_VARS from 'styles/vars'

export const DESKTOP_CONTENT_WIDTH = '112.6rem'
export const DESKTOP_SM_CONTENT_WIDTH = '96rem'
export const MOBILE_CONTENT_WIDTH = '100%'

interface Props {
    slotOne?: React.ReactNode
    slotTwo?: React.ReactNode
    slotThree?: React.ReactNode
    alignment?: ('flex-start' | 'center' | 'flex-end')[]
    isReversedOnMobile?: boolean
}

const ThreeGrid: React.FC<Props> = ({
    slotOne,
    slotTwo,
    slotThree,
    alignment = ['center', 'center', 'center'],
    isReversedOnMobile,
}) => {
    return (
        <div
            className={classNames('three-grid', {
                'mobile-reversed': isReversedOnMobile,
            })}
        >
            <div className="item">{slotOne}</div>
            <div className="item">{slotTwo}</div>
            <div className="item">{slotThree}</div>

            <style jsx>{`
                .item:nth-child(1) {
                    align-self: ${alignment[0]};
                }

                .item:nth-child(2) {
                    align-self: ${alignment[1]};
                }

                .item:nth-child(3) {
                    align-self: ${alignment[2]};
                }
            `}</style>
            <style jsx>{`
                .three-grid {
                    width: ${DESKTOP_CONTENT_WIDTH};
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .item {
                    width: 36.2rem;
                }

                @media (max-width: ${STYLE_VARS.DESKTOP_SM}) {
                    .three-grid {
                        width: ${DESKTOP_SM_CONTENT_WIDTH};
                    }

                    .item {
                        width: 30.8rem;
                    }
                }

                @media (max-width: ${STYLE_VARS.TABLET}) {
                    .three-grid {
                        width: ${MOBILE_CONTENT_WIDTH};
                        flex-direction: column;
                    }

                    .mobile-reversed {
                        flex-direction: column-reverse;
                    }

                    .item {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    )
}

export default ThreeGrid
