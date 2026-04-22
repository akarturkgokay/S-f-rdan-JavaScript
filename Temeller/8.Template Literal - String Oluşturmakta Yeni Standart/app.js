const name = "Gökay Akartürk";
const department = "Bilişim";
const salary = 4000;

// const a = "İsim:" + name + "\n" + "Departman: " + deparment+ "\n" + "Salary:" + salary;

// const a = `İsim:${name}\nDepartment:${department}\nSalary:${salary}`

// console.log(a);

// const html =
//     "<ul>" +
//     "<li>" + name + "</li>" +
//     "<li>" + department + "</li>" +
//     "<li>" + salary + "</li>" +
//     "</ul>";

function a() {
    return "Merhaba";
}

const html = `
        <ul>
            <li>${name}</li>
            <li>${department}</li>
            <li>${salary}</li>
            <li>${10 / 4}</li>
            <li>${a()}</li>
        </ul>
`;

document.body.innerHTML = html;




