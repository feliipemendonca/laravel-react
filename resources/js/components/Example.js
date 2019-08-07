import React, { Component } from "react";

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-3">
                        <p className="text-center">Documentação</p>
                        <small className="text-center">Depedências usadas para esse exemplo</small>
                        <hr />
                        <ul>
                            <li>npm i react-router</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-9">
                        <div className="card">
                            <div className="card-header">Exemplo laravel e React</div>

                            <div className="card-body">Conseguir integrar</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
