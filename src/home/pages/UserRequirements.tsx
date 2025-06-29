import axios from "axios";
import { useState } from "react"


export default function UserRequirements() {

    const [formValues, setFormValues] = useState({
        name: {value: '', isValid: false},
        tabsName: {value: '', isValid: false},
        selectedColor: {value: '', isValid: false},
        unselectedColor: {value: '', isValid: false}
    });

    const formValuesChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: {
                value: value,
                isValid: value.trim() !== ''
            }
        }))
    }

    const onSubmitHandler = async () => {
        if(!formValues.name.isValid || !formValues.tabsName.isValid || !formValues.selectedColor.isValid || !formValues.unselectedColor.isValid) {
            return;
        }
        const component = {
            name: formValues.name.value,
            tabsName: formValues.tabsName.value,
            selectedColor: formValues.selectedColor.value,
            unselectedColor: formValues.unselectedColor.value
        }
        await axios.post(
            'http://localhost:8081/api/user-requirements', 
            {component: component}
        ).then((response) => {
            console.log('Response: ' + JSON.stringify(response.data));
        }).catch((error) => {
            console.log('Error: ' + error);
        });
    }

  return (
    <form onSubmit={onSubmitHandler}>
        <div className="mt-4 mx-2">
            <input className="w-sm border-2 rounded-sm p-2 mx-1" type="text" name="name" placeholder="Enter name of this Component" value={formValues.name.value} onChange={formValuesChangeHandler}/>

            <input className="w-lg border-2 rounded-sm p-2 mx-1" type="text" name="tabsName" placeholder="Mention names with seperated commas..." value={formValues.tabsName.value} onChange={formValuesChangeHandler}/>

            <input className="w-xs border-2 rounded-sm p-2 mx-1" type="text" name="selectedColor" placeholder="Enter color when tab is selected" value={formValues.selectedColor.value} onChange={formValuesChangeHandler}/>

            <input className="w-xs border-2 rounded-sm p-2 mx-1 my-2" type="text" name="unselectedColor" placeholder="Enter color when tab is unselected" value={formValues.unselectedColor.value} onChange={formValuesChangeHandler}/>

            <button className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300 w-full sm:w-auto">
                Create
            </button>
        </div>
    </form>
  )
}
