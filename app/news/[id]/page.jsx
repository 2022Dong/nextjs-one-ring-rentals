"use client";
import { use } from 'react';
import newsData from '../../../data/articles.json';
import SectionTitle from "../../../components/SectionTitle";

const NewsPage = ({ params }) => {

  const { id } = use(params);

  // Fetch the news based on the id
  const news = newsData.find((news) => news.id === parseInt(id));

  const { title, description, image, date, comments, tags } = news;

  return (
    <div className="container">
      <SectionTitle title="Single News" />
      <h3>Title: {title}</h3>
      <p>{description}</p>
      <img src={image} alt={title} />
      <p>Date: {date}</p>
      <p>Comments: {comments}</p>
      <p>Tags: {tags}</p>
    </div>
  );
};

export default NewsPage;
