const AgentCreateOrEdit = (props) => {
  const Create = props.Create;

  return (
    <div>
      {Create ? (
        <form onSubmit={props.HandleSubmit}>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              value="Create"
              id="name"
              value={props.name}
              onChange={props.onChangeName}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="designation">Designation</label>
            <input
              type="text"
              value={props.designation}
              onChange={props.onChangeDesignation}
              id="designation"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="organization">Organization</label>
            <input
              type="text"
              value={props.organization}
              onChange={props.onChangeOrganization}
              id="organization"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="description">Description</label>
            <input
              type="text"
              value={props.description}
              onChange={props.onChangeDescription}
              id="description"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="email">email</label>
            <input
              type="email"
              value={props.email}
              onChange={props.onChangeEmail}
              id="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="city">city</label>
            <input
              type="text"
              value={props.city}
              id="city"
              onChange={props.onChangeCity}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="state">state</label>
            <input
              type="text"
              value={props.state}
              onChange={props.onChangeState}
              id="state"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="country">country</label>
            <input
              type="text"
              id="country"
              value={props.country}
              onChange={props.onChangeCountry}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="photo">photo</label>
            <input
              type="file"
              onChange={props.onChangePhoto}
              id="photo"
              className="form-control"
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
              type="text"
              id="name"
              value={props.name}
              name="name"
              onChange={props.handleInputChange}
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="designation">Designation</label>
            <input
              type="text"
              value={props.designation}
              name="designation"
              onChange={props.handleInputChange}
              id="designation"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="organization">Organization</label>
            <input
              type="text"
              name="organization"
              value={props.organization}
              onChange={props.handleInputChange}
              id="organization"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              value={props.description}
              onChange={props.handleInputChange}
              name="description"
              id="description"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              value={props.email}
              onChange={props.handleInputChange}
              id="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">city</label>
            <input
              type="text"
              name="city"
              value={props.city}
              id="city"
              onChange={props.handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">state</label>
            <input
              name="state"
              type="text"
              value={props.state}
              onChange={props.handleInputChange}
              id="state"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={props.country}
              onChange={props.handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo">photo</label>
            <input
              type="file"
              onChange={props.onChangePhoto}
              id="photo"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AgentCreateOrEdit;
