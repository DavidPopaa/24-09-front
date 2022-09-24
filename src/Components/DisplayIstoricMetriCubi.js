import React from 'react'

export default function DisplayIstoricMetriCubi({ list }) {
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
// nr_inmatriculare = models.CharField(max_length=100)
//     volum_detectat = models.CharField(max_length=100)
//     volum_avizat = models.CharField(max_length=100)
//     date = models.DateTimeField(auto_now_add=True)