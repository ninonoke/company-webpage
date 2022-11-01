import React from 'react'
import closeSvg from 'public/svgs/close.svg'
import Facebook from 'public/svgs/facebook.svg'
import LinkedIn from 'public/svgs/linkedin.svg'
import Instagram from 'public/svgs/instagram.svg'
import InlineSvg from 'components/InlineSvg'
import STYLE_VARS from 'styles/vars'
import useTranslation from 'locale/useTranslation'
import { useRouter } from 'next/router'

interface MobileNavigationMenuProps {
    onClose?: () => void
}

const MobileNavigationMenu: React.FC<MobileNavigationMenuProps> = ({
    onClose,
}) => {
    const { t } = useTranslation()
    const { push } = useRouter()

    const onNavigationClick = (route: string) => {
        push(route)
        onClose()
    }

    const facebook = 'https://www.facebook.com/'
    const linkedin = 'https://www.linkedin.com/'
    const instagram = 'https://www.instagram.com/'

    return (
        <div className="mobile-navigation-wrapper">
            <div className="close-button">
                <div className="mobile-navigation-header">
                    <InlineSvg onClick={onClose} src={closeSvg} />
                </div>
            </div>
            <nav>
                <ul>
                    <li className="button-animation">
                        <button
                            type="button"
                            onClick={() => onNavigationClick('/')}
                        >
                            {t('PRODUCTS')}
                        </button>
                    </li>
                    <li className="button-animation">
                        <button
                            type="button"
                            onClick={() => onNavigationClick('/')}
                        >
                            {t('OFFICES')}
                        </button>
                    </li>

                    <li className="button-animation">
                        <button
                            type="button"
                            onClick={() => onNavigationClick('/')}
                        >
                            {t('ABOUT')}
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="contact">
                <ul>
                    <li>
                        <button
                            type="button"
                            onClick={() => onNavigationClick('/')}
                        >
                            {t('CONTACT')}
                        </button>
                    </li>
                </ul>
            </div>
            <div className="social-svgs">
                <a type="button" className="icon" href={facebook}>
                    <InlineSvg fillColor="comp-creme" src={Facebook} />
                </a>
                <a type="button" className="icon" href={linkedin}>
                    <InlineSvg fillColor="comp-black" src={LinkedIn} />
                </a>
                <a type="button" className="icon" href={instagram}>
                    <InlineSvg fillColor="comp-black" src={Instagram} />
                </a>
            </div>
            <div className="copy">
                <p>{t('COPY')}</p>
            </div>

            <style jsx>{`
                @media (max-width: ${STYLE_VARS.DESKTOP_SM}) {
                    .mobile-navigation-wrapper {
                        position: fixed;
                        height: 100vh;
                        width: 100vw;
                        background-color: ${STYLE_VARS.COMP_GREY};
                        padding: 4.5rem 4.6rem 2.3rem;
                        left: 0;
                        top: 0;
                    }

                    .close-button {
                        display: flex;
                        justify-content: space-between;
                    }

                    .mobile-navigation-header {
                        width: 2rem;
                        height: 2rem;
                        margin-left: 0;
                        cursor: pointer;
                    }

                    nav {
                        text-align: center;
                        font-size: 3.6rem;
                        font-weight: 500;
                        color: ${STYLE_VARS.COMP_BLACK};
                        font-family: 'Albra';
                        padding: 8.8rem 0 6rem;
                    }

                    nav li {
                        padding-bottom: 2.5rem;
                    }

                    nav li:last-child {
                        padding-bottom: 0;
                    }

                    .contact li {
                        display: block;
                        color: ${STYLE_VARS.COMP_BLACK};
                        font-size: 2rem;
                        font-weight: 500;
                        font-style: italic;
                        font-family: 'Lato', sans-serif;
                        padding-bottom: 6.5rem;
                    }

                    .button-animation {
                        transition: margin-left 500ms;
                        opacity: 1;
                    }

                    .button-animation:hover {
                        margin-left: 2rem;
                        transform-origin: left;
                        opacity: 0.5;
                    }

                    .copy {
                        display: flex;
                        position: absolute;
                        bottom: 2.3rem;
                        left: 50%;
                        transform: translateX(-50%);
                    }

                    p {
                        font-weight: 400;
                        font-size: 1.2rem;
                        color: ${STYLE_VARS.COMP_BLACK};
                        font-family: 'Lato', sans-serif;
                    }

                    .social-svgs {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .icon {
                        width: 2rem;
                        height: 2rem;
                        margin-right: 2rem;
                    }

                    .icon:last-child {
                        margin-right: 0;
                    }

                    button {
                        background: none;
                        color: inherit;
                        border: none;
                        padding: 0;
                        font: inherit;
                        cursor: pointer;
                        outline: inherit;
                    }
                }
            `}</style>
        </div>
    )
}

export default MobileNavigationMenu
