const Author = ({ phraseData }) => {
  const { phrase, author } = phraseData;
  return (
    <div className="author">
      <h3>{author}</h3>
    </div>
  );
};

export default Author;
