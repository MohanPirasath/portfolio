


import React,{useEffect,useState} from 'react'
import { Document, Page ,pdfjs } from 'react-pdf';
import DownloadIcon from '@mui/icons-material/Download';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Resume1 from "../../Assests/MyResume.pdf";
import Fab from '@mui/material/Fab';
import "./resume1.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`


function Resume() {

const [width,setwidth]=useState(120)
useEffect(()=>{
    setwidth(window.innerWidth)
},[])

  return (
    <div className='Resume_pic'>
      <div >

      <Document file={Resume1}>
        <Page pageNumber={1} 
        // scale={width > 786 ? 1.7 : 0.6}
        />
      </Document>
      </div>
      <div className='download_resume'>
      <Fab variant="extended" size="medium" color="primary" aria-label="add" href={Resume1} target="_blank">
        <DownloadIcon sx={{ mr: 1 }} />
       Download
      </Fab>
      </div>
    </div>
  )
}

export default Resume



