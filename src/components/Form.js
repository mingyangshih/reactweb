import React, { Fragment, useState, useRef } from "react";

const Form = (props) => {
  // const [txtAccessKeyId, settxtAccessKeyId] = useState(
  //   props.appData.accessKeyId
  // );
  const txtAccessKeyId = useRef()
  const [txtSecretAccessKey, settxtSecretAccessKey] = useState(
    props.appData.secretAccessKey
  );
  const [selectRegion, setselectRegion] = useState(props.appData.regionID);
  // function txtAccessKeyIdOnChanged(e: any) {
  //   settxtAccessKeyId(e.target.value);
  // }
  function txtSecretAccessKeyOnChanged(e: any) {
    settxtSecretAccessKey(e.target.value);
  }
  function selectRegionOnChanged(e: any) {
    console.log(e.target.value);
    setselectRegion(e.target.value);
  }
  function btnClick() {
    let txtAccessKeyIdValue = txtAccessKeyId.current.value;
    props.onSave({ txtAccessKeyIdValue, txtSecretAccessKey, selectRegion });
  }
  return (
    <Fragment>
      <h2 className="border-bottom pb-2 px-3"> Form</h2>
      <div className="d-flex flex-column px-3">
        <div className="mb-3">
          <label htmlFor="txtAccessKeyId" className="form-label fs-6">
            AccessKeyID
          </label>
          <input
            type="text"
            className="form-control"
            id="txtAccessKeyId"
            // value={txtAccessKeyId}
            ref={txtAccessKeyId}
            // onChange={txtAccessKeyIdOnChanged}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="txtSecretAccessKey" className="form-label fs-6">
            SecretAccessKey
          </label>
          <input
            onChange={txtSecretAccessKeyOnChanged}
            value={txtSecretAccessKey}
            type="text"
            className="form-control"
            id="txtSecretAccessKey"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="selectRegion" className="form-label fs-6">
            Select Region
          </label>
          <select
            onChange={selectRegionOnChanged}
            name=""
            id="selectRegion"
            className="form-select font12"
            value={selectRegion}
          >
            <option value="USA">USA</option>
            <option value="JP">JAPAN</option>
            <option value="TW">TAIWAN</option>
          </select>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-success btn-lg" onClick={btnClick}>
            Sure
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Form;