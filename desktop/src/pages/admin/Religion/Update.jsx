import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { religionService } from "../../../service/religion.service";
import { UpdateReligion } from "../../../redux/action/religion.action";

function UpdateReligon(props) {
  const id = props.match.params.id;
  const [religon, setReligon] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    religionService
      .ReligonDetail(id)
      .then((res) => {
        console.log(res.data);
        setReligon(res.data.name);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  const onChangeReligion = (e) => {
    const religion = e.target.value;
    setReligon(religion);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    dispatch(UpdateReligion(id));
  };

  return (
    <div className="container-fluid">
      <div className="card-shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Agent Update</h6>
        </div>
      </div>
      <div className="card-body">
        <form onSubmit={HandleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={religon}
              onChange={onChangeReligion}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateReligon;
