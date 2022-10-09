import React from 'react'
export default function List({ children, ordered, card }) {
    const list = ordered ? 'ol' : 'ul'
    const className = list + (card ? '-card' : '-normal')
    return (
        <div className="list-section">
            {React.createElement(list, { className }, children)}
        </div>
    )
}
