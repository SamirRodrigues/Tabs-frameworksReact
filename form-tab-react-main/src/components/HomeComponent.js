import React from "react";
import { TabContainer } from "./TabContainer";
import { TabForm } from './TabForm';

export const HomeComponent = () => {
    const [inputTabsToAdd, setInputTabsToAdd] = React.useState(1);
    const [tabs, setTabs] = React.useState([]);

    const cambiarDatos = (e) => {
        setInputTabsToAdd(parseInt(e.currentTarget.value, 10));
    };

    const conseguirDatosFormulario = e => {
        e.preventDefault();
        let newTabs = [];
        console.log(e.target)
        for (let i = 1; i < e.target.length - 1; i = i + 2) {
            let newTab = {
                'name': e.target[i].value,
                'text': e.target[i + 1].value
            }
            newTabs.push(newTab);
            console.log(e.target[i + 1].value);
        }
        setTabs(newTabs);
    }

    return (
        <div>
            <h1>Tabs Form</h1>
            <form onSubmit={conseguirDatosFormulario}>
                <label htmlFor="numTabs">Num.Tabs</label>
                <input
                    name="numTabs"
                    type="number"
                    value={inputTabsToAdd}
                    onChange={cambiarDatos}
                />
                <hr />
                {inputTabsToAdd && inputTabsToAdd > 0 ?
                    <div>
                        {
                        [...Array(inputTabsToAdd)].map((tab, index) => (
                            <TabForm id={index + 1} key={index} />
                        ))
                        }
                        <input type="submit" name='Send' value="Salva" />
                    </div>
                    :
                    <p>Deve haver pelo menos uma Tab</p>
                }
                <br />
                
            </form>

            <hr />
            <TabContainer tabs={tabs} />
        </div>
    );
};
