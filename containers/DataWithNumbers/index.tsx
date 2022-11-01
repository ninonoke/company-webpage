import React from 'react'
import STYLE_VARS from 'styles/vars'
import classNames from 'classnames'
import ThreeGrid from 'components/ThreeGrid'
import DataWithNumbersItem from './DataWithNumbersItem'

interface Props {
    isGrey?: boolean
    fontSize?: 'font-small' | 'font-medium'
}

const DataWithNumbers: React.FC<Props> = ({ isGrey, fontSize }) => {
    const firstNumber = 25
    const secondNumber = 304
    const thirdNumber = 55

    const minNumber = Math.min(firstNumber, secondNumber, thirdNumber)

    return (
        <div
            className={classNames('data-with-numbers', {
                'data-with-numbers-grey': isGrey,
            })}
        >
            <ThreeGrid
                alignment={['flex-start', 'flex-start', 'flex-start']}
                slotOne={
                    <DataWithNumbersItem
                        index={0}
                        startNumber={firstNumber - minNumber}
                        endNumber={firstNumber}
                        value=""
                        label="Sold"
                        isGrey={isGrey}
                        fontSize={fontSize}
                    />
                }
                slotTwo={
                    <DataWithNumbersItem
                        index={1}
                        startNumber={secondNumber - minNumber}
                        endNumber={secondNumber}
                        value=""
                        label="New"
                        isGrey={isGrey}
                        fontSize={fontSize}
                    />
                }
                slotThree={
                    <DataWithNumbersItem
                        index={2}
                        startNumber={thirdNumber - minNumber}
                        endNumber={thirdNumber}
                        value=""
                        label="Coming"
                        isGrey={isGrey}
                        fontSize={fontSize}
                    />
                }
            />

            <style jsx>{`
                .data-with-numbers {
                    width: 100%;
                    height: 30.2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: ${STYLE_VARS.COMP_PRIMARY};
                    color: ${STYLE_VARS.COMP_CREME};
                }

                .data-with-numbers-grey {
                    background-color: ${STYLE_VARS.COMP_BLACK};
                    color: ${STYLE_VARS.COMP_CREME};
                    min-height: 47rem;
                    padding: 8rem 0 10.5rem 0;
                }

                .number {
                    display: block;
                    text-align: center;
                }

                .number-grey h2 {
                    padding-bottom: 1.4rem;
                    line-height: 0.8;
                }

                h2 {
                    padding-bottom: 1rem;
                    line-height: 0.8;
                }

                .font-small {
                    font-size: 4.4rem;
                }

                .font-medium {
                    font-size: 6.4rem;
                }

                h4 {
                    max-width: 20rem;
                    padding-top: 1rem;
                    font-family: 'helveticaneue';
                    font-style: normal;
                    font-weight: 200;
                }

                .line {
                    display: inline-block;
                    width: 2.5rem;
                    border-bottom: 0.3rem solid ${STYLE_VARS.COMP_CREME};
                }

                .line-grey {
                    border-bottom: 0.3rem solid ${STYLE_VARS.COMP_BLACK};
                }

                @media (max-width: ${STYLE_VARS.DESKTOP_SM}) {
                    .container {
                        padding: 0 6rem;
                    }

                    .number {
                        font-size: 4.5rem;
                    }

                    .number-grey h2 {
                        padding-bottom: 1rem;
                        line-height: 0.5;
                    }

                    h2 {
                        padding-bottom: 0.5rem;
                    }

                    .font-medium {
                        font-size: 5.4rem;
                    }

                    h4 {
                        font-size: 2.4rem;
                    }
                }

                @media (max-width: ${STYLE_VARS.TABLET}) {
                    .data-with-numbers {
                        width: 100%;
                        height: unset;
                        padding: 0 10.4rem 9.2rem;
                    }

                    .container {
                        flex-direction: column;
                        align-items: center;
                        padding: 0;
                    }

                    h2 {
                        padding-bottom: 1rem;
                        padding-top: 7rem;
                    }

                    h4 {
                        max-width: 26rem;
                        padding-top: 1rem;
                        font-family: 'helveticaneue';
                        font-style: normal;
                    }

                    .line {
                        width: 2rem;
                    }
                }
            `}</style>
        </div>
    )
}

export default DataWithNumbers
