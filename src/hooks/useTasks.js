import {useMutation, useQuery, useQueryClient} from "react-query";
import {getTodos, saveTodo, editTodoItem} from "../hep/taskitem"


export const useTasks = () => {
    const {data} = useQuery({
        queryKey: 'tasks',
        queryFn: getTodos,
    });
    return {
        tasks: data,
    }
}

export const useAddNewTask = () => {
    const {tasks} = useTasks()

    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: saveTodo,
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
        mutationFn: editTodoItem,
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
