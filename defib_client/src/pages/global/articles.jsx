
const Articles= (props) => {
  return (
    <div>
      {props.articles.map((article, index) => (
        <li>{article.description}</li>

      ))}
    </div>
  );
}

export default Articles