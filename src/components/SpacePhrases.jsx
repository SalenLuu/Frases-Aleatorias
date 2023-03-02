const SpacePhrases = ({ phraseData }) => {
  const { phrase, author } = phraseData;
  return (
    <div>
      <h1> INFOGALAX</h1>
      <div className="space">
        <p>{phrase}</p>
      </div>
    </div>
  );
};

export default SpacePhrases;
