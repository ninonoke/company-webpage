import React from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

interface Props {
    src: string
    alt: string
}

const FadeInImage: React.FC<Props> = ({ src, alt }) => {
    const addEventListener = (node: HTMLElement, done: () => void) => {
        node.addEventListener('transitionend', done, false)
    }
    return (
        <div className="wrapper">
            <SwitchTransition mode="in-out">
                <CSSTransition
                    mountOnEnter
                    key={alt}
                    addEndListener={
                        // strange type issue here needs investigation
                        addEventListener as unknown as (
                            done: () => void
                        ) => void
                    }
                    classNames="fade"
                >
                    <img className="fade-image" src={src} alt={alt} />
                </CSSTransition>
            </SwitchTransition>

            <style global jsx>{`
                .fade-enter {
                    opacity: 0;
                }

                .fade-enter-active {
                    opacity: 1;
                }

                .fade-exit {
                    opacity: 1;
                }

                .fade-exit-active {
                    opacity: 0;
                }

                .fade-enter-active {
                    transition: opacity 1000ms;
                }

                .fade-exit-active {
                    transition: opacity 100ms;
                }
            `}</style>

            <style jsx>{`
                .wrapper {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                .fade-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            `}</style>
        </div>
    )
}

export default FadeInImage
