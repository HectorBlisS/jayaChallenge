import React from 'react'
import PropTypes from 'prop-types'


export default function Table({ columns, rows, renderFunc }) {
    return (
        <div>
            <table style={{ margin: "0 auto" }} width="80%" border="1">
                <thead>
                    <tr>
                        <th>
                            {columns[0]}
                        </th>
                        <th>
                            {columns[1]}
                        </th>
                        <th>
                            {columns[2]}
                        </th>
                    </tr>

                </thead>
                <tbody>
                    {rows.map(renderFunc)}
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    renderFunc: PropTypes.func.isRequired
}