import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../components/useFetch";

function Single() {
  const history = useHistory();
  const params = useParams();
  const { data = [] } = useFetch("/mock/kitchenTypes.json");
  const type = data.find((item) => item.id === Number(params.id)) || {};

  return (
    <div className="blockLeft">
      <h2>{type.title}</h2>
      <p>{type.description}</p>
      <button onClick={() => history.push("/")}>go to main</button>
    </div>
  );
}

export default Single;