import React from 'react';


type NewComponentType = {
    students: Array<StudentsType>
}

type StudentsType = {
    id: number,
    name: string,
    age: number
}

const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]


const NewComponent = (props: NewComponentType) => {
    debugger
    return (
        <>
            <ul>
                <li>{props.students.map((el, index) =>
                    <p>{el.name}</p>
                )}</li>
            </ul>

            <table>
                <tr>
                    <th>Cars</th>
                    <th>Models</th>
                </tr>

                {topCars.map((el, index)=>
                    <tr>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>
                )}
            </table>
        </>

    );
};


export default NewComponent;