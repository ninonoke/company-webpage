import React, { useState } from 'react'
import arrowRightSvg from 'public/svgs/mail-arrow-right.svg'
import useTranslation from 'locale/useTranslation'
import InlineSvg from 'components/InlineSvg'
import STYLE_VARS from 'styles/vars'

interface EmailSignUpProps {
    emailTitle: string
    emailParagraph: string
}

const EmailSignUp: React.FC<EmailSignUpProps> = ({
    emailTitle,
    emailParagraph,
}) => {
    const { t } = useTranslation()
    const [emailValue, setEmailValue] = useState('')

    return (
        <div className="email-wrapper">
            <h4 className="email-title">{emailTitle}</h4>

            <p className="email-paragraph">{emailParagraph}</p>

            <div className="mail-input">
                <input
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    placeholder={t('ENTER_YOUR_EMAIL')}
                />
                <div className="arrow-right">
                    <InlineSvg fillColor="comp-black" src={arrowRightSvg} />
                </div>
            </div>
            <style jsx>{`
                .email-wrapper {
                    display: block;
                    width: 24.5rem;
                }

                .email-title {
                    color: ${STYLE_VARS.COMP_BLACK};
                    font-size: 3rem;
                    font-weight: 500;
                    font-style: normal;
                    padding-bottom: 0.5rem;
                }

                .email-paragraph {
                    color: ${STYLE_VARS.COMP_BLACK};
                    font-size: 1.4rem;
                    line-height: 1.8rem;
                    font-weight: 200;
                    font-style: normal;
                }

                .mail-input {
                    display: flex;
                    position: relative;
                    align-items: center;
                    padding-bottom: 0.7rem;
                    padding-top: 4rem;
                    border-bottom: 0.15rem solid ${STYLE_VARS.COMP_BLACK};
                }

                input {
                    font-size: 1.7rem;
                    border: none;
                    background-color: transparent;
                    -webkit-box-shadow: none;
                    -moz-box-shadow: none;
                    outline: 0;
                }

                input:focus::placeholder {
                    color: ${STYLE_VARS.COMP_BLACK};
                }

                input:focus::placeholder {
                    color: transparent;
                }

                .arrow-right {
                    width: 2rem;
                    height: 1.6rem;
                    position: absolute;
                    right: 0;
                    cursor: pointer;
                }

                @media (max-width: ${STYLE_VARS.DESKTOP_SM}) {
                    .email-wrapper {
                        width: 21.5rem;
                    }

                    .email-title {
                        font-size: 2.5rem;
                        padding-bottom: 1.5rem;
                    }

                    .mail-input {
                        padding-top: 3rem;
                    }

                    input {
                        font-size: 1.6rem;
                    }

                    .arrow-right {
                        width: 1.5rem;
                        height: 1.26rem;
                    }
                }

                @media (max-width: ${STYLE_VARS.TABLET}) {
                    .email-wrapper {
                        width: 28rem;
                    }
                    .email-title {
                        color: ${STYLE_VARS.COMP_BLACK};
                        font-size: 2rem;
                        font-weight: 400;
                        font-style: normal;
                    }

                    .mail-input {
                        max-width: 37.5rem;
                        width: 100%;
                    }

                    input {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    )
}

export default EmailSignUp
