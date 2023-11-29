import React from 'react'

function Notes() {
  return (
    <div style={{
        width:'25vw',
        height:'58vh',
        background:'#F1C75B',
        color:'black',
        position:'relative',
        marginLeft:'-385px',
        borderRadius:'20px'
    }}>
        <div style={{padding:'18px',fontSize:'25px',fontWeight:'600'}}  >All notes</div>
        <textarea style={{width:'23.5vw',height:'48vh',marginLeft:'8px',outline:'0',background:'transparent',border:'none',color:'black',fontSize:'15px',fontFamily:'var(--dmsans)',resize:'none'}} spellCheck={false}></textarea>
    </div>
  )
}

export default Notes