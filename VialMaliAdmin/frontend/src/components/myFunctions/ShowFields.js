function ShowFields(props){
    return(

            <tr>
                <td>
                    {props.fieldA}
                </td>
                <td>
                    {props.fieldB}
                </td>
                <td>
                    {props.fieldC}
                </td>
                <td>
                    {props.fieldD}
                </td>
                <td>
                    {props.field0}
                </td>
            </tr>
    )
}

export default ShowFields;