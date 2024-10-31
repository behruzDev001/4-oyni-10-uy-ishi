let datas = [
    { id: 1, name: "John", age: 25, gender: "male" },
    { id: 2, name: "Alice", age: 30, gender: "female" },
    { id: 3, name: "Bob", age: 28, gender: "male" },
    { id: 4, name: "Charlie", age: 32, gender: "female" },
    { id: 5, name: "David", age: 27, gender: "male" },
    { id: 6, name: "Emily", age: 35, gender: "female" },
    { id: 7, name: "Frank", age: 29, gender: "male" },
    { id: 8, name: "Grace", age: 33, gender: "female" },
    { id: 9, name: "Harry", age: 31, gender: "male" },
    { id: 10, name: "Isabella", age: 34, gender: "female" },
];

function createData(newData) {
    const exists = datas.filter(data => data.id === newData.id).length > 0;
    if (!exists) {
        datas.push(newData);
        console.log("New data added:", newData);
    } else {
        console.log("Data with this ID already exists.");
    }
}

function readData(name) {
    const filteredData = datas.filter(data => 
        data.id >= 1 && data.id <= 10 && data.name.toLowerCase() === name.toLowerCase()
    );
    if (filteredData.length > 0) {
        filteredData.forEach(data => {
            console.log(`ID: ${data.id}, Name: ${data.name}, Age: ${data.age}, Gender: ${data.gender}`);
        });
    } else {
        console.log("Kiritilgan ismga mos keluvchi ma'lumot topilmadi.");
    }
}


function updateData(id, updatedData) {
    let index = datas.findIndex(data => data.id === id);
    if (index !== -1) {
        datas[index] = { ...datas[index], ...updatedData };
        console.log("Data updated:", datas[index]);
    } else {
        console.log("Data not found with id:", id);
    }
}

function deleteData(id) {
    const initialLength = datas.length;
    datas = datas.filter(data => data.id !== id);

    if (datas.length < initialLength) {
        console.log(`ID ${id} bo'yicha ma'lumot o'chirildi.`);
    } else {
        console.log(`ID ${id} ga mos keluvchi ma'lumot topilmadi.`);
    }
}


createData({ id: 11, name: "Jack", age: 26, gender: "male" });
readData("John");
updateData(3, { name: "Robert", age: 29 });
deleteData(3); 

