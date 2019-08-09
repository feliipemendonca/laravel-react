import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectList extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };
    }

    ComponentDidMount() {
        axios.get("/api/projects").then((response) => {
            this.setState({
                projects: response.data
            });
        });
    }

    render() {
        const { projects } = this.state;
        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Todos os Projetos</div>
                            <div className="card-body">
                                <Link className="btn btn-primary btn-sm mb-3" to="/create">
                                    Criar novo projeto
                                </Link>
                                <ul className="list-group-item list-group-item-action d-flex justify-content-center">
                                    {projects.map((project) => (
                                        <Link className="list-group-item list-group-item-action d-flex justify-content-center" to={`/${projec.id}`} key={project.id}>
                                            {project.name}
                                            <span className="badge badge-primary badge-pill">{projec.tasks_count}</span>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectList;
