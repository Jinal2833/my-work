import React from "react";
import avtar from "./../Profile.jpeg";

function Home() {
    return (
        <div className="min-h-screen">
            <div className="container pt-5 d-flex flex-column align-items-center">
                <img src={avtar} width={200} alt="Kikani Jinal" />
                <h1>Kikani jinal</h1>
                <h4>(Software Engineer)</h4>
                <p className="text-center border-bottom pb-3">Right now i'm in Silver Oak University pursuing 5thSemester in B.Tech IT. I'm an enginer and I love to design as well as code.</p>
                <p className="text-center">
                    <span className="d-mobile-block">Email: kikanijinal@gmail.com</span>
                    <span className="d-none d-web-contents"> | </span>
                    <span className="d-mobile-block">Phone: +91-9888888888</span>
                </p>
                <p className="text-center">Address: 33, ipsum dolor sit amet, Ahmedabad. IN - 222222</p>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-3">Skills</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">HTML</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "50%" }}>50%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0">CSS</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} >60%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">JAVA</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "40%" }}>40%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0">REACTJS</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} >60%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-3">Hobbies</h5>
                                <span class="badge bg-primary me-3 mb-3 p-2">dancing</span>
                                <span class="badge bg-secondary me-3 mb-3 p-2">reading</span>
                                <span class="badge bg-success me-3 mb-3 p-2">designing</span>
                                <span class="badge bg-danger me-3 mb-3 p-2">drawing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;