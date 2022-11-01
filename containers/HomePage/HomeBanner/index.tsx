import React from 'react'
import STYLE_VARS from 'styles/vars'
import Instagram from 'public/svgs/instagram.svg'
import Facebook from 'public/svgs/facebook.svg'
import InlineSvg from 'components/InlineSvg'
import en from 'locale/en'
import convertHexToRGBA from 'util/convertHexToRGBA'
import FadeInImage from 'components/FadeInImage'
// import ScrollDownLine from 'components/ScrollDownLine'

const HomeBanner: React.FC = () => {
    const facebook = 'https://www.facebook.com/'
    const instagram = 'https://www.instagram.com/'

    return (
        <div className="home-banner">
            <div className="banner-image">
                <img alt="bannerImage" src="/banner1.png" />
            </div>
            <div className="banner-image-mobile">
                <FadeInImage src="public/banner1.png" alt="mobileBannerImage" />
            </div>
            <div className="social">
                <div className="wrapper">
                    <div className="line" />
                    <p className="copy">{en.COPY}</p>
                    <div className="social-svgs">
                        <a type="button" className="icon" href={facebook}>
                            <InlineSvg fillColor="comp-creme" src={Facebook} />
                        </a>

                        <a type="button" className="icon" href={instagram}>
                            <InlineSvg fillColor="comp-creme" src={Instagram} />
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .home-banner {
                    width: 100%;
                    height: 100vh;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .home-banner::after {
                    height: 100vh;
                    width: 100%;
                    top: 0;
                    left: 0;
                    position: absolute;
                    content: '';
                    background-image: linear-gradient(
                        to bottom,
                        rgba(0, 0, 0, 0.3),
                        rgba(0, 0, 0, 0)
                    );
                }

                .banner-image {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                }

                img {
                    object-fit: fill;
                    height: 100%;
                    width: 100%;
                }

                .banner-image-mobile {
                    display: none;
                }

                .first-part {
                    text-align: center;
                    text-align: center;
                }

                .second-part {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                h1 {
                    color: ${STYLE_VARS.COMP_CREME};
                    font-weight: 600;
                }

                .social {
                    width: 2rem;
                    position: absolute;
                    top: 11rem;
                    right: 3rem;
                    overflow: hidden;
                    z-index: ${STYLE_VARS.Z_INDEX_OVER_IMAGE};
                }

                .wrapper {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                }

                .copy {
                    display: block;
                    transform: rotate(-90deg);
                    margin: 5.1rem 0 8.1rem 0;
                    font-weight: 400;
                    font-size: 1.2rem;
                    color: ${STYLE_VARS.COMP_CREME};
                    font-family: 'Lato', sans-serif;
                    white-space: nowrap;
                }

                .social-svgs {
                    display: block;
                    margin: 0 auto;
                }

                .icon {
                    display: block;
                    width: 2rem;
                    height: 2rem;
                    margin-bottom: 1.6rem;
                    cursor: pointer;
                }

                .icon:last-child {
                    margin-right: 0;
                }

                .line {
                    width: 0.125rem;
                    background-color: ${convertHexToRGBA(
                        STYLE_VARS.COMP_CREME,
                        50
                    )};
                    height: calc(100vh - ${STYLE_VARS.BANNER_LINE_HEIGHT});
                    margin: 2.5rem 0 3rem;
                }

                @media (max-width: ${STYLE_VARS.DESKTOP_MD}) {
                    .social {
                        top: 7rem;
                    }

                    .line {
                        height: calc(
                            100vh - ${STYLE_VARS.BANNER_LINE_HEIGHT_MD}
                        );
                    }
                }

                @media (max-width: ${STYLE_VARS.DESKTOP_SM}) {
                    .social {
                        display: none;
                    }

                    h1 {
                        font-size: 6rem;
                    }

                    .banner-text-paragraph {
                        font-size: 1.4rem;
                    }

                    .banner-text-mobile p {
                        color: ${STYLE_VARS.COMP_CREME};
                        font-size: 1.7rem;
                        font-family: 'Lato', sans-serif;
                        font-weight: 200;
                        padding-top: 2rem;
                    }
                }

                @media (max-width: ${STYLE_VARS.TABLET}) {
                    h1 {
                        color: ${STYLE_VARS.COMP_CREME};
                        font-weight: 500;
                        font-size: 3rem;
                    }

                    .banner-image {
                        display: none;
                    }

                    .banner-image-mobile {
                        display: flex;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                }
            `}</style>
        </div>
    )
}

export default HomeBanner
