const ScorecardsContainer = ({ matches }) => {
  return (
    <div className="scorecards-container">
      {matches.map((match, index) => (
        <Scorecard key={index} match={match} />
      ))}
    </div>
  );
};

export default ScorecardsContainer;
