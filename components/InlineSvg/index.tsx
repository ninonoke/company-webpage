import React from 'react'
import classNames from 'classnames'
import InlineSVG from 'svg-inline-react'
import STYLE_VARS from 'styles/vars'

export interface InlineSvgProps {
    onClick?: () => void
    onClose?: () => void
    src: React.ReactElement
    fillColor?:
        | 'comp-primary'
        | 'comp-allow'
        | 'comp-creme'
        | 'comp-black'
        | 'comp-grey'
}

const InlineSvg: React.FC<InlineSvgProps> = ({
    src,
    fillColor,
    onClose,
    onClick,
}) => {
    return (
        <>
            <InlineSVG
                onClose={onClose}
                onClick={onClick}
                className={classNames('inline-svg', fillColor)}
                src={src}
                element="span"
                style={{ display: 'flex', width: '100%', height: '100%' }}
            />

            <style global jsx>{`
                .inline-svg svg {
                    width: 100%;
                    height: 100%;
                }

                .comp-grey svg path {
                    fill: ${STYLE_VARS.COMP_GREY};
                }

                .comp-black svg path {
                    fill: ${STYLE_VARS.COMP_BLACK};
                }

                .comp-creme svg path {
                    fill: ${STYLE_VARS.COMP_CREME};
                }

                .comp-allow svg path {
                    fill: ${STYLE_VARS.COMP_ALLOW};
                }

                .comp-primary svg path {
                    fill: ${STYLE_VARS.COMP_PRIMARY};
                }
            `}</style>
        </>
    )
}

export default InlineSvg
