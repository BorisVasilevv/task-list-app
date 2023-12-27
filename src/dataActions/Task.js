export const TaskActions = {
    saveValue: (value) => {
        return new Promise((resolve, reject) => {
            TaskActions.getValue().then((tasks) => {
                let valueToSave = value;
                let maxId = 0;
                if (!value) {
                    valueToSave = [];
                }
                else{
                    if (tasks.length){
                        maxId = Math.max(...tasks.map(t => t.id));
                        maxId= maxId + 1;
                    }
                    let newTask = {"name": value[maxId].name, "id":maxId};
                    valueToSave[maxId] = newTask;
                }
                localStorage.setItem('tasks', JSON.stringify(valueToSave));
                resolve();
            })
        }).catch();
    },
    updateValue: (value) => {
        return new Promise((resolve, reject) => {
            TaskActions.getValue().then((tasks) => {
                const task = tasks.filter(t=>t.id===value.id)

                let valueToSave = value;
                let maxId = 0;
                if (!value) {
                    valueToSave = [];
                }
                else{
                    if (tasks.length){
                        maxId = Math.max(...tasks.map(t => t.id));
                        maxId= maxId + 1;
                    }
                    let newTask = {"name": value[maxId].name, "id":maxId};
                    valueToSave[maxId] = newTask;
                }
                localStorage.setItem('tasks', JSON.stringify(valueToSave));
                resolve();
            })
        }).catch();
    },
    getValue: () => {
        return new Promise((resolve, reject) => {
            const savedValue = localStorage.getItem('tasks');
            if (!savedValue) {
                resolve([])
            } else
                resolve(JSON.parse(savedValue));
        })
    },
    getValueById: (id) => {
        return new Promise((resolve, reject) => {
            const savedValue = localStorage.getItem('tasks');
            if (!savedValue) {
                resolve()
            } else
            {
                const tasks = JSON.parse(savedValue);
                const task = tasks.filter(t=>t.id===id)[0];
                resolve(task);
            } 
        })
    }
}