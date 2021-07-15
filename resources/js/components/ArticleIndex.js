import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import swal from 'sweetalert';
function ArticleIndex(props) {
  const [articles, setArticles] = useState([])
  const [alert, setAlert] = useState([])

  useEffect(() => {
    axios.get('/api/articles').then(res => {
      console.log(res.data)
      setArticles(res.data)
    })
  }, [])

  function confirmDelete(id){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.delete(`/api/article/delete/${id}`).then(res => {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          window.location.href = "/";
        })
        
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }


  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">All Article</div>
            <div className="card-body">
              <Link className="btn btn-primary btn-sm mb-3" to='/create'>Create new article</Link>
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th width="50" className="text-center">No</th>
                      <th>Title</th>
                      <th width="200" className="text-center">Action</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    {articles.length? 
                      articles.map((article,i) => (
                        <tr key={i} className="text-center">
                          <td width="50">{i+1}</td>
                          <td>{article.title}</td>
                          <td width="200">
                            <div className="btn-group">
                              <Link className="btn btn-primary" to={`/article/${article.id}`}>Detail</Link>
                              <Link className="btn btn-success" to={`/article/edit/${article.id}`}>Edit</Link>
                              <button className="btn btn-danger" onClick={() => confirmDelete(article.id)}>Delete</button>
                            </div>
                          </td>
                        </tr>
                      ))
                    : <p>there's no article</p>}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleIndex;