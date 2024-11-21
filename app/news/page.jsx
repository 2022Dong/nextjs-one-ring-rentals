import Link from 'next/link';
import newsData from '../../data/articles.json';
import Copyright from "../../components/Copyright";
import SectionTitle from "../../components/SectionTitle";

const NewsPage = () => {
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="main col-sm-12">
              <SectionTitle title="Latest News" />
              <div className="grid-style1 clearfix">
                {newsData.map((news) => (
                  <div className="item col-md-4" key={news.id}>
                    <div className="image">
                      <Link href='/'>
                        <span className="btn btn-default">
                          <i className="fa fa-file-o"></i> Read More
                        </span>
                      </Link>
                      <img src={news.image} alt={news.title} />
                    </div>
                    <div className="tag"><i className="fa fa-file-text"></i></div>
                    <div className="info-blog">
                      <span className="title">{news.title}</span>
                      <span className="title">{news.description}</span>
                      <span className="text">{news.text}</span>
                      <span className="meta">
                        <span className="author">
                          <i className="fa fa-user"></i> {news.author}
                        </span>
                        <span className="date">
                          <i className="fa fa-clock-o"></i> {news.date}
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Copyright />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;