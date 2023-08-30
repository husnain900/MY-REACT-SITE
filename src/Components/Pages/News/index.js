import React from "react";

const NewsArea = () => {
  const newsData = [
    {
      imgSrc: "news/news-big.png",
      newsTitle: "Veniam ex tempor qui ad amet mollit cillum aliqua aliqua. Fugiat tempor eu magna",
      newsContent: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more. Ad minim in commodo fugiat adipisicing cupidatat tempor aliqua.",
      authorImgSrc: "news/author-1.png",
      authorName: "Melisa campbell",
      date: "26 Oct 2021"
    },
    {
      imgSrc: "news/news-2.png",
      title: "Nostrud occaecat reprehenderit elit pariatur do occaecat.",
      content: "Irure enim eiusmod ipsum do Lorem sit consectetur enim consectetur. Nostrud ipsum eiusmod eiusmod culpa anim excepteur.",
      authorImg: "news/author-2.png",
      authorName: "Connley jimmy",
      date: "26 Oct 2021",
      readTime: "8 min read"
    }
  ];

  const Cards = [
    {
      imgUrl: "news/news-1.png",
      title: "Revolutionising the travel industry, one partnership at a time",
      content: "Irure enim eiusmod ipsum do Lorem sit consectetur enim consectetur. Nostrud ipsum eiusmod eiusmod culpa anim excepteur.",
      authorImg: "news/author-1.png",
      authorName: "Jennifer lawrence",
      date: "26 Oct 2021",
      readTime: "8 min read"
    },
    // Add more news items here...
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="section_heading_center">
            <h2>Latest travel news</h2>
          </div>
        </div>
      </div>
      <div className="row">
        {newsData.map((item, index) => (
          <div className="col-lg-7" key={index}>
            <div className="news_area_top_left">
              <a href="/"><img src={item.imgSrc} alt="img" /></a>
            </div>
          </div>
        ))}
        {newsData.map((item, index) => (
          <div className="col-lg-5" key={index}>
            <div className="news_area_top_right">
              <h2><a href="/">{item.newsTitle}</a></h2>
              <p>{item.newsContent}</p>
              <a href="/">Read full article <i className="fas fa-arrow-right"></i></a>
              <div className="news_author_area">
                <div className="news_author_img">
                  <img src={item.authorImgSrc} alt="img" />
                </div>
                <div className="news_author_area_name">
                  <h4>{item.authorName}</h4>
                  <p><a href="/">{item.date}</a> <i className="fas fa-circle"></i> 8 min read</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
      {Cards.map((news, index) => (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
          <div className="news_item_boxed">
            <div className="news_item_img">
              <a href="news-details.html">
                <img src={news.imgUrl} alt="img" />
              </a>
            </div>
            <div className="news_item_content">
              <h3>
                <a href="news-details.html">{news.title}</a>
              </h3>
              <p>{news.content}</p>
            </div>
            <div className="news_author_area">
              <div className="news_author_img">
                <img src={news.authorImg} alt="img" />
              </div>
              <div className="news_author_area_name">
                <h4>{news.authorName}</h4>
                <p>
                  <a href="news.html">{news.date}</a> <i className="fas fa-circle"></i>{" "}
                  {news.readTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="col-lg-12">
        <div className="pagination_area">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NewsArea;
