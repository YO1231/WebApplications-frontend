import React, {useState} from "react";
import { Button, Grid, TextField } from "@mui/material"

const AddTodo = (props) => {
    // 사용자의 입력을 저장할 오브젝트
    const [item, setItem] = useState({ title: ""});
    const addItem = props.addItem;

    // onButtonClick 함수
    const onButtonClick = () => {
        addItem(item); // addItem 함수 사용
        setItem({title: ""})
    }

    // onInputChange 함수
    const onInputChange = (e) => {
        setItem({title: e.target.value})
        console.log(item);
    };

    // enterKeyEventHandller 함수
    const enterKeyEventHandller = (e) => {
        if (e.key == 'Enter') {
            onButtonClick();
        }
    };

    return (
        <Grid container style={{ marginTop: 20 }}>
            <Grid xs={11} md={11} lg={6} item style={{ paddingRight: 16 }}>
                <TextField placeholder="Add Todo here" fullWidth 
                onChange={onInputChange} 
                onKeyPress={enterKeyEventHandller}
                value={item.title}
                />
            </Grid>
        <Grid xs={1} md={1} lg={6} item >
            <Button fullWidth style={{ height: '100%' }} color="secondary" variant="contained"
            onClick={onButtonClick}>
                +
            </Button>
            </Grid>
        </Grid>
    );
}

export default AddTodo;