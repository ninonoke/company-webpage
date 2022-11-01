import React, { MouseEvent, ReactNode, useState } from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import STYLE_VARS from 'styles/vars'
import { PrimaryButtonType } from 'components/buttons/PrimaryButton/types/type.enum'

interface Props {
    children: ReactNode
    href?: string
    onClick?: () => void
    type?: PrimaryButtonType
}

const PrimaryButton: React.FC<Props> = ({
    onClick,
    children,
    href,
    type = PrimaryButtonType.PRIMARY,
}) => {
    const [{ x, y }, setPositions] = useState({ x: '0px', y: '0px' })
    const className = classnames('comp-button', type)
    const onMouseOver = (
        e: MouseEvent<HTMLDivElement> & {
            target: HTMLDivElement
        }
    ) => {
        const offset = e.target.getBoundingClientRect()
        const x = e.clientX - offset.left
        const y = e.clientY - offset.top

        setPositions({ x: `${x}px`, y: `${y}px` })
    }

    return (
        <>
            {href ? (
                <Link href={href}>
                    <a>
                        <div className={className} onMouseEnter={onMouseOver}>
                            <div className="circle" />
                            <span className="comp-button-inner">
                                {children}
                            </span>
                        </div>
                    </a>
                </Link>
            ) : (
                // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
                <button onClick={onClick} type="button">
                    <div className={className} onMouseEnter={onMouseOver}>
                        <div className="circle" />
                        <span className="comp-button-inner">{children}</span>
                    </div>
                </button>
            )}

            <style jsx>{`
                a,
                button {
                    display: inline-flex;
                    position: relative;
                }

                .comp-button {
                    position: relative;
                    border: 2px solid ${STYLE_VARS.COMP_BLACK};
                    cursor: pointer;
                    border-radius: 3rem;
                    overflow: hidden;
                }

                .comp-button-inner {
                    z-index: ${STYLE_VARS.Z_INDEX_OVER_DEFAULT};
                    position: relative;
                    display: flex;
                }

                .circle {
                    position: absolute;
                    width: 0;
                    height: 0;
                    top: ${y};
                    left: ${x};
                    background: ${STYLE_VARS.COMP_ALLOW};
                    transform: translate(-50%, -50%);
                    transition: width 0.8s ease, padding 0.8s ease;
                    border-radius: 50%;
                }

                .comp-button:hover .circle {
                    width: 250%;
                    padding-top: 250%;
                }

                .icon-button-vector:hover .circle {
                    width: 0;
                    padding-top: 0;
                }

                .header:hover .circle {
                    background: ${STYLE_VARS.COMP_CREME};
                }

                .header:hover {
                    color: ${STYLE_VARS.COMP_BLACK};
                }

                .icon-button,
                .icon-button-unchange,
                .icon-button-x {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 6.2rem;
                    height: 6.2rem;
                }

                @media (max-width: ${STYLE_VARS.TABLET}) {
                    .comp-button {
                        border-radius: 2.05rem;
                    }

                    .icon-button {
                        width: 3.6rem;
                        height: 3.6rem;
                    }

                    .icon-button-unchange {
                        width: 4.2rem;
                        height: 4.2rem;
                    }

                    .icon-button-vector {
                        width: 5.8rem;
                        height: 5.8rem;
                        border-radius: 9.6rem;
                    }

                    .icon-button-unchange:hover .circle,
                    .icon-button:hover .circle {
                        width: 0;
                        padding-top: 0;
                    }
                }
            `}</style>
        </>
    )
}

export default PrimaryButton
