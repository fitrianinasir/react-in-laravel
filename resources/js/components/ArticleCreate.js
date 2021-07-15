import React from "react";

function ArticleCreate(props) {
    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">All Article</div>
                        <div className="card-body">
                            <Link
                                className="btn btn-primary btn-sm mb-3"
                                to="/create"
                            >
                                Create new article
                            </Link>
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th
                                                width="50"
                                                className="text-center"
                                            >
                                                No
                                            </th>
                                            <th>Title</th>
                                            <th
                                                width="200"
                                                className="text-center"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleCreate;
