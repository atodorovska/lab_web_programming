export const urlStudents = "http://localhost:8080/students/";
export const urlStudyPrograms = "http://localhost:8080/study_programs/";



export const listStudents = () => {
    return fetch(urlStudents, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
};

export const getStudyProgramByStudent = (id) => {
    return fetch(urlStudyPrograms + id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
};

export const deleteStudentById = (id) => {
    return fetch(urlStudents + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
};

export const addNewStudent = (index, name, lastName, studyProgram) => {
    return fetch(urlStudents + "?index=" + index
                        +"&name=" + name + "&lastName=" + lastName
                        +"&studyProgram=" + studyProgram, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
};

export const alterStudent = (index, name, lastName, studyProgram) => {
    return fetch(urlStudents + index
        +"?name=" + name + "&lastName=" + lastName
        +"&studyProgram=" + studyProgram, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    })
};