import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import InlineSvg from 'components/InlineSvg'
import LogoType from 'public/svgs/logo-symbol.svg'
import BurgerMenu from 'public/svgs/burger-menu.svg'
import ROUTES from 'constants/routes'
import STYLE_VARS from 'styles/vars'
import MobileNavigationMenu from 'components/Layout/Header/MobileNavigationMenu'
import classNames from 'classnames'
import useTranslation from 'locale/useTranslation'

interface Props {
    isActive?: boolean
}

const Header: React.FC<Props> = ({ isActive }) => {
    const { t } = useTranslation()
    const [hasScrolled, setHasScrolled] = useState(false)
    const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false)
    const [activeItem, setActiveItem] = useState<string | null>(null)

    const changeBackground = () => setHasScrolled(window.scrollY > 0)

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)

        return () => {
            window.removeEventListener('scroll', changeBackground)
        }
    }, [])

    const active = hasScrolled || isActive

    const navigation = [
        { name: 'PRODUCTS', href: '/' },
        { name: 'OFFICES', href: '/', className: 'margin-right' },
        { name: 'ABOUT', href: '/' },
        { name: 'CONTACT', href: '/' },
    ]

    return (
        <header className={classNames({ active })}>
            <div className="header">
                <div className="nav-wrapper">
                    <nav>
                        <ul>
                            {navigation.map((nav) => {
                                const linkActions = {
                                    onMouseOver: () => setActiveItem(nav.name),
                                    onMouseLeave: () => setActiveItem(null),
                                    onFocus: () => setActiveItem(nav.name),
                                }
                                return (
                                    <li
                                        className={classNames(nav.className, {
                                            'nav-active':
                                                nav.name === activeItem ||
                                                !activeItem,
                                        })}
                                        key={nav.name}
                                    >
                                        <Link href={nav.href}>
                                            <a {...linkActions}>
                                                {t(nav.name)}
                                            </a>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
                <div className="logo-wrapper">
                    <Link href={ROUTES.HOME}>
                        <a>
                            <div className="logo-type">
                                <InlineSvg
                                    fillColor={
                                        active ? 'comp-primary' : 'comp-black'
                                    }
                                    src={LogoType}
                                />
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="mobile-svgs">
                    <button
                        type="button"
                        className="burger-menu"
                        onClick={() => setIsMobileNavigationOpen(true)}
                    >
                        <InlineSvg
                            fillColor={active ? 'comp-primary' : 'comp-black'}
                            src={BurgerMenu}
                        />
                    </button>
                </div>

                {isMobileNavigationOpen && (
                    <MobileNavigationMenu
                        onClose={() => setIsMobileNavigationOpen(false)}
                    />
                )}
            </div>

            <style jsx>{`
                header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    background-color: transparent;
                    z-index: ${STYLE_VARS.Z_INDEX_HEADER};
                    color: ${STYLE_VARS.COMP_BLACK};
                    font-family: 'Lato', sans-serif;
                    transition: background-color 200ms;
                }

                .header {
                    display: flex;
                    align-items: center;
                    height: ${STYLE_VARS.HEADER_DESKTOP_HEIGHT};
                    width: 100%;
                    position: relative;
                }

                header.active {
                    border-bottom: 0.1rem solid ${STYLE_VARS.COMP_ALLOW};
                    background-color: ${STYLE_VARS.COMP_CREME};
                    color: ${STYLE_VARS.COMP_PRIMARY};
                }

                nav {
                    display: flex;
                    width: 100%;
                }

                ul {
                    display: flex;
                    width: 100%;
                    align-items: center;
                }

                li {
                    padding-right: 8rem;
                    font-size: 2.4rem;
                    font-weight: 500;
                    font-style: normal;
                    opacity: 0.5;
                    transition: opacity 250ms;
                }

                li:last-child {
                    padding-right: 0;
                }

                .nav-active {
                    opacity: 1;
                    background-color: transparent;
                }

                .margin-right {
                    margin-right: auto;
                }

                .logo-wrapper {
                    position: absolute;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    height: 8rem;
                }

                .logo-type {
                    height: 8rem;
                }

                .nav-wrapper {
                    width: 112.6rem;
                    margin: 0 auto;
                }

                .mobile-svgs {
                    display: none;
                }

                @media (max-width: ${STYLE_VARS.DESKTOP_LG}) {
                    .nav-wrapper {
                        width: 90rem;
                    }
                }

                @media (max-width: ${STYLE_VARS.DESKTOP_MD}) {
                    .nav-wrapper {
                        width: 80rem;
                    }

                    li {
                        padding-right: 5rem;
                        font-size: 1.8rem;
                    }

                    .logo-type {
                        height: 6rem;
                    }
                }

                @media (max-width: ${STYLE_VARS.DESKTOP_SM}) {
                    .header {
                        justify-content: space-between;
                        height: ${STYLE_VARS.HEADER_MOBILE_HEIGHT};
                        padding: 0 4.6rem;
                    }

                    nav {
                        display: none;
                    }

                    .active .logo-wrapper .logo-type {
                        width: 10.1rem;
                        height: 1.82rem;
                    }

                    .logo-wrapper {
                        padding: unset;
                    }

                    .nav-wrapper {
                        width: unset;
                        margin: 0 auto;
                    }

                    .logo-type {
                        margin-bottom: 3rem;
                    }

                    .mobile-svgs {
                        display: flex;
                        width: 100%;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .burger-menu {
                        width: 2.5rem;
                        height: 1.3rem;
                    }
                }
            `}</style>
        </header>
    )
}

export default Header
