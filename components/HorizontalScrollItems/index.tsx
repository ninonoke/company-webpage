import React from 'react'
import STYLE_VARS from 'styles/vars'

interface HorizontalScrollItemsProps {
    list: {
        id: string
        name: string
    }[]
    activeIndex?: number
    setActiveIndex?: (index: number) => void
}

const HorizontalScrollItems: React.FC<HorizontalScrollItemsProps> = ({
    list,
    activeIndex,
    setActiveIndex,
}) => {
    const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (setActiveIndex) {
            const scrollEl = e.target as HTMLElement
            const nodes = scrollEl.childNodes
            const { x: scrollStart, width: scrollWidth } =
                scrollEl.getBoundingClientRect()

            if (nodes && nodes.length) {
                // eslint-disable-next-line no-plusplus
                for (let index = 0; index < nodes.length; index++) {
                    const node = nodes[index] as HTMLElement
                    const { x: nodeStartPoint } = node.getBoundingClientRect()

                    if (
                        nodeStartPoint > scrollStart &&
                        nodeStartPoint < scrollWidth / 4 &&
                        activeIndex !== index
                    ) {
                        setActiveIndex(index)
                    }
                }
            }
        }
    }

    return (
        <div className="horizontal-scroll-items">
            <div
                className="product-items"
                onScroll={(event) => onScroll(event)}
            >
                {list.map((nameData, index) => (
                    <div className="item" key={nameData.id}>
                        <span>0{index + 1}</span>
                        <h3>{nameData.name}</h3>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .product-items {
                    display: flex;
                    color: ${STYLE_VARS.GAS_BROWN};
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    height: 5rem;
                    overflow-x: auto;
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                    padding-left: 1rem;
                }

                .product-items::-webkit-scrollbar {
                    display: none;
                }

                .item {
                    padding-right: 3.2rem;
                    position: relative;
                    margin-top: 1rem;
                    margin-left: 1rem;
                }

                .item:first-child {
                    margin-left: 4.4rem;
                }

                .item:last-child {
                    margin-right: 50vw;
                }

                span {
                    font-family: 'Lato', sans-serif;
                    position: absolute;
                    top: -0.5rem;
                    left: -1.5rem;
                }
            `}</style>
        </div>
    )
}

export default HorizontalScrollItems
