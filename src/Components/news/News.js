import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "../styleContainer/news.module.css";
const News = () => {
  const [val, setVal] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8040cc3829fe453497ac472a132141d8`
      )
      .then((data) => {
        setVal(data.data.articles);
      });
  }, []);

  return (
    <div>
      <p className={classes.newsText}>News</p>
      {val.map((item) => (
        <div key={item.url} className={classes.mainContainer}>
          <img
            width="400px"
            height="400px"
            src={item.urlToImage}
            alt="images"
          />
          <p className={classes.titles}>Author: {item.author}</p>
          <p className={classes.titles}>Title: {item.title}</p>
          <p className={classes.titles}>Description :{item.description}</p>
          <p className={classes.titles}>content: {item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
