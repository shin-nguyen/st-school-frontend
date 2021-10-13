import React,{useState, useEffect} from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addCourse, updateCourse } from '../../../../../actions/courseAction'
import listLanguage from "../../../../../assets/JsonData/language.json"

const CourseForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [id, setId] = useState(-1);
    const [name, setName] = useState('');
    const [descripton, setDescription] = useState('');
    const [totalLength, setTotalLength] = useState('');
    const [price, setPrice] = useState(0);
    const [language, setLanguage] = useState('English'); 
    const [file, setFile] = useState('');

    const onChange = (e) =>{
        switch (e.target.name){
            case "name" :   
                setName(e.target.value);
                break;
            case "description" :    
                setDescription(e.target.value);
                break;
            case "price":
                setPrice(e.target.value);
                break;
            case "totalLength":
                setTotalLength(e.target.value);
                break;
            case "language":
                setLanguage(e.target.value);
                console.log(language);
                break;
            case "file":
                setFile(e.target.files[0]);
                break;
            default : 
        }
    }

    const handleSubmit = (evt) => {
        let params = new FormData();

        params.append("name", name);
        params.append("description", descripton);
        params.append("totalLength", totalLength);
        params.append("language", language);
        params.append("price", price);
        params.append("file", file);

        if(id===-1){
            dispatch(addCourse(params));
        }
        else {
            params.append("id", id)
            dispatch(updateCourse(params));
        }
        history.push('/admin/courses');
    }
    return (
        <div>
             <form onSubmit= { handleSubmit } encType="multipart/form-data">
                <div className="form-group">
                    <label>Name:</label>
                    <input  type="text" 
                            className="form-control" 
                            placeholder="Enter Name" 
                            name="name"
                            value={name}
                            onChange={onChange}
                    />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input  type="text" 
                            className="form-control" 
                            placeholder="Enter Description" 
                            name="description"
                            value={descripton}
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Total length:</label>
                        <input  type="text" 
                                className="form-control" 
                                placeholder="Enter Total Length" 
                                name="totalLength"
                                value={totalLength}
                                onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Language:</label>
                        <select className="form-control"
                                name="language"
                                value={language}
                                onChange={onChange}
                    >
                        {
                            listLanguage.map((item) => 
                                <option key={item.id} 
                                        value={item.name}>
                                            {item.name}
                                </option>
                            )
                        }
                        </select>
                        </div>
                        <div className="form-group">
                            <label>Price:</label>
                            <input  type="number" 
                                    className="form-control" 
                                    placeholder="Enter Price" 
                                    name="price"
                                    value={price}
                                    onChange={onChange}                     
                    />
                </div>
                <div className="form-group">
                    <label>Image:</label>
                    <input  type="file"  multiple
                            className="form-control"
                            name="file"
                            files={file}
                            onChange={onChange}
                    />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>               
            </form>
        </div>
    )
}

export default CourseForm
