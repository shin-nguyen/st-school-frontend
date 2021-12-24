// import React, {useEffect, useState} from 'react';

// import defaultAvatar from "../../../assets/images/kai.jpg"
// import {useDispatch, useSelector} from "react-redux";
// import {resetForm,addUserImage} from '../../../services/user-service';
// import defaultAvt from "../../../assets/images/defaultavt.png"
// import { Link } from 'react-router-dom';

// const AccountInfo = () => {
//     const dispatch = useDispatch();
//     const user = useSelector(state => state.user.user);
//     const {email, firstName, lastName} = user;
//     const [file, setFile] = useState(null);

//     const onFormSubmit = (event) => {
//         let params = new FormData();
//         params.append("file", file);
//         dispatch(addUserImage(params));
//     };

//     return (
//         <div>
//            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
//                 <form onSubmit={onFormSubmit}>
//                     <label htmlFor="fileInput">
//                         {
//                             file ? <img className="rounded-circle mt-5" width="90" height="90" src={URL.createObjectURL(file)} alt="" />:
//                             <img class="rounded-circle mt-5" src={user.avatar ? user.avatar : defaultAvt} width="90" height="90"/>
//                         } 
//                     </label>    
//                     <input
//                         type="file"
//                         id="fileInput"
//                         style={{ display: "none" }}
//                         className="input-profile"
//                         onChange={(e) => setFile(e.target.files[0])}
//                     />
//                     <button type="submit">Sumbit</button>
//                 </form>
//                 <span class="font-weight-bold">{firstName + " " + lastName}</span>
//                 <span class="texta">{email}</span>
//                 <Link>Change password</Link>
//             </div>     
//         </div>
//     )
// }

// export default AccountInfo
