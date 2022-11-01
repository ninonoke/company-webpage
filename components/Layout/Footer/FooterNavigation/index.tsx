import React from 'react'
import Link from 'next/link'
import STYLE_VARS from 'styles/vars'
import classNames from 'classnames'
import useTranslation from 'locale/useTranslation'

interface Props {
    navigation: {
        name: string
        href: string
        type: 'outside-url' | 'email' | 'inside-link'
    }[]
    title: string
    activeItem: string
    setActiveItem: (name: string) => void
}

const FooterNavigation: React.FC<Props> = ({
    navigation,
    title,
    activeItem,
    setActiveItem,
}) => {
    const { t } = useTranslation()

    return (
        <nav className="menu">
            <div className="title">
                <h4>{title}</h4>
            </div>

            <ul>
                {navigation.map((nav) => (
                    <li
                        className={classNames('menu-nav', {
                            'nav-active':
                                nav.name === activeItem || !activeItem,
                        })}
                        onMouseOver={() => setActiveItem(nav.name)}
                        onMouseLeave={() => setActiveItem(null)}
                        onFocus={() => setActiveItem(nav.name)}
                        key={nav.name}
                    >
                        {nav.type === 'inside-link' && (
                            <Link href={nav.href}>
                                <a>{t(nav.name)}</a>
                            </Link>
                        )}

                        {nav.type === 'outside-url' && (
                            <a href={nav.href}>{t(nav.name)}</a>
                        )}

                        {nav.type === 'email' && (
                            <a
                                type="button"
                                className="mail"
                                href={`mailto: ${nav.href}`}
                            >
                                {nav.name}
                            </a>
                        )}
                    </li>
                ))}
            </ul>

            <style jsx>{`
                .title {
                    padding-bottom: 0.5rem;
                }

                .title h4 {
                    color: ${STYLE_VARS.COMP_BLACK};
                    font-size: 3rem;
                    font-weight: 400;
                    font-style: normal;
                }

                nav {
                    display: block;
                    color: ${STYLE_VARS.COMP_BLACK};
                }

                ul {
                    text-align: left;
                }

                li {
                    padding-bottom: 1.6rem;
                    font-size: 1.7rem;
                    font-family: 'Lato', sans-serif;
                    font-weight: 200;
                }

                .menu-nav {
                    opacity: 0.5;
                    transition: opacity 250ms;
                }

                .nav-active {
                    opacity: 1;
                }

                .mail {
                    font-size: 1.7rem;
                    font-weight: 200;
                    font-family: 'Lato', sans-serif;
                }

                @media (max-width: ${STYLE_VARS.DESKTOP_SM}) {
                    .title {
                        padding-bottom: 2rem;
                    }

                    .title h4 {
                        font-size: 2.5rem;
                    }

                    li {
                        padding-bottom: 1rem;
                        font-size: 1.6rem;
                    }

                    .mail {
                        font-size: 1.6rem;
                    }
                }

                @media (max-width: ${STYLE_VARS.TABLET}) {
                    .title {
                        padding-bottom: 1.5rem;
                        padding-top: 4.4rem;
                    }

                    .title h4 {
                        font-size: 2rem;
                        font-weight: 500;
                    }

                    li {
                        font-weight: 200;
                        padding-bottom: 1rem;
                    }
                }
            `}</style>
        </nav>
    )
}

export default FooterNavigation
