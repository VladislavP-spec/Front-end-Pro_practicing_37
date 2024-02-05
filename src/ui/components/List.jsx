import {useSelector} from 'react-redux';
import {ListItem} from "./ListItem.jsx";
import selectors from "../../engine/todo/selectors.js";

// import {ListItem} from "./ListItem.jsx";
export function List() {
        const items = useSelector(selectors.items);
        return (
            <>
                <br/>
                <h1>Todos</h1>

                {
                    items.length === 0
                    ? <span>No data</span>
                    : (
                        <ul className="list">
                                {items.map(item => <ListItem key={item.id}>{item.text}</ListItem>)}
                                {/*<ListItem>Hi</ListItem>*/}
                                {/*<ListItem>Привіт</ListItem>*/}
                        </ul>

                    )
                }
            </>
        )
}