export const Row = (props) => {
    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.editorial}
            </td>
            <td>
                {props.author}
            </td>
            <td>
                {props.numPlayers}
            </td>
            <td>
                {props.avgDuration}
            </td>
            <td>
                {props.minAge}
            </td>
            <td>
                {props.expansions}
            </td>
        </tr>
    );
  };