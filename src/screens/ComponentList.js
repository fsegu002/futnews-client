import React, { Component } from 'react';
import { PrimaryButton } from '../components/buttons';
import Icon from '../components/icon';


class ComponentList extends Component {
    componentDidMount = () => {
        document.title = 'Components List'
    }
    
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
                                <li  className="list-group-item">
                                    <a href="#icons">Textarea</a>
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
                        <br/> <br/>
                        {/* start textarea */}
                        <div className="row">
                            <div id="icons" className="col-12">
                                <h4>Icons</h4>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <pre><code>
                                            &lt;Icon icon="user" /&gt;
                                        </code></pre>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Icon icon="user" />
                                        <p>user</p>
                                    </div>
                                    <div className="col">
                                        <Icon icon="mail" />
                                        <p>mail</p>
                                    </div>
                                    <div className="col">
                                        <Icon icon="login" />
                                        <p>login</p>
                                    </div>
                                    <div className="col">
                                        <Icon icon="logout" />
                                        <p>logout</p>
                                    </div>
                                    <div className="col">
                                        <Icon icon="notification" />
                                        <p>notification</p>
                                    </div>
                                    <div className="col">
                                        <Icon icon="settings" />
                                        <p>settings</p>
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