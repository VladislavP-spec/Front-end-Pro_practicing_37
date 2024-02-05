import {Button} from "./Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import slice from "../../engine/todo/slice.js";
import selectors from "../../engine/todo/selectors.js";
export function Form() {
    const dispatch = useDispatch();
    const loading = useSelector(selectors.loading);
    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(slice.actions.setLoading(true))
        setTimeout(() => {
            dispatch(slice.actions.addItem(event.target.text_input.value))
            dispatch(slice.actions.setLoading(false))
        }, 3000)
    }
    return (
        <form  className="form" onSubmit={onSubmit}>
            <input className="form-control form-control-lg" name = "text_input" type="text"/>
            <Button className="btn-primary" disabled={loading}>Send</Button>
        </form>
    )
}