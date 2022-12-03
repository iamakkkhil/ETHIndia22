import React, { useState } from "react";

// import "../css/main.css"
function PitchForm() {
  const [imageState, setImageState] = useState("")
  getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  handleFileInputChange = (e) => {
    console.log(e.target.files[0]);
    let { file } = this.state;

    file = e.target.files[0];

    this.getBase64(file)
      .then((result) => {
        file["base64"] = result;
        console.log("File Is", file);
        this.setState({
          base64URL: result,
          file,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    var { heading, desc, ytLink, pLink, img } = document.forms[0];
    console.log(img)

    json_data = {
      heading: heading.value,
      desc: desc.value,
      ytLink: ytLink.value,
      pLink: pLink.value,
    };

    // await writeJsonFile('foo.json', json_data);
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Heading </label>
          <input type="text" name="heading" required />
        </div>
        <div className="input-container">
          <label>Description </label>
          <textarea name="desc" cols="40" rows="5" required />
        </div>
        <div className="input-container">
          <label>YouTube Demo Link </label>
          <input type="url" name="ytLink" required />
        </div>
        <div className="input-container">
          <label>Prototype Link </label>
          <input type="url" name="pLink" required />
        </div>
        <div className="input-container">
          <label>Image </label>
          <input
            type="file"
            name="img"
            accept="image/png, image/gif, image/jpeg, image/jpg"
            required
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div className="info">
          <a href="/signup">Don't have a account? Sign Up</a>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="auth-form">
        <div className="title">Login</div>

        {renderForm}
      </div>
    </div>
  );
}

export default PitchForm;
