import React, {useState} from "react";
import {Link} from 'react-router-dom'

import axios from 'axios'
import swal from 'sweetalert';

const headers = {
  'Content-Type' : 'application/json'
}

function ArticleCreate(props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const submitNewArticle = (e) => {
    e.preventDefault()

    let imgFile = document.getElementById("image")

    let form_data = new FormData();
    form_data.append("title", title)
    form_data.append("content", content)
    form_data.append("file", imgFile.files[0])

    axios.post("/api/article/store", form_data, {headers}).then(res => {
      swal({
        title: "Success",
        text: "Article Created Successfully",
        icon: "success",
      });
    }).catch(err => console.log(err))   
  }
  
    return (
      <div className='container py-4'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header'>Create new project</div>
            <div className='card-body'>
              <form onSubmit={submitNewArticle}>
               <div className="form-group">
                 <label htmlFor="" className="d-block">Title</label>
                 <input type="text" id="title" onChange={(e) => setTitle(e.target.value)}/>
               </div>
               <div className="form-group">
                 <label htmlFor="" className="d-block">Content</label>
                 <textarea name="content" id="" cols="30" rows="10" onChange={(e) => setContent(e.target.value)}></textarea>
               </div>
               <div className="form-group">
                  <label htmlFor="" className="d-block">Image</label>
                  <input type="file" id="image" accept="image/*"/>
               </div>
               <div className="float-right">
                <Link className="btn btn-secondary mr-2" to='/'>Back</Link>
                <button className="btn btn-primary" type="submit">Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default ArticleCreate;
