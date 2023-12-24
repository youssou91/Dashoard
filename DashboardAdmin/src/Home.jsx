import React from "react";
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from "react-icons/bs";
import { BarChart, Bar, LineChart, Line, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, ResponsiveContainer,
} from "recharts";

function Home() {
    const data = [
        {
            name: "PSPT",
            mc: 81,
            mp: 90,
            amt: 100,
        },
        {
            name: "HTML",
            mc: 73,
            mp: 85,
            amt: 100,
        },
        {
            name: "MATHS",
            mc: 66,
            mp: 91,
            amt: 100,
        },
        {
            name: "ANG",
            mc: 71,
            mp: 80,
            amt: 100,
        },
        {
            name: "LOGIC",
            mc: 57,
            mp: 100,
            amt: 100,
        },
        {
            name: "C#",
            mc: 23,
            mp: 38,
            amt: 100,
        },
        {
            name: "FRANC",
            mc: 90,
            mp: 95,
            amt: 100,
        },
    ];

    return (
        <main className="main-container">
            <div className="main-title">
                <h3>DSHBOARD</h3>
            </div>
            <div className="main-cards">
                <div className="card">
                    <div className="card-inner">
                        <h3>PRODUITS</h3>
                        <BsFillArchiveFill className="card-icon" />
                    </div>
                    <h1>300</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>CATEGORIES</h3>
                        <BsFillGrid3X3GapFill className="card-icon" />
                    </div>
                    <h1>18</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>CLIENTS</h3>
                        <BsPeopleFill className="card-icon" />
                    </div>
                    <h1>45</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>ALERTES</h3>
                        <BsFillBellFill className="card-icon" />
                    </div>
                    <h1>10</h1>
                </div>
            </div>

            <div className="charts">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart  width={800} height={300} data={data} 
                        margin={{
                            top: 5,
                            right: 30,
                            left: 15,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="mp" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        <Bar dataKey="mc" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>


                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={800} height={300} data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 15,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="mp" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="mc" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </main>
    );
}

export default Home;
