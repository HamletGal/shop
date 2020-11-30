import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../components/useFetch";

function Single() {
  const history = useHistory();
  const params = useParams();
  const { data = [] } = useFetch(`/mock/menus/${params.id}.json`);
  return (
    <div className="row">
     {data.map((item) => (
        <div className="col-md-4 mt-2">
          <div class="card">
            <img
              class="card-img-top"
              src={item.photoUrl}
              alt="Card image cap"
            />
            <p class="card-text">{item.name}</p>
          </div>
        </div>
      ))}
      <button className="btn btn-danger" onClick={() => history.push("/")}>go to back</button>
    </div>
  );
}

export default Single;