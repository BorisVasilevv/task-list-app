export const PhoneActions = {
    saveValue: (value) => {
        return new Promise((resolve, reject) => {
            let valueToSave = value;
            if (!value) {
                valueToSave = [];
            }
            localStorage.setItem('phones', JSON.stringify(valueToSave));
            resolve();
        })
    },
    getValue: () => {
        return new Promise((resolve, reject) => {
            const savedValue = localStorage.getItem('phones');
            if (!savedValue) {
                resolve([])
            } else
                resolve(JSON.parse(savedValue));
        })
    }
}