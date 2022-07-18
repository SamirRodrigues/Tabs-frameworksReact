import React, { useState } from 'react'
import { Tab } from './Tab'

export const TabContainer = ({ tabs }) => {
    const [currentTab, setCurrentTab] = useState(0)
    return (
        <div>
            <h2>Conteudo</h2>
            {tabs.map((tab, index) =>
                <Tab key={index} tabName={tab.name} setThisTab={setCurrentTab} index={index} currentTab={currentTab} />)
            }

            {console.log(tabs.length)}
            {tabs.length === 0 ?
                <div>
                    <button>Tab</button>
                    <p>Sem Conteudo</p>
                </div>
                :
                <div>
                    <p>{tabs[currentTab].text}</p>
                </div>
            }
        </div>
    )
}
