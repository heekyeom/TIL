import React from 'react'

export default function ImageList(props) {
    const images=props.images.map(e=>{
        return (
        <div key={e.id}>
            <img src={e.urls.regular} alt={e.description}></img>
        </div>
        // <img key={e.id} src={e.urls.regular} alt={e.description}></img>
        )
    });
  return (
    <div>
      {images}
    </div>
  )
}
