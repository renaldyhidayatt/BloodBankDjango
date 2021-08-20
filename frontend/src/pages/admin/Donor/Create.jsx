import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { donorCreate } from "../../../redux/action/donor.action";
import { categoryService } from "../../../service/categoryBlood.service";
import { religionService } from "../../../service/religion.service";
import CreateEditDonor from "../../../components/admin/donor/CreateOrEdit";

function CreateDonor() {
  const [religion, setReligion] = useState([]);
  const [categoryBlood, setCategoryBlood] = useState([]);
  // state
  const history = useHistory();

  const initialState = {
    name: "",
    description: "",
    profession: "",
    education: "",
    city: "",
    country: "",
    state: "",
  };
  const [reli, setReli] = useState("");
  const [catblood, setCatBlood] = useState("");
  const [create, setCreate] = useState(initialState);
  const [photo, setPhoto] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    religionService
      .ReligionList()
      .then((res) => {
        // console.log(res.data.results);

        // console.log(nyoba);

        setReligion(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });

    categoryService
      .categoryBloodList()
      .then((res) => {
        console.log(res.data.results);
        setCategoryBlood(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onChangeReligion = (e) => {
    let oaj = e.target.value;
    setReli(oaj);
  };

  const onChangeCatBlood = (e) => {
    let oaj = e.target.value;
    setCatBlood(oaj);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCreate({ ...create, [name]: value });
  };

  const onChangePhoto = (e) => {
    const photo = e.target.files[0];
    setPhoto(photo);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("name", create.name);
    data.append("description", create.descripition);
    data.append("profession", create.profession);
    data.append("education", create.education);
    data.append("city", create.city);
    data.append("country", create.country);
    data.append("state", create.state);
    data.append("photo", photo);
    data.append("religion", reli);
    data.append("categoryblood", catblood);

    console.log(data);
    dispatch(donorCreate(data, history));
  };

  return (
    <div className="container-fluid">
      <div className="card-shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Agent Update</h6>
        </div>
        <div className="card-body">
          <CreateEditDonor
            Create={true}
            name={create.name}
            description={create.description}
            profession={create.profession}
            education={create.education}
            reli={reli}
            religion={religion}
            onChangeReligion={onChangeReligion}
            catblood={catblood}
            onChangeCatBlood={onChangeCatBlood}
            categoryBlood={categoryBlood}
            city={create.city}
            country={create.country}
            state={create.state}
            onChangePhoto={onChangePhoto}
            HandleSubmit={HandleSubmit}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateDonor;
