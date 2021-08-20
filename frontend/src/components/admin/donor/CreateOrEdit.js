function CreateEditDonor(props) {
  const Create = props.Create;
  return (
    <>
      {Create ? (
        <form onSubmit={props.HandleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              value={props.name}
              onChange={props.handleInputChange}
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              name="description"
              value={props.description}
              onChange={props.handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="profession">Profession</label>
            <input
              name="profession"
              value={props.profession}
              onChange={props.handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="education">Education</label>
            <input
              name="education"
              value={props.education}
              onChange={props.handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Religiom">Religion</label>

            <select
              value={props.reli}
              onChange={props.onChangeReligion}
              className="form-control"
            >
              {props.religion.map((o) => (
                <option value={o.id}>{o.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Category-blood">Category-blood</label>
            <select
              value={props.catblood}
              onChange={props.onChangeCatBlood}
              className="form-control"
            >
              {props.categoryBlood.map((o) => (
                <option value={o.id}>{o.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              name="city"
              value={props.city}
              onChange={props.handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              name="country"
              value={props.country}
              onChange={props.handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              name="state"
              value={props.state}
              onChange={props.handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              className="form-control"
              onChange={props.onChangePhoto}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      ) : (
        <form onSubmit={props.HandleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              value={props.name}
              onChange={props.handleInputChange}
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              name="description"
              value={props.description}
              onChange={props.handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="profession">Profession</label>
            <input
              name="profession"
              value={props.profession}
              onChange={props.handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="education">Education</label>
            <input
              name="education"
              value={props.education}
              onChange={props.handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Religiom">Religion</label>

            <select
              value={props.reli}
              onChange={props.onChangeReligion}
              className="form-control"
            >
              {props.religion.map((o) => (
                <option value={o.id}>{o.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Category-blood">Category-blood</label>
            <select
              value={props.catblood}
              onChange={props.onChangeCatBlood}
              className="form-control"
            >
              {props.categoryBlood.map((o) => (
                <option value={o.id}>{o.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              name="city"
              value={props.city}
              onChange={props.handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              name="country"
              value={props.country}
              onChange={props.handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              name="state"
              value={props.state}
              onChange={props.handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              className="form-control"
              onChange={props.onChangePhoto}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      )}
    </>
  );
}

export default CreateEditDonor;
