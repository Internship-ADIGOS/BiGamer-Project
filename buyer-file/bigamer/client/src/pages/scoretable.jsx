import React from 'react'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import '../../assets/css/scoretable.css'

function Scoretable() {

    return (
        <>

            <Tabs variant='unstyled' >
                <div style={{ display: "flex", justifyContent: " center", alignItems: "center", marginTop: "2rem" }}>

                    <TabList className='tabs' style={{ border: "2px solid gold", borderRadius: "5px", width: "24rem", display: "flex", justifyContent: " center", alignItems: "center", margin: "0rem" }}>
                        <Tab _selected={{ color: 'white', bg: 'red.500' }} className='tab'>Game Record</Tab>
                        <Tab _selected={{ color: 'white', bg: 'red.500' }} className='tab' >Play Record</Tab>
                        <Tab _selected={{ color: 'white', bg: 'red.500' }} className='tab'>Activity Details</Tab>

                    </TabList>
                </div>
                <TabPanels>
                    <TabPanel>

                        <div className='trend' style={{ display: "flex", justifyContent: "space-between", margin: "1rem 4rem 2rem 5rem" }}>
                            <div className='trends' style={{ fontSize: "1.5rem" }}>Trends <DriveFileRenameOutlineIcon /></div>
                            <div className='win' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                                    <li style={{ marginRight: "1rem" }}><i className="fa-solid fa-circle" style={{ color: "red ", fontSize: "10px" }}></i> Left Win</li>
                                    <li style={{ marginRight: "1rem" }}><i className="fa-solid fa-circle" style={{ color: "blue ", fontSize: "10px" }}></i> Right Win</li>
                                    <li style={{ marginRight: "1rem" }}><i className="fa-solid fa-circle" style={{ color: "green ", fontSize: "10px" }}></i> Tie</li>
                                    <li style={{ marginRight: "1rem" }}><i className="fa-solid fa-circle" style={{ color: "grey ", fontSize: "10px" }}></i> Cancel</li>
                                </ul>
                            </div>
                        </div>

                        <div className='pointstable'
                            style={{
                                width: "100 %",
                                marginTop: " 0.2rem",
                                background: " rgba(255, 255, 255, 0.656)",
                                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                                backdropFilter: "blur(4px)",
                                webkitBackdropFilter: "blur(4px)",
                                borderRadius: "10px",
                                border: " 10px solid #232a5c",
                                margin: "3rem 5rem 5rem 5rem"
                            }}
                        >
                            <ul
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    margin: "2rem 8rem 2rem 8rem"

                                }}
                            >
                                <li style={{ fontSize: "1rem", color: "black", display: "flex" }}><i className="fa-solid fa-circle" style={{ color: "red ", fontSize: "2rem", marginRight: "0.2rem" }}></i>  29 Win</li>
                                <li style={{ fontSize: "1rem", color: "black", display: "flex" }}><i className="fa-solid fa-circle" style={{ color: "blue ", fontSize: "2rem", marginRight: "0.2rem" }}></i>  48 Win</li>
                                <li style={{ fontSize: "1rem", color: "black", display: "flex" }}><i className="fa-solid fa-circle" style={{ color: "green ", fontSize: "2rem", marginRight: "0.2rem" }}></i>  9 Draw</li>
                                <li style={{ fontSize: "1rem", color: "black", display: "flex" }}><i className="fa-regular fa-circle-xmark" style={{ color: "grey ", fontSize: "2rem", marginRight: "0.2rem" }}></i>14 Cancel</li>
                            </ul>

                            <div >

                                <table style={{ display: "block",overflow: "scroll", direction: "rtl", overflowX: "auto", whiteSpace: "nowrap", maxHeight: 440, width: '100%', marginBottom: "3rem" }} >
                                    <tbody style={{ borderWidth: 1, borderColor: 'black', color: "black" }}>


                                        <tr>

                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    textAlign: "center",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"

                                                }}>
                                                    56

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "  rgb(255, 138, 138)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid red",
                                                    margin: "auto",
                                                    color: "red",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    51

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    56

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    56

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    56

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: " rgb(87, 210, 155)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid green",
                                                    margin: "auto",
                                                    color: "green",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    80

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>

                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: " rgb(87, 210, 155)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid green",
                                                    margin: "auto",
                                                    color: "green",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    80

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: " rgb(87, 210, 155)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid green",
                                                    margin: "auto",
                                                    color: "green",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    80

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>

                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(202, 207, 206)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid grey",
                                                    margin: "auto",
                                                    color: "black",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    74

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: " rgb(87, 210, 155)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid green",
                                                    margin: "auto",
                                                    color: "green",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    81

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(202, 207, 206)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid grey",
                                                    margin: "auto",
                                                    color: "black",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    43

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    92

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: " rgb(87, 210, 155)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid green",
                                                    margin: "auto",
                                                    color: "green",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    80

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: " rgb(87, 210, 155)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid green",
                                                    margin: "auto",
                                                    color: "green",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    80

                                                </div>
                                            </td>


                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>

                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "  rgb(255, 138, 138)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid red",
                                                    margin: "auto",
                                                    color: "red",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    51

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    textAlign: "center",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"

                                                }}>
                                                    56

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "  rgb(255, 138, 138)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid red",
                                                    margin: "auto",
                                                    color: "red",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    51

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    56

                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: " rgb(87, 210, 155)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid green",
                                                    margin: "auto",
                                                    color: "green",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    81

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: " rgb(87, 210, 155)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid green",
                                                    margin: "auto",
                                                    color: "green",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    81

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: " rgb(87, 210, 155)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid green",
                                                    margin: "auto",
                                                    color: "green",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    81

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(202, 207, 206)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid grey",
                                                    margin: "auto",
                                                    color: "black",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    43

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    92

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>

                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    92

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    92

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    32

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "  rgb(255, 138, 138)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid red",
                                                    margin: "auto",
                                                    color: "red",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    51

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "  rgb(255, 138, 138)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid red",
                                                    margin: "auto",
                                                    color: "red",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    51

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "  rgb(255, 138, 138)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid red",
                                                    margin: "auto",
                                                    color: "red",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    51

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    32

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    32

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: " rgb(87, 210, 155)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid green",
                                                    margin: "auto",
                                                    color: "green",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    81

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>

                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    32

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: " rgb(87, 210, 155)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid green",
                                                    margin: "auto",
                                                    color: "green",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    81

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(202, 207, 206)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid grey",
                                                    margin: "auto",
                                                    color: "black",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    43

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: " rgb(87, 210, 155)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid green",
                                                    margin: "auto",
                                                    color: "green",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    81

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(202, 207, 206)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid grey",
                                                    margin: "auto",
                                                    color: "black",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    43

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "  rgb(255, 138, 138)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid red",
                                                    margin: "auto",
                                                    color: "red",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    51

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "  rgb(255, 138, 138)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid red",
                                                    margin: "auto",
                                                    color: "red",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    51

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    32

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                        </tr>


                                        <tr>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    32

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    32

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    32

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td><td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>

                                        </tr>
                                        <tr>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "  rgb(255, 138, 138)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid red",
                                                    margin: "auto",
                                                    color: "red",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    24

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "  rgb(255, 138, 138)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid red",
                                                    margin: "auto",
                                                    color: "red",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    25

                                                </div>
                                            </td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "  rgb(255, 138, 138)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid red",
                                                    margin: "auto",
                                                    color: "red",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    26

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "  rgb(255, 138, 138)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid red",
                                                    margin: "auto",
                                                    color: "red",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    27

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{ borderWidth: 1 }}>
                                                <div className='cell' style={{
                                                    backgroundColor: "rgb(166, 190, 250)",
                                                    display: "block",
                                                    height: "3rem",
                                                    width: "3rem",
                                                    borderRadius: "50%",
                                                    border: "2px solid blue",
                                                    margin: "auto",
                                                    color: "blue",
                                                    lineHeight: "50px",
                                                    // textAlign: "center"
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}>
                                                    32

                                                </div>
                                            </td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                            <td style={{
                                                borderWidth: 1, height: "3rem",
                                                width: "3rem",
                                            }}>&nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <p>Play Record</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Activity Details</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </>
    )
}

export default Scoretable