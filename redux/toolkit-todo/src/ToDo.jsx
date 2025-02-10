import {useRef, useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { add, remove, edit } from './tools/slices/todoSlice';
import { CiSquarePlus } from "react-icons/ci";
import { toast, ToastContainer } from "react-toastify";
import { BiTrash, BiPencil } from "react-icons/bi";
import { MdDone } from "react-icons/md";

const ToDo = () => {
  let data = useSelector((p) => p.todo);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const [editMode, setEditMode] = useState(false)

  const formSubmit = (e)=>{
    e.preventDefault();
    if (!inputRef.current.value) {
      toast.error("Please fill in the input.", {theme: "colored"});
    } else {
      dispatch(add(inputRef.current.value));
     inputRef.current.value = "";
      console.log(data)
    }
  }

  const handleRemove = (e, id) => {
    e.preventDefault();
    dispatch(remove(id));
  }

  const handleEdit = (e, id) => {
    e.preventDefault()
    if(editMode === id){
      dispatch(edit({id:id, title:e.target.parentElement.previousElementSibling.value}))
      setEditMode(null)
    }else{
      setEditMode(id)
    }
  }

  return (
    <div className="bg-blue-950 h-dvh w-dvw flex items-center justify-center">
      <div className="bg-white h-96 w-96 p-4 rounded-lg shadow-lg relative">

        <form onSubmit={formSubmit} className="bg-blue-950 text-white pr-4 w-full rounded-lg left-0 flex items-center justify-between shadow-lg">
          <input ref={inputRef} type="text" className="w-full h-10 pl-4 outline-none font-bold" />
          <button className="text-3xl transition opacity-50 hover:opacity-100 focus:opacity-100 cursor-pointer"><CiSquarePlus /></button>
        </form>

        <ul className="mt-5 overflow-y-scroll h-72 flex flex-col gap-2">
          {data.map((item) => (
            <li key={item.id} className="rounded-lg border-2 border-blue-950 p-2 flex justify-between items-center">
              {editMode === item.id ? (
                <input type="text" defaultValue={item.title} autoFocus className="h-full w-full outline-none" />
              ) : (
                <span>{item.title}</span>
              )}
              <div className="flex items-center justify-center gap-1">
                <button onClick={(e) => {handleEdit(e, item.id)}} className="bg-cyan-800 hover:bg-cyan-900 transition cursor-pointer text-white p-2 rounded-lg text-xl">
                  {editMode === item.id ? <MdDone /> : <BiPencil />}
                </button>
                <button onClick={(e) => {handleRemove(e, item.id)}} className="bg-rose-700 hover:bg-rose-900 transition cursor-pointer text-white p-2 rounded-lg text-xl">
                  <BiTrash />
                </button>
              </div>
            </li>
          )).reverse()}
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ToDo;
