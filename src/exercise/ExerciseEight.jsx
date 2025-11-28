// Make a list of your 5 favorite movies and render them.
export default function ExerciseEight() {
  const movies = ["They call him - OG", "Saaho", "Kantara", "Bahubali", "Hit3"];
  return (
    <>
      <ol>
        {movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ol>
    </>
  );
}
