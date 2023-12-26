import {useMutation, useQuery, useQueryClient} from "react-query";
import {TaskActions} from "../dataActions/Task";

export const useTasks = () => {
    const {data} = useQuery({
        queryKey: 'tasks',
        queryFn: TaskActions.getValue
    });
    return {
        tasks: data,
    }
}

export const useAddNewTask = () => {
    const {tasks} = useTasks()

    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: (task) => {
            if (tasks) {
                const newTasksArray = tasks.concat([task])
                return TaskActions.saveValue(newTasksArray);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('tasks')
        }
    });

    return {
        addNewTask: mutate
    }
}


export const useUpdateTask = () => {
    const { tasks } = useTasks();

    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: (updatedTask) => {
            if (tasks) {
                const taskIndex = tasks.findIndex(task => task.id === updatedTask.id);
                if (taskIndex >= 0) {
                    const newTasksArray = [...tasks]; // копируем массив для иммутабельности
                    newTasksArray[taskIndex] = updatedTask; // обновляем задачу
                    return TaskActions.saveValue(newTasksArray);
                }
                throw new Error(`Task with id ${updatedTask.id} not found.`);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        },
        onError: (error) => {
            // Обработка ошибки, например:
            console.error('Error updating task:', error);
        }
    });

    return {
        updateTask: mutate
    };
};
