import React from 'react'
import classNames from 'classnames'
import STYLE_VARS from 'styles/vars'
import Link from 'next/link'

interface TextButtonButtonProps {
    children: string
    isActive?: boolean
    href?: string
    color?: 'gas-white' | 'gas-black' | 'gas-brown'
}

const TextButton: React.FC<TextButtonButtonProps> = ({
    children,
    isActive,
    href,
    color = 'gas-black',
}) => {
    const className = classNames('text-button', color, {
        active: isActive,
    })
    return (
        <>
            {href ? (
                <Link href={href}>
                    <a className={className}>{children}</a>
                </Link>
            ) : (
                <button type="button" className={className}>
                    {children}
                </button>
            )}

            <style jsx>{`
                .text-button {
                    cursor: pointer;
                    font-size: 1.7rem;
                    font-family: 'Lato', sans-serif;
                    font-weight: 200;
                    border: none;
                    background-color: transparent;
                    display: inline-block;
                    position: relative;
                    padding: 0 0.5rem 0.5rem 0;
                }

                .text-button::before {
                    content: '';
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    height: 0.1rem;
                    transform-origin: right;
                    transition: transform 200ms;
                }

                .text-button:hover::before {
                    transform: scaleX(0.2);
                }

                .gas-black::before {
                    background-color: ${STYLE_VARS.COMP_BLACK};
                }

                .gas-white::before {
                    background-color: ${STYLE_VARS.COMP_CREME};
                }

                .gas-brown::before {
                    background-color: ${STYLE_VARS.COMP_BLACK};
                }

                @media (max-width: ${STYLE_VARS.TABLET}) {
                    .text-button:hover::before {
                        transform: unset;
                    }
                }
            `}</style>
        </>
    )
}

export default TextButton
