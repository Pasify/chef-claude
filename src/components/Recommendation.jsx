import useRecipe from "../../hooks/useRecipe";
import ReactMarkdown from "react-markdown";

function Recommendation() {
  const { data } = useRecipe();

  console.log(`data is: `, data?.content);
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Claude Suggested Recipe:</h2>
      <ReactMarkdown>{data?.content}</ReactMarkdown>
      <p></p>
    </section>
  );
}

export default Recommendation;
