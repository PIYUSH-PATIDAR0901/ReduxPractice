import React, { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "../Actions/index";
import { useSelector, useDispatch } from "react-redux";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list1 = useSelector((state) => state.Condition.list);
  return (
    <>
      <div className="App my-5">
        <div className="child">
          <figure>
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="input-group w-25 m-auto ">
            <input
              type="text"
              className="form-control m-2"
              aria-label="Dollar amount (with dot and two decimal places)"
              placeholder="✍️ Add Items.."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn my-4"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>
          <div className="container">
            {list1.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <ul>
                    <li
                      style={{
                        listStyle: "none",
                        textAlign: "center",
                        margin: "auto",
                        paddingTop: "0px",
                      }}
                    >
                      {elem.data}
                      <i
                        className="	fa fa-times  mx-3"
                        style={{ color: "black" }}
                        onClick={() => dispatch(deleteTodo(elem.id))}
                      ></i>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button className="btn bg-primary" data-sm-link-text="remove All" onClick={()=>dispatch(removeTodo())}><span>Check List</span></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
