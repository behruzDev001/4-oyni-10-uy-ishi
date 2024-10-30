// let datas = [
//     { id: 1, name: "John", age: 25, gender: "male" },
//     { id: 2, name: "Alice", age: 30, gender: "female" },
//     { id: 3, name: "Bob", age: 28, gender: "male" },
//     { id: 4, name: "Charlie", age: 32, gender: "female" },
//     { id: 5, name: "David", age: 27, gender: "male" },
//     { id: 6, name: "Emily", age: 35, gender: "female" },
//     { id: 7, name: "Frank", age: 29, gender: "male" },
//     { id: 8, name: "Grace", age: 33, gender: "female" },
//     { id: 9, name: "Harry", age: 31, gender: "male" },
//     { id: 10, name: "Isabella", age: 34, gender: "female" },
// ];

// CREATE – yangi ma'lumot qo'shish
// function createData(newData) {
//     datas.push(newData);
//     console.log("New data added:", newData);
// }


// function readData() {
//     console.log("All data:", datas);
//     return datas;
// }


// function updateData(id, updatedData) {
//     let index = datas.findIndex(data => data.id === id);
//     if (index !== -1) {
//         datas[index] = { ...datas[index], ...updatedData };
//         console.log("Data updated:", datas[index]);
//     } else {
//         console.log("Data not found with id:", id);
//     }
// }


// function deleteData(id) {
//     let index = datas.findIndex(data => data.id === id);
//     if (index !== -1) {
//         let deletedData = datas.splice(index, 1);
//         console.log("Data deleted:", deletedData[0]);
//     } else {
//         console.log("Data not found with id:", id);
//     }
// }



// CREATE
// createData({ id: 11, name: "Jack", age: 26, gender: "male" });


// readData();

// updateData(3, { name: "Robert", age: 29 });

// DELETE
// deleteData(3);

// READ
// readData();
