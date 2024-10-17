import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Singalpage = () => {
    let [state, setState] = useState([]);
    let api = fetch("https://qtify-backend-labs.crio.do/albums/top").then((e) => e.json()).then((f) => setState(f))
    let location = useLocation();
    let Dileep = location.state.data
    return (
        <div>
            <div className='first-div'>
                <Navbar expand="lg" className="navbar navbar-bg-success"  >
                    <Container fluid>
                        <Navbar.Brand href="#home">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0GpgTZdIlebkTxiAfBcD_Isp6DrWaSreT9w&usqp=CAU"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>

                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action2">Q Tify</Nav.Link>
                            </Nav>

                            <Button variant="dark" style={{ backgroundColor: "black", color: "green" }}>Give feedback </Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", paddingTop: "70px", backgroundColor: "black", height: "450px" }} >
                <div><img src={Dileep.image} alt="" style={{ width: "288px", height: "329px", borderRadius: "10px" }} /></div>
                <div style={{ color: "white" }}>
                    <h1 >Best of Surprised Secret in 2023</h1>
                    <p>{Dileep.description}</p>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <p>{Dileep.songs[0].title} </p>
                        <p>{Dileep.songs[0].durationInMs}</p>
                        <p>{Dileep.follows} </p>
                    </div>
                    <div style={{ justifyContent: "space-evenly", display: "flex" }}>
                        <Button variant="outline-light">Shuffle</Button>
                        <Button variant="outline-light">Add to Library</Button>
                    </div>
                </div>
            </div>
            <div style={{ width: "100%", backgroundColor: "black" }}>
                <table >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.map(resu => resu.songs.map(res=>{
                            return (
                                <tr key={res.title}>
                                    <td>
                                        <img src={res.image} alt="" style={{ width: "59px", height: "64px" }} />
                                    </td>
                                    <td>{res.title}</td>
                                    <td>{res.artists}</td>
                                    <td>{res.durationInMs}</td>
                                </tr>
                                
                            );
                        }))}
                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default Singalpage;





