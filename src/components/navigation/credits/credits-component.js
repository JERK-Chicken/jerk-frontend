import React from 'react'
import {Row, Col} from 'reactstrap'
import BackToHome from './back-to-home-button'

export default function Credits(){
    return (
        <div className="container" id="credit-text">
            <br />
            <Row className="credit-card">
                <Col>
                    <img src={require('./images/logan.png')} alt="Logan Gantner" className='creditsPhoto'></img>
                </Col>
                <Col>
                    <h4>Logan Gantner</h4>
                    <ul>
                        <li><strong>Project Lead</strong></li>
                        <li>Led daily standups</li>
                        <li>Delegated team responsibilities</li> 
                        <li>Liaison between back and front end</li>
                    </ul>
                </Col>
                <Col>
                    <img src={require("./images/james.png")} alt="James Bell" className='creditsPhoto'></img>
                </Col>
                <Col>
                    <h4>James Bell</h4>
                    <ul>
                        <li><strong>Database Lead</strong></li>
                        <li>Created the schema for project database</li>
                        <li>Responsible for being James Bell</li>
                    </ul>
                </Col>
            </Row>
            <br />
            <Row className="credit-card">
                <Col>
                    <img src={require("./images/eric.png")} alt="Eric Last" className='creditsPhoto'></img>   
                </Col>
                <Col>
                    <h4>Eric Last</h4>
                    <ul>
                        <li><strong>Backend Lead</strong></li>
                        <li>Oversaw implementation of backend endpoints</li>
                        <li>Created various frontend components to assist frontend team</li>
                    </ul>
                </Col>
                <Col>
                    <img src={require("./images/robert.png")} alt="Robert Comstock III" className='creditsPhoto'></img>
                </Col>
                <Col>
                    <h4>Robert Comstock III</h4>
                    <ul>
                        <li><strong>Frontend Lead</strong></li>
                        <li>In charge of page layout</li>
                        <li>Head of design, testing, and functionality</li>
                    </ul>
                </Col>
            </Row>
            <br />
            <BackToHome />
        </div>
    )
}