import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { donorCreate, donorUpdate } from "../../../redux/action/donor.action";
import { categoryService } from "../../../service/categoryBlood.service";
import { religionService } from "../../../service/religion.service";
import CreateEditDonor from "../../../components/admin/donor/CreateOrEdit";
import { donorService } from "../../../service/donor.service";

function UpdateDonor(props) {
  const id = props.match.params.id;

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
  const [update, setUpdate] = useState(initialState);
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

    donorService
      .DonorDetail(id)
      .then((res) => {
        setUpdate(res.data);
        console.log(res.data);
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
    setUpdate({ ...update, [name]: value });
  };

  const onChangePhoto = (e) => {
    const photo = e.target.files[0];
    setPhoto(photo);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("name", update.name);
    data.append("description", update.descripition);
    data.append("profession", update.profession);
    data.append("education", update.education);
    data.append("city", update.city);
    data.append("country", update.country);
    data.append("state", update.state);
    data.append("photo", photo);
    data.append("religion", reli);
    data.append("categoryblood", catblood);

    console.log(data);
    dispatch(donorUpdate(data, history));
  };

  return (
    <div className="container-fluid">
      <div className="card-shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Donor Update</h6>
        </div>
        <div className="card-body">
          <CreateEditDonor
            Create={false}
            name={update.name}
            description={update.description}
            profession={update.profession}
            education={update.education}
            reli={reli}
            religion={religion}
            onChangeReligion={onChangeReligion}
            catblood={catblood}
            onChangeCatBlood={onChangeCatBlood}
            categoryBlood={categoryBlood}
            city={update.city}
            country={update.country}
            state={update.state}
            onChangePhoto={onChangePhoto}
            HandleSubmit={HandleSubmit}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default UpdateDonor;
