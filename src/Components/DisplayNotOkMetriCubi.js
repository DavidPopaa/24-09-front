import React from 'react'

export default function DisplayNotOkMetriCubi( {list} ) {
  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          <h1>{item.nr_inmatriculare}</h1>
          <h1>{item.volum_detectat}</h1>
          <h1>{item.volum_avizat}</h1>
          <h1>{item.date}</h1>
        </div>
      ))}
    </div>
  )
}
