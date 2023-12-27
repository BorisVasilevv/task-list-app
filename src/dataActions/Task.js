export const TaskActions = {
    saveValue: (value) => {
        return new Promise((resolve, reject) => {
            TaskActions.getValue().then((tasks) => {
                let maxId = 0;
                if (!value) {
                    valueToSave = [];
                }
                
                if (tasks.length){
                    maxId = Math.max(...tasks.map(t => t.id));
                }
                let valueToSave = {"name": value[maxId].name, "id":maxId};
                console.log(value[0].name);
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
    }
}