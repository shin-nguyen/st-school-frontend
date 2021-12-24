// import React, {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from "react-redux";
// import {formReset} from "../../services/auth-service";
// import {fetchUserInfo} from "../../services/user-service";
// import {resetForm, updateUserInfo} from '../../services/user-service';
// import "./account1.css"
// import AccountInfo from './accountInfo/AccountInfo';

// const Account1 = () => {
//     const dispatch = useDispatch();
//     const usersData = useSelector(state => state.user.user);
//     const errors = useSelector((state) => state.user.userEditErrors);
//     const [user, setUser] = useState(usersData);
//     const {id, firstName, lastName, address, phone} = user;
//     const {firstNameError, lastNameError} = errors;

//     console.log(user)

//     const handleInputChange = (event) => {
//         const {name, value} = event.target;
//         setUser({...user, [name]: value});
//     };

//     const onFormSubmit = (event) => {
//         const userEdit = {id, firstName, lastName, address, phone};
//         dispatch(updateUserInfo(userEdit));
//         alert("edit success")
//     };

//     useEffect(() => {
//         dispatch(fetchUserInfo());
//     }, [dispatch]);

//     return (
//         <div className='body-content'>
//             <div class="container rounded mt-5">
//                 <div class="row">
//                     {/* <div class="col-md-4">
//                         <div class="d-flex flex-column align-items-center text-center p-3 py-5">
//                             <img class="rounded-circle mt-5" src={user.avatar ? user.avatar : defaultAvt} width="90"/>
//                             <span class="font-weight-bold">{firstName + " " + lastName}</span>
//                             <span class="texta">{email}</span>
//                             <span>Change avatar</span>
//                             <span>Change password</span></div>
//                     </div> */}
//                     <div className="col-md-4">
//                         <AccountInfo/>
//                     </div>
//                     <div class="col-md-8">
//                         <div class="p-3 py-5 mt-5">
//                             <div class="d-flex justify-content-between align-items-center mb-3">
//                                 <div class="d-flex flex-row align-items-center back"><i class="fa fa-long-arrow-left mr-1 mb-1"></i>
//                                     <h6>Back to home</h6>
//                                 </div>
//                                 <h6 class="text-right">Edit Profile</h6>
//                             </div>
//                             <div class="row mt-4">
//                                 <div class="col-md-6">
//                                     <div className="mb-2">
//                                         <label>First name: </label>
//                                             <input
//                                                 type="text"
//                                                 className={firstNameError ? "form-control is-invalid" : "form-control"}
//                                                 name="firstName"
//                                                 value={firstName}
//                                                 onChange={handleInputChange}/>
//                                             <div className="invalid-feedback">{firstNameError}</div>
//                                     </div>
//                                 </div>
//                                 <div class="col-md-6">
//                                     <div className="mb-2">
//                                         <label>Last name: </label>
//                                         <input
//                                             type="text"
//                                             className={lastNameError ? "form-control is-invalid" : "form-control"}
//                                             name="lastName"
//                                             value={lastName}
//                                             onChange={handleInputChange}/>
//                                         <div className="invalid-feedback">{lastNameError}</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="row mt-4">
//                                 <div class="col-md-6">
//                                     <div className="mb-2">
//                                         <label htmlFor='address'>Address: </label>
//                                         <input
//                                             type="text"
//                                             className={"form-control"}
//                                             name="address"
//                                             value={address}
//                                             onChange={handleInputChange}/>
//                                     </div>
//                                 </div>
//                                 <div class="col-md-6">
//                                     <div className="mb-2">
//                                         <label>Phone number: </label>
//                                         <input
//                                             type="text"
//                                             className={"form-control"}
//                                             name="phone"
//                                             value={phone}
//                                             onChange={handleInputChange}/>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="mt-5 text-right">
//                                 <button class="btn btn-primary profile-button" type="button" onClick={() => onFormSubmit()}>
//                                     Save Profile
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Account1
