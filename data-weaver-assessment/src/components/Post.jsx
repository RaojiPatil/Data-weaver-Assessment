import { React, useState } from "react";

const Posts = ({ users } ) => {


 
  return (
    <div>
        <div className="flex my-3">
            <h1 className="text-3xl bold font-black ml-48">Product-List</h1>
            <input className="items-end border border-slate-300 w-96 pl-1.5 mr-2 ml-96" type="text" placeholder="Seach Product..." />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
        </div>
      <table className="border-collapse border border-slate-400 min-w-full">
            <thead>
                <tr>
                    <th className="py-2 border border-slate-300">Title</th>
                    <th className="py-2 border border-slate-300">Category</th>
                    <th className="py-2 px-9 border border-slate-300">Brand</th>
                    <th className="py-2 px-9 border border-slate-300">Price</th>
                    <th className="py-2 px-9 border border-slate-300">Rating</th>
                    <th className="py-2 px-9 border border-slate-300">Image</th>
                    <th className="py-2 px-9 border border-slate-300">Edit</th>
                </tr>
            </thead>
 
            <tbody>
            {users && users.length > 0 && users.map((userObj, index) => (
                    <tr>
                        <td className="text-center py-6 px-3.5 border border-slate-300">{userObj.title}</td>
                        <td className="text-center py-6 px-3.5 border border-slate-300">{userObj.category}</td>
                        <td className="text-center py-6 px-3.5 border border-slate-300">{userObj.brand}</td>
                        <td className="text-center py-6 px-9 border border-slate-300">{userObj.price}</td>
                        <td className="text-center py-6 px-9 border border-slate-300">{userObj.rating}</td>
                        <td className="text-center py-3 px-3 border border-slate-300">{<img src={`${userObj.thumbnail}`} width="200" height="100" />}</td>
                        <th className="text-center py-6 px-9 border border-slate-300"> <button>Edit</button> </th>
                    </tr>
               ))}
            </tbody>
      </table>
    </div>
  );
};

export default Posts;