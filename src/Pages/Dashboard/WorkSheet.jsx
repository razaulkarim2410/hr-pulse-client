// // src/Pages/Dashboard/WorkSheet.jsx
// import React, { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { auth } from '../../firebase/firebase.config';
// import { collection, addDoc, query, where, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
// import { db } from '../../firebase/firestore.config';
// import Swal from 'sweetalert2';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const WorkSheet = () => {
//   const [task, setTask] = useState('Sales');
//   const [hours, setHours] = useState('');
//   const [date, setDate] = useState(new Date());
//   const [editItem, setEditItem] = useState(null);

//   const user = auth.currentUser;
//   const userEmail = user?.email;

//   const { data: workData = [], refetch } = useQuery({
//     queryKey: ['works', userEmail],
//     queryFn: async () => {
//       const q = query(collection(db, 'worksheets'), where('email', '==', userEmail));
//       const querySnapshot = await getDocs(q);
//       return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     },
//     enabled: !!userEmail,
//   });

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const newWork = {
//       task,
//       hours: Number(hours),
//       date: date.toDateString(),
//       email: userEmail,
//     };
//     try {
//       await addDoc(collection(db, 'worksheets'), newWork);
//       Swal.fire('Success!', 'Task added successfully', 'success');
//       setHours('');
//       refetch();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDelete = async id => {
//     await deleteDoc(doc(db, 'worksheets', id));
//     Swal.fire('Deleted!', 'Task removed successfully.', 'success');
//     refetch();
//   };

//   const handleUpdate = async e => {
//     e.preventDefault();
//     await updateDoc(doc(db, 'worksheets', editItem.id), {
//       task: editItem.task,
//       hours: Number(editItem.hours),
//       date: editItem.date,
//     });
//     setEditItem(null);
//     Swal.fire('Updated!', 'Task updated.', 'success');
//     refetch();
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Work Sheet</h2>
//       <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap">
//         <select value={task} onChange={e => setTask(e.target.value)} className="select">
//           <option>Sales</option>
//           <option>Support</option>
//           <option>Content</option>
//           <option>Paper-work</option>
//         </select>
//         <input
//           type="number"
//           placeholder="Hours Worked"
//           value={hours}
//           onChange={e => setHours(e.target.value)}
//           className="input"
//           required
//         />
//         <DatePicker selected={date} onChange={setDate} className="input" />
//         <button type="submit" className="btn btn-success">Submit</button>
//       </form>

//       <table className="table mt-6">
//         <thead>
//           <tr>
//             <th>Task</th>
//             <th>Hours</th>
//             <th>Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {workData.map(item => (
//             <tr key={item.id}>
//               <td>{item.task}</td>
//               <td>{item.hours}</td>
//               <td>{item.date}</td>
//               <td>
//                 <button className="btn btn-xs btn-warning mr-2" onClick={() => setEditItem(item)}>✏️</button>
//                 <button className="btn btn-xs btn-error" onClick={() => handleDelete(item.id)}>❌</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Edit Modal */}
//       {editItem && (
//         <div className="modal modal-open">
//           <div className="modal-box">
//             <h3 className="font-bold text-lg">Edit Task</h3>
//             <form onSubmit={handleUpdate} className="space-y-2">
//               <select
//                 value={editItem.task}
//                 onChange={e => setEditItem({ ...editItem, task: e.target.value })}
//                 className="select"
//               >
//                 <option>Sales</option>
//                 <option>Support</option>
//                 <option>Content</option>
//                 <option>Paper-work</option>
//               </select>
//               <input
//                 type="number"
//                 value={editItem.hours}
//                 onChange={e => setEditItem({ ...editItem, hours: e.target.value })}
//                 className="input"
//               />
//               <DatePicker
//                 selected={new Date(editItem.date)}
//                 onChange={date => setEditItem({ ...editItem, date: date.toDateString() })}
//                 className="input"
//               />
//               <div className="modal-action">
//                 <button type="submit" className="btn btn-success">Update</button>
//                 <button onClick={() => setEditItem(null)} className="btn">Cancel</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WorkSheet;
