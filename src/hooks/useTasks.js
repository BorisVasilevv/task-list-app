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