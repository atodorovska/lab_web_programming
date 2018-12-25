export const urlStudyPrograms = "http://localhost:8080/study_programs/";



export const listPrograms = () => {
    return fetch(urlStudyPrograms, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
};


export const deleteProgramById = (id) => {
    return fetch(urlStudyPrograms + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
};

export const addNewProgram = (name) => {
    return fetch(urlStudyPrograms + "?name=" + name , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
};

export const alterProgram = (id, name) => {
    return fetch(urlStudyPrograms + id + "?name=" + name , {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    })
};;