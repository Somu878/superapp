import React,{useState} from 'react'
function Notes() {
  const [savetext, setsaveText] = useState(
    JSON.parse(window.localStorage.getItem("text"))
  );
  const SaveNotes=(e)=>{
    setsaveText(e.target.value)
    window.localStorage.setItem("text", JSON.stringify(savetext));
  }
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
        <div style={{padding:'30px',fontSize:'25px',fontWeight:'600',}}  >All notes</div>
        <textarea onChange={(e)=>SaveNotes(e)} style={{width:'21vw',height:'45vh',marginLeft:'30px',marginRight:'20px',outline:'0',background:'transparent',border:'none',color:'black',fontSize:'16px',fontFamily:'var(--dmsans)',resize:'none'}} spellCheck={false} value={savetext} placeholder='Write your note here..'></textarea>
    </div>
  )
}

export default Notes