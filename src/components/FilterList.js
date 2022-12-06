/** @format */

// /** @format */
//259

// import React, { useState, useTransition } from 'react'
// export default function FilterList({ names }) {
//   const [query, setQuery] = useState('')
//   const [isPending, startTransition] = useTransition()
//   const [heighlight, setHeighlight] = useState('')

//   const changeHandler = ({ target: { value } }) => {
//     setQuery(value)
//     startTransition(() => {
//       setHeighlight(value)
//     })
//   }
//   return (
//     <div>
//       <input onChange={changeHandler} value={query} type='text' />
//       <div style={{ opacity: isPending ? 0.2 : 1 }}>
//         {names.map((name, i) => (
//           // <ListItem key={i} name={name} heighlight={heighlight} />
//           <ListItem key={i} name={name} heighlight={heighlight} />
//         ))}
//       </div>
//     </div>
//   )
// }

// function ListItem({ name, heighlight }) {
//   const index = name.toLowerCase().indexOf(heighlight.toLowerCase())
//   if (index === -1) {
//     return <div>{name}</div>
//   }
//   return (
//     <div>
//       {name.slice(0, index)}
//       <span
//         style={{
//           backgroundColor: 'blue',
//           width: '100px',
//           height: '100px'
//         }}
//       >
//         {name.slice(index, index + heighlight.length)}
//       </span>
//       {name.slice(index + heighlight.length)}
//     </div>
//   )
// }

//259

/** @format */

import React, { useState, useDeferredValue } from 'react'
export default function FilterList({ names }) {
  const [query, setQuery] = useState('')

  const changeHandler = ({ target: { value } }) => {
    setQuery(value)
  }
  const defNames = useDeferredValue(names)
  return (
    <div>
      <input onChange={changeHandler} value={query} type='text' />
      <div>
        {defNames.map((name, i) => (
          <ListItem key={i} name={name} heighlight={query} />
        ))}
      </div>
    </div>
  )
}

function ListItem({ name, heighlight }) {
  const index = name.toLowerCase().indexOf(heighlight.toLowerCase())
  if (index === -1) {
    return <div>{name}</div>
  }
  return (
    <div>
      {name.slice(0, index)}
      <span
        style={{
          backgroundColor: 'blue',
          width: '100px',
          height: '100px'
        }}
      >
        {name.slice(index, index + heighlight.length)}
      </span>
      {name.slice(index + heighlight.length)}
    </div>
  )
}
