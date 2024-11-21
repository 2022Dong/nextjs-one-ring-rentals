"use client";
import { use } from 'react';
import articlesData from '../../../data/articles.json';
import SectionTitle from "../../../components/SectionTitle";

const ArticlePage = ({ params }) => {

  const { id } = use(params);

  // Fetch the article based on the id
  const article = articlesData.find((article) => article.id === parseInt(id));

  if (!article) {
    return <p>Article not found.</p>; // Handle case where article is not found
  }

  const { title, description, image, date, comments, tags } = article;

  return (
    <div className="container">
      <SectionTitle title="Single Article" />
      <h3>Title: {title}</h3>
      <p>{description}</p>
      <img src={image} alt={title} />
      <p>Date: {date}</p>
      <p>Comments: {comments}</p>
      <p>Tags: {tags}</p>
    </div>
  );
};

export default ArticlePage;
