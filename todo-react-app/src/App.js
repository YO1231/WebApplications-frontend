import './App.css';
import Todo from './Todo';
import React, { useState, useEffect } from 'react';
import { Container, List, Paper } from '@mui/material';
import AddTodo from './AddTodo';
import { API_BASE_URL } from './api-config';

function App() { //할 일 관리
  const [items, setItems] = useState([]);

  useEffect( () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
  
    fetch(API_BASE_URL + "/todo", requestOptions)
      .then((response) => response.json()) //성공 시
      .then(
        (response) => {
          setItems(response.data);
        },
      )
      .catch( (e) => { }) //더 많이 쓰이는 방법
  },[]);

  const addItem = (item) => {
    item.id = "ID-" + items.length; // key를 위한 id
    item.done = false; // done 초기화
    // 업데이트는 반드시 setItems로 하고 새 배열을 만들어야 한다
    setItems([...items, item]);
    console.log("items : ", items);
  }

  const deleteItem = (item) => {
    //  삭제할 아이템을 찾는다.
    const newItems = items.filter(e => e.id !== item.id);
    // 삭제할 아이템을 제외한 아이템을 다시 배열에 저장한다.
    setItems([...newItems]);
  }
  
  const editItem = () => {
    setItems([...items]); // items 상태를 변경함 => App 컴포넌트가 리렌더링 됨
  }

  let todoItems = 
    items.length > 0 && (
      <Paper style={{ margin: 16}}>
        <List>
          {items.map((item) => (
            <Todo item={item} key={item.id} editItem={editItem} deleteItem={deleteItem} />
        ))}
        </List>
      </Paper>
    );

    return <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className='TodoList'>{todoItems}</div>
      </Container>
    </div>;
}

export default App;