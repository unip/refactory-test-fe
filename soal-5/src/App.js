import { useState } from 'react';
import Calendar from 'react-calendar';

import avatar from './assets/images/avatar.png';
import cog from './assets/images/menu-cog.svg';
import iconTodo from './assets/images/icon-todo-list.svg';
import iconEdit from './assets/images/icon-edit.svg';
import iconDelete from './assets/images/icon-trash.svg';

function App() {
  const [date, setDate] = useState(new Date());
  const [modal, setModal] = useState(false);

  return (
    <div className="App flex flex-col">
      <nav className="flex flex-none items-center px-6 py-3 bg-blue-700 text-white sticky top-0">
        <h1 className="font-bold text-2xl">Logo</h1>

        <div className="flex items-center space-x-6 user-menu ml-auto">
          <img src={avatar} alt="" className="avatar rounded-full bg-white w-10 h-10"/>
          <p className="text-xl font-bold">Samsul Arifin</p>
          <button type="button">
            <img src={cog} alt=""/>
          </button>
        </div>
      </nav>

      <div className="main flex-grow flex flex-col md:flex-row divide-y-2 md:divide-x-2 divide-gray-200">
        <div className="calendar flex flex-col w-full md:w-1/3 p-6 space-y-6">
          <div className="salutation flex flex-col lg:flex-row space-y-3 space-x-6 bg-blue-700 text-white p-6 rounded-3xl">
            <img src={iconTodo} alt=""/>
            <div className="text">
              <h3 className="font-bold text-xl text-yellow-400 mb-3">Hello, Sam!</h3>
              <p>You have 2 tasks left for today, Already completed Task today?</p>
            </div>
          </div>

          <div className="calendar-wrapper">
            <Calendar
              onChange={setDate}
              value={date}
              calendarType="Hebrew"
              next2Label={null}
              prev2Label={null}
              showNeighboringMonth={false}
            />
          </div>
        </div>

        <div className="todos p-6 w-full md:w-2/3 space-y-8">
          <h2 className="text-3xl font-bold">Task For Today</h2>
          <div className="options space-x-3 flex w-full">
            <button type="button" onClick={() => setModal(true)} className="btn-new-task flex-none">
              Create New
            </button>
            
            <form action="" className="w-full">
              <input type="text" className="search w-full" placeholder="Cari" />
            </form>
          </div>

          <ul className="todos flex flex-col space-y-6">
            {[1, 2, 3, 4, 5].map(x => (
              <li className="todo">
                <h3 className="text-2xl font-bold mb-5">
                  Todo title
                  <button type="button" className="btn-complete bg-pink-100 text-pink-600 text-sm px-3 py-2 rounded-lg ml-3">Complete</button>
                </h3>

                <div className="text flex items-end space-x-3">
                  <p className="flex-grow">
                    1. Dont forget prepare your report and any blocker in Front end. <br/>
                    2. Telling Project Manager for new assignment. 
                  </p>

                  <div className="actions flex-none space-x-3">
                    <button type="button" className="btn-edit hover:text-blue-700">
                      <img src={iconEdit} alt=""/>
                    </button>
                    <button type="button" className="btn-delete hover:text-pink-600">
                      <img src={iconDelete} alt=""/>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {modal && (
        <div className="modal fixed w-screen h-screen z-10 flex justify-center items-center">
          <div onClick={() => setModal(false)} className="overlay bg-black opacity-30 absolute w-screen h-screen"></div>

          <div className="modal-dialog bg-white rounded-2xl p-9 z-20 w-full max-w-screen-sm">
            <h2 className="font-bold text-lg mb-6">New Task</h2>

            <form action="" className="w-full space-y-4">
              <div className="input-group flex flex-col space-y-4">
                <label htmlFor="title" className="text-lg font-bold">Title</label>
                <input id="title" name="title" type="text" className="rounded-lg bg-white border border-gray-300 px-4 py-2" placeholder="Fill title" />
              </div>
              <div className="input-group flex flex-col space-y-4">
                <label htmlFor="description" className="text-lg font-bold">Description</label>
                <textarea id="description" name="description" rows="6" className="rounded-lg bg-white border border-gray-300 px-4 py-2" placeholder="Fill description" />
              </div>
              <div className="input-group flex flex-col space-y-4">
                <label htmlFor="date" className="text-lg font-bold">Choose Date</label>
                <div className="bg-white rounded-lg p-4 border border-gray-300 max-w-sm">
                  <Calendar
                    onChange={setDate}
                    value={date}
                    calendarType="Hebrew"
                    next2Label={null}
                    prev2Label={null}
                    showNeighboringMonth={false}
                  />
                </div>
              </div>

              <div className="buttons flex justify-center space-x-4">
                <button type="button" onClick={() => setModal(false)} className="bg-transparent p-3 text-blue-700">Cancel</button>
                <button type="submit" className="bg-blue-700 hover:bg-blue-600 p-3 text-white rounded-lg">Create Task</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
