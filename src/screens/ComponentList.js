import React, { Component } from 'react';
import { PrimaryButton } from '../components/buttons';


class ComponentList extends Component {
    render() {
        return (
            <div className="container-fluid component-list">
                <div className="row">
                    <div className="col-3">
                        <nav id="side-nav">
                            <ul className="list-group list-group-flush">
                                <li  className="list-group-item">
                                    <a href="#buttons">Buttons</a>
                                </li>
                                <li  className="list-group-item">
                                    <a href="#textarea">Textarea</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-9">
                        <h3>All components</h3>
                        <hr />

                        {/* start buttons */}
                        <div className="row">
                            <div id="buttons" className="col-12">
                                <h4>Buttons</h4>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <pre><code>
                                            {`
                                            <PrimaryButton name="Sumbit"  />
                                            `}
                                        </code></pre>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-3">
                                        <PrimaryButton name="Sumbit"  />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end buttons */}
                        <br/><br/>
                        {/* start textarea */}
                        <div className="row">
                            <div id="textarea" className="col-12">
                                <h4>Textarea</h4>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <pre><code>
                                        {`
<label htmlFor="exampleFormControlTextarea1">
    Example textarea
</label>
<textarea   className="form-control" 
            id="exampleFormControlTextarea1" 
            rows="3"
            placeholder="Start typing here" />
                                        `}
                                        </code></pre>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                                        <textarea   className="form-control" 
                                                    id="exampleFormControlTextarea1" 
                                                    rows="3"
                                                    placeholder="Start typing here" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end textarea */}
                    </div>
                </div>
            </div>
        );
    }
}

export default ComponentList;