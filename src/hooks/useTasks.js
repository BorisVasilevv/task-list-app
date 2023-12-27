import {useMutation, useQuery, useQueryClient} from "react-query";
import {getTasks, saveTask, editTaskItem, deleteTaskItem} from "../hep/taskitem"


export const useTasks = () => {
    const {data} = useQuery({
        queryKey: 'tasks',
        queryFn: getTasks,
    });
    return {
        tasks: data,
    }
}

export const useAddNewTask = () => {
    const {tasks} = useTasks()

    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: saveTask,
        onSuccess: () => {
            queryClient.invalidateQueries('tasks')
        }
    });

    return {
        addNewTask: mutate
    }
}


export const useUpdateTask = () => {
    // const { tasks } = useTasks();

    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: editTaskItem,
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        },
        onError: (error) => {
            console.error('Error updating task:', error);
        }
    });

    return {
        updateTask: mutate
    };
};


export const useDeleteNewTask = () => {
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: deleteTaskItem,
        onSuccess: () => {
            queryClient.invalidateQueries('tasks')
        }
    });

    return {
        deleteTask: mutate
    }
}
