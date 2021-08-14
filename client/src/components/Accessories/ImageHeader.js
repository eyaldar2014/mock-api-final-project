// import react from 'react'

const ImageHeader = ({ name, img }) => {

  return <>
    <h1 className='bgLine'><span>{name}</span></h1>
    <div className={img}></div>
  </>
}

export default ImageHeader;
