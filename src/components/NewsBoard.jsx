import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'


const NewsBoard = ({category}) => {
   const apiKey = "658845bd5cbd46238ec9d99918eff7bd";
    const [articles,setArticles] = useState([])

    useEffect(() =>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`

        fetch(url).then(response =>response.json()).then(data => setArticles(data.articles))

    },[category])

  return (
    <div>
        <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
        {articles.map((news,i) =>{
          return <NewsItem key={i} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default NewsBoard





////experiment




