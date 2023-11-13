
showList()
function showList() {
    axios.get("http://localhost:8080/staff").then((response) =>{
        let list = response.data;
        let content = "<button class=\"btn btn-primary\" onclick='showFormCreate()'>Add New</button>" + " " +
            "<button class=\"btn btn-primary\" onclick='arrange()'>arrange</button>" +
            "<table class=\"table\">\n" +
            "\n" +
            "        <tr>\n" +
            "            <th scope=\"col\">EmployeeCode</th>\n" +
            "            <th scope=\"col\">Name</th>\n" +
            "            <th scope=\"col\">Age</th>\n" +
            "            <th scope=\"col\">Salary</th>\n" +
            "            <th scope=\"col\">Department</th>\n" +
            "            <th scope=\"col\" colspan=\"3\"></th>\n" +
            "        </tr>";
        for (let i = 0; i < list.length; i++) {
            content += " <tr>\n" +
                "            <th scope=\"row\">" + list[i].employeeCode +"</th>\n" +
                "            <td>" + list[i].name +"</td>\n" +
                "            <td>" + list[i].age +"</td>\n" +
                "            <td>" + list[i].salary +"</td>\n" +
                "            <td>" + list[i].department.name +"</td>\n" +
                "            <td><button class=\"btn btn-primary\" onclick=\"showStaff(" + list[i].id +")\">Update</button></td>\n" +
                "            <td><button class=\"btn btn-danger\" onclick=\"showOneStaff(" + list[i].id +")\">Views</button></td>\n" +
                "            <td><button class=\"btn btn-warning\" onclick=\"deleteById(" + list[i].id +")\">Delete</button></td>\n" +
                "        </tr>\n";
        }
        content += "</table>";
        document.getElementById("show_list").innerHTML = content;
    })
}
function showStaff(id) {
    let content =  "<div class=\"mb-3\">\n" +
        "            <label for=\"employeeCode\" class=\"form-label\">Employee Code</label>\n" +
        "            <input style='width: 200px' type=\"text\" class=\"form-control\" id=\"employeeCode\" aria-describedby=\"emailHelp\">\n" +
        "        </div>\n" +
        "        <div class=\"mb-3\">\n" +
        "            <label style='width: 200px' for=\"name\" class=\"form-label\">Name</label>\n" +
        "            <input style='width: 200px' type=\"text\" class=\"form-control\" id=\"name\">\n" +
        "        </div>\n" +
        "        <div class=\"mb-3\">\n" +
        "            <label style='width: 200px' for=\"age\" class=\"form-label\">Age</label>\n" +
        "            <input style='width: 200px' type=\"text\" class=\"form-control\" id=\"age\">\n" +
        "        </div>\n" +
        "        <div class=\"mb-3\">\n" +
        "            <label style='width: 200px' for=\"salary\" class=\"form-label\">Salary</label>\n" +
        "            <input style='width: 200px' type=\"text\" class=\"form-control\" id=\"salary\">\n" +
        "        </div>\n" +
        "        <div class=\"mb-3\" id=\"department_list\">\n" +
        "        </div>\n" +
        "        <button class=\"btn btn-primary\" onclick=\"save(" + id +")\">Save</button>\n" +
        "        <button class=\"btn btn-primary\" onclick='showList()'>Back To list</button>";
    document.getElementById("show_list").innerHTML = content;
    update(id);
}
function update(id) {
    axios.get("http://localhost:8080/staff/" + id).then((response) =>{
        let staff = response.data;
        document.getElementById("employeeCode").value = staff.employeeCode;
        document.getElementById("name").value = staff.name;
        document.getElementById("age").value = staff.age;
        document.getElementById("salary").value = staff.salary;
    })
    axios.get("http://localhost:8080/department").then((response) =>{
        let list = response.data
        let content =  "            <label style='width: 200px' for=\"department\" class=\"form-label\">department</label>\n" +
            "            <select style='width: 200px' class=\"form-select\" aria-label=\"Default select example\" id=\"department\">\n";
        for (let i = 0; i < list.length; i++) {
            content += "<option value=\"" + list[i].id +"\">" + list[i].name +"</option>\n"
        }
        content +=   "</select>";
        document.getElementById("department_list").innerHTML = content;

    })
}
function save(id) {
    let staff = {
        id: id,
        name : document.getElementById("name").value,
        employeeCode: document.getElementById("employeeCode").value,
        age : document.getElementById("age").value,
        salary : document.getElementById("salary").value,
        department : {
           id: document.getElementById("department").value
        }
    }
    axios.post("http://localhost:8080/staff", staff).then(() =>{
        alert("update thanh cong");
        showList();
    })
}

function showFormCreate() {
    let content =  "<div class=\"mb-3\">\n" +
        "            <label for=\"employeeCode\" class=\"form-label\">Employee Code</label>\n" +
        "            <input style='width: 200px' type=\"text\" class=\"form-control\" id=\"employeeCode\" aria-describedby=\"emailHelp\">\n" +
        "        </div>\n" +
        "        <div class=\"mb-3\">\n" +
        "            <label style='width: 200px' for=\"name\" class=\"form-label\">Name</label>\n" +
        "            <input style='width: 200px' type=\"text\" class=\"form-control\" id=\"name\">\n" +
        "        </div>\n" +
        "        <div class=\"mb-3\">\n" +
        "            <label style='width: 200px' for=\"age\" class=\"form-label\">Age</label>\n" +
        "            <input style='width: 200px' type=\"text\" class=\"form-control\" id=\"age\">\n" +
        "        </div>\n" +
        "        <div class=\"mb-3\">\n" +
        "            <label style='width: 200px' for=\"salary\" class=\"form-label\">Salary</label>\n" +
        "            <input style='width: 200px' type=\"text\" class=\"form-control\" id=\"salary\">\n" +
        "        </div>\n" +
        "        <div class=\"mb-3\" id=\"department_list\">\n" +
        "        </div>\n" +
        "        <button class=\"btn btn-primary\" onclick=\"create()\">Create</button>\n" +
        "        <button class=\"btn btn-primary\" onclick='showList()'>Back To list</button>";
    document.getElementById("show_list").innerHTML = content;
    axios.get("http://localhost:8080/department").then((response) =>{
        let list = response.data
        console.log(list)
        let content1 =  "<label style='width: 200px' for=\"department\" class=\"form-label\">department</label>\n" +
            "            <select style='width: 200px' class=\"form-select\" aria-label=\"Default select example\" id=\"department\">\n";
        for (let i = 0; i < list.length; i++) {
            content1 += "<option value=\"" + list[i].id +"\">" + list[i].name +"</option>\n"
        }
        content1 +=   "</select>";
        console.log(content1)
        document.getElementById("department_list").innerHTML = content1;
    })
}

function create() {
    let staff = {
        name : document.getElementById("name").value,
        employeeCode: document.getElementById("employeeCode").value,
        age : document.getElementById("age").value,
        salary : document.getElementById("salary").value,
        department: {
            id: document.getElementById("department").value
        }
    }

    axios.put("http://localhost:8080/staff", staff).then(() =>{
        alert("Them thanh cong")
        showList();
    })
}

function deleteById(id) {
    axios.delete("http://localhost:8080/staff/" + id).then(()=>{
        alert("Delete thanh cong");
        showList();
    })
}

function showOneStaff(id) {
    axios.get("http://localhost:8080/staff/" + id).then((response) =>{
        let content = "<h2>Employee Detail</h2>"
        let staff = response.data
        console.log(staff)
        content +=  "<br>" +
                    "<p>Name: " + staff.name +"</p>" + "<br>" +
                    "<p>Salary: " + staff.salary +"</p>" + "<br>" +
                    "<p>Age: " + staff.age +"</p>" + "<br>" +
                    "<p>Department: " + staff.department.name +"</p>" + "<br>" +
                    "<a onclick=\"" + showList() +"\">Back to list</a>"
        document.getElementById("show_list").innerHTML = content;
    })
}

function arrange() {
    axios.post("http://localhost:8080/staff/arrange").then((response) =>{
        let list = response.data;
        let content = "<button class=\"btn btn-primary\" onclick='showFormCreate()'>Add New</button>" + " " +
            "<button class=\"btn btn-primary\" onclick='arrange()'>arrange</button>" +
            "<table class=\"table\">\n" +
            "\n" +
            "        <tr>\n" +
            "            <th scope=\"col\">EmployeeCode</th>\n" +
            "            <th scope=\"col\">Name</th>\n" +
            "            <th scope=\"col\">Age</th>\n" +
            "            <th scope=\"col\">Salary</th>\n" +
            "            <th scope=\"col\">Department</th>\n" +
            "            <th scope=\"col\" colspan=\"3\"></th>\n" +
            "        </tr>";
        for (let i = 0; i < list.length; i++) {
            content += " <tr>\n" +
                "            <th scope=\"row\">" + list[i].employeeCode +"</th>\n" +
                "            <td>" + list[i].name +"</td>\n" +
                "            <td>" + list[i].age +"</td>\n" +
                "            <td>" + list[i].salary +"</td>\n" +
                "            <td>" + list[i].department.name +"</td>\n" +
                "            <td><button class=\"btn btn-primary\" onclick=\"showStaff(" + list[i].id +")\">Update</button></td>\n" +
                "            <td><button class=\"btn btn-danger\" onclick=\"showOneStaff(" + list[i].id +")\">Views</button></td>\n" +
                "            <td><button class=\"btn btn-warning\" onclick=\"deleteById(" + list[i].id +")\">Delete</button></td>\n" +
                "        </tr>\n";
        }
        content += "</table>";
        document.getElementById("show_list").innerHTML = content;
        alert("sap xep thanh cong");
    })
}