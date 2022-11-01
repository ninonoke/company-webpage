import React from 'react'

export const DESKTOP_CONTENT_WIDTH = '112rem'
export const DESKTOP_SM_CONTENT_WIDTH = '96rem'
export const MOBILE_CONTENT_WIDTH = '100%'

interface ContentWrapperProps {
    children: React.ReactNode
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
    return (
        <div className="content-wrapper">
            {children}
            <style jsx>{`
                .content-wrapper {
                    padding: 0 10rem 0 11rem;
                    margin: 0 auto;
                }
            `}</style>
        </div>
    )
}

export default ContentWrapper
