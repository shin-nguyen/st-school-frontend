import React, {useEffect, useState} from 'react';

import defaultAvatar from "../../../assets/images/defaultavt.png"
import {useDispatch, useSelector} from "react-redux";
import {resetForm,addUserImage} from '../../../services/user-service';
import "./ChangeImage.css";

const ChangeImage = () => {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.user.user);
    const [file, setFile] = useState(null);

    useEffect(() => {
        dispatch(resetForm());
    }, []);

    const onFormSubmit = (event) => {
        event.preventDefault();
        let params = new FormData();
        params.append("file", file);
        dispatch(addUserImage(params));
        alert("edit success")   
    };

    return (
        <>
    <form onSubmit={onFormSubmit} className="form-image">
      <label className="custom-file-upload fas">
        <div className="img-wrap" >
        <label htmlFor="fileInput"className="label-profile">
            {file ? <img className="writeImg can-click" src={URL.createObjectURL(file)} alt="" />:
                <img for="photo-upload" src={usersData.avatar||defaultAvatar} className="img-profile can-click"/>
            } 
        </label>    
        <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            className="input-profile"
            onChange={(e) => setFile(e.target.files[0])}
      />

        </div>
      </label>

      <button type="submit" className="edit button-profile">Sumbit</button>
    </form>
  
        </>
    );
   

};

export default ChangeImage;
