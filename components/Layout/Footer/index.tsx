import React, { useState } from 'react'
import STYLE_VARS from 'styles/vars'
import useTranslation from 'locale/useTranslation'
import Instagram from 'public/svgs/instagram.svg'
import Facebook from 'public/svgs/facebook.svg'
import InlineSvg from 'components/InlineSvg'
import Linkedin from 'public/svgs/linkedin.svg'
import EmailSignUp from 'components/EmailSignUp'
import FooterNavigation from './FooterNavigation'

interface Navigation {
    name: string
    href: string
    type: 'outside-url' | 'email' | 'inside-link'
}

const Footer: React.FC = () => {
    const { t } = useTranslation()

    const [activeItem, setActiveItem] = useState<string | null>(null)

    const navigation: Navigation[] = [
        { name: 'ABOUT_US', href: '/', type: 'inside-link' },
        { name: 'PRODUCTS', href: '/', type: 'inside-link' },
        { name: 'CONTACT', href: '/', type: 'inside-link' },
    ]

    const facebook = 'https://www.facebook.com/'
    const linkedin = 'https://www.linkedin.com/'
    const instagram = 'https://www.instagram.com/'

    const navigationTwo: Navigation[] = [
        { name: 'OFFICES', href: '/', type: 'inside-link' },
    ]

    const navigationThree: Navigation[] = [
        { name: 'Contact us', href: '/', type: 'email' },
    ]

    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="email-mobile">
                    <EmailSignUp
                        emailParagraph="Please send us email"
                        emailTitle="Email"
                    />
                </div>
                <FooterNavigation
                    navigation={navigation}
                    title={t('MENU')}
                    activeItem={activeItem}
                    setActiveItem={(name) => setActiveItem(name)}
                />

                <FooterNavigation
                    navigation={navigationTwo}
                    title={t('SERVICES')}
                    activeItem={activeItem}
                    setActiveItem={(name) => setActiveItem(name)}
                />

                <nav className="contact">
                    <FooterNavigation
                        navigation={navigationThree}
                        title={t('CONTACT')}
                        activeItem={activeItem}
                        setActiveItem={(name) => setActiveItem(name)}
                    />

                    <div className="social-svgs">
                        <a type="button" className="icon" href={facebook}>
                            <InlineSvg
                                fillColor="comp-primary"
                                src={Facebook}
                            />
                        </a>

                        <a type="button" className="icon" href={linkedin}>
                            <InlineSvg
                                fillColor="comp-primary"
                                src={Linkedin}
                            />
                        </a>

                        <a type="button" className="icon" href={instagram}>
                            <InlineSvg
                                fillColor="comp-primary"
                                src={Instagram}
                            />
                        </a>
                    </div>
                </nav>
                <div className="email-desktop">
                    <EmailSignUp
                        emailParagraph="Please send us email"
                        emailTitle="Email"
                    />
                </div>
            </div>

            <style jsx>{`
                footer {
                    display: flex;
                    justify-content: center;
                    background-color: ${STYLE_VARS.COMP_CREME};
                    padding: 8.2rem 0;
                }

                .footer-wrapper {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    width: 112.6rem;
                }

                .social-svgs {
                    display: flex;
                    padding-top: 2.5rem;
                }

                .icon {
                    display: block;
                    width: 2.3rem;
                    height: 2.3rem;
                    margin-right: 1.6rem;
                    cursor: pointer;
                }

                .icon:hover {
                    opacity: 0.7;
                    transition: opacity 250ms;
                }

                .icon:last-child {
                    margin-right: 0;
                }

                .email-desktop {
                    display: flex;
                }

                .email-mobile {
                    display: none;
                }

                @media (max-width: ${STYLE_VARS.DESKTOP_SM}) {
                    .footer-wrapper {
                        width: 96rem;
                    }
                }

                @media (max-width: ${STYLE_VARS.TABLET}) {
                    footer {
                        display: block;
                        background-color: ${STYLE_VARS.COMP_GREY};
                        padding: 6rem 4.4rem 7.5rem;
                    }

                    .footer-wrapper {
                        display: block;
                        width: 100%;
                    }

                    .email-desktop {
                        display: none;
                    }

                    .email-mobile {
                        display: flex;
                    }
                }
            `}</style>
        </footer>
    )
}

export default Footer
