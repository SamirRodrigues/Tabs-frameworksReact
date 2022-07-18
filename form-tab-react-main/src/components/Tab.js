
export function Tab({tabName,setThisTab,index,currentTab}){
    return(
        <button className={currentTab===index ? 'bg-salmon' : ''} id={'TabButton'+index} onClick={ () => setThisTab(index) } >{tabName}</button>
    )
}