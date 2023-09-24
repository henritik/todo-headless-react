import React from "react";
import axios from "axios";
import { Tabs, Tab } from "react-bootstrap";
import { TodoListAll, TodoListFiltered } from "./TodoList";
import { TodoForm} from "./TodoForm";
import Loading from 'react-simple-loading';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    };
    
    this.token = localStorage.getItem("login");
    this.apiUrl = process.env.REACT_APP_BASE_URL + "wp-json/wp/v2/to-do";
    this.todoId = parseInt(process.env.REACT_APP_TODO_TAXONOMY_ID);
    this.doneId = parseInt(process.env.REACT_APP_DONE_TAXONOMY_ID);
    this.headers = {
      "Authorization" : "Bearer" + this.token,
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    };
  }
  componentDidMount() {
    axios
      .get(this.apiUrl + "/?per_page=100")
      .then((res) => {
        this.setState({ data: res.data, isLoading: false });
      })
    .catch((error) => {   
      console.log(error);     
    });
  }

  addTodo(val) {
    this.setState({ isLoading: true });
    const todo = { title: val, status: "publish", states: [3] };
    const headers = this.headers;

    axios
      .post(this.apiUrl, todo, { headers })
      .then((res) => {
        this.state.data.unshift(res.data);
        this.setState({ data: this.state.data, isLoading: false }); 
      })
    .catch((error) => {   
      console.log(error);     
    });
  }

  handleRemove(id) {
    this.setState({ isLoading: true });
    const remainder = this.state.data.filter((todo) => {
      if (todo.id !== id) return todo;
      return null;
    });
    const headers = this.headers;
 
    axios
      .delete(this.apiUrl + "/" + id, { headers })
      .then((res) => {
        this.setState({ data: remainder, isLoading: false });
      })
    .catch((error) => {   
      console.log(error);     
    });
  }

  handleUpdate(id) {
    this.setState({ isLoading: true });
    const todo = { states: [2] };
    const headers = this.headers;

    axios
      .put(this.apiUrl + "/" + id, todo, { headers })
      .then((res) => {
        const objIndex = this.state.data.findIndex((obj) => obj.id === id);
        const cloneData = [...this.state.data];
        cloneData[objIndex] = res.data;
        this.setState({ data: cloneData, isLoading: false });
      })
    .catch((error) => {   
      console.log(error);     
    });
  }

  getAmount(filter) {
    return this.state.data.filter((todo) => todo.states[0] === filter).length;
  }

  render() {
    return (
      <div className="mb-5">
        <div className={(this.state.isLoading ? "loading" : "hide")}>
          <Loading />  
        </div>  
        <div className="app-header">
          <h3>Things to do</h3>
        </div>   
        <TodoForm addTodo={this.addTodo.bind(this)} />    
        <Tabs defaultActiveKey="todo" id="todo-tabs" className="mb-3">
          <Tab eventKey="todo" title={ 'To do (' + this.getAmount(this.todoId) + ')' }>
            <TodoListFiltered
              todos={this.state.data}
              update={this.handleUpdate.bind(this)}
              remove={this.handleRemove.bind(this)}
              dis={false}
              filter={this.todoId}
            />
          </Tab>
          <Tab eventKey="done" title={ 'Done (' + this.getAmount(this.doneId) + ')' }>
            <TodoListFiltered
              todos={this.state.data}
              update={this.handleUpdate.bind(this)}
              remove={this.handleRemove.bind(this)}
              dis={true}
              filter={this.doneId}
            />
          </Tab>
          <Tab eventKey="all" title={ 'All (' + this.state.data.length + ')' }>
            <TodoListAll
              todos={this.state.data}
              update={this.handleUpdate.bind(this)}
              remove={this.handleRemove.bind(this)}
              dis={true}
            />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default TodoApp;
