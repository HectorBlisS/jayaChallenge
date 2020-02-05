import React, { useState, useEffect } from 'react'
import { VictoryLine, VictoryTheme, VictoryChart } from "victory";

const datas = [
    { x: 5, y: 80 },
    { x: 10, y: 50 },
];


let exampleData = `date,amount,spent
2020-01-01,01,100
2020-01-02,10,400
2020-01-03,05,300
2020-01-04,20,200
2020-01-05,06,500`

export default function Chart() {
    let [text, setText] = useState(exampleData)
    let [axis, setAxis] = useState([])
    let [rows, setRows] = useState([])
    let [xLabel, setXLabel] = useState("X axis")
    let [yLabel, setYLabel] = useState("Y axis")

    let [data, setData] = useState(datas)

    useEffect(() => {
        getAxis(exampleData)
    }, [])

    function onChange({ target: { value } }) {
        setText(value)
        getAxis(value)
    }

    function getAxis(exampleData) {
        let rows = exampleData.split('\n')
        setRows(rows.slice(1))
        let ax = rows[0].split(",")
        setAxis(ax)
    }

    function onSelectXAxis({ target: { value } }) {
        // validate to splice the one selected in the other axis
        setXLabel(value)
        formatXData(value)
    }

    function onSelectYAxis({ target: { value } }) {
        // validate to splice the one selected in the other axis
        setYLabel(value)
        formatYData(value)
    }

    function formatXData(value) {
        let index = axis.indexOf(value)
        let ds = [...data]
        rows.forEach((data, i) => {
            let x = data.split(',')[index]
            if (!ds[i]) ds[i] = { x: 0, y: 0 }
            if (index === 0) ds[i].x = x
            else ds[i].x = Number(x)
            // validate date
        })
        setData(ds)
    }

    function formatYData(value) {
        let index = axis.indexOf(value)
        let ds = [...data]
        rows.forEach((data, i) => {
            let y = data.split(',')[index]
            if (!ds[i]) ds[i] = { x: 0, y: 0 }
            if (index === 0) ds[i].y = y
            else ds[i].y = Number(y)
            // validate date
        })
        setData(ds)
    }

    return (
        <div style={styles.container}>
            <h2>Chart display</h2>
            <div style={styles.form}>

                <textarea onChange={onChange} cols="40" rows="3" value={text}></textarea>
                <div style={styles.selects}>
                    <label>
                        Y axis
                        <select onChange={onSelectYAxis} style={styles.select}>
                            <option disabled selected >Selecciona el axis Y</option>
                            {axis.map(a => (<option key={a} value={a} >{a}</option>))}
                        </select>
                    </label>
                    <label>
                        X axis
                        <select onChange={onSelectXAxis} style={styles.select}>
                            <option disabled selected >Selecciona el axis X</option>
                            {axis.map(a => (<option key={a} value={a} >{a}</option>))}
                        </select>
                    </label>


                </div>
            </div>
            <p>This app doesn't have buttons because is 100% reactive</p>

            <div style={styles.chart}>
                <h2>{yLabel}</h2>
                <VictoryChart
                    style={{ height: "inherit" }}
                    yLabel={"mijo"}
                    width={600}
                    labels={"mijo"}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }} theme={VictoryTheme.material} >

                    <VictoryLine
                        interpolation="natural"
                        data={data} />

                </VictoryChart>
                <h2 style={{ position: "relative", top: -100 }}>{xLabel}</h2>
            </div>

        </div >
    )
}

let styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "85vh"
    },
    form: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    chart: {
        marginTop: 10
    },
    select: {
        width: "150px"
    },
    selects: {
        display: "flex",
        flexDirection: "column"
    }
}

Chart.propTypes = {

}