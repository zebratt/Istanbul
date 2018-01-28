import './News.scss'
import React from 'react'

export default ({ news }) => {
    const len = 5 //暂时就显示5条
    return (
        <div className="news">
            <div className="block-title">财经资讯</div>
            <ul className="list">
                {news.slice(len).map((item, idx) => {
                    return (
                        <li key={idx} className="item">
                            <a target="_blank" className="title" href={item.url}>
                                {item.title}
                            </a>
                            <div className="intro">{item.intro}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
