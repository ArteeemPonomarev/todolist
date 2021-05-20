import React from 'react';
import { Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {Task, TaskPropsType} from "../Task";
import {Meta} from "@storybook/react/dist/ts3.4/client";


export default {
    title:'Todolist/Task',
    component:Task
} as Meta


const changeTaskStatusCallback = action ('Status changed inside Task')

const changeTaskTitleCallback = action('Title changed inside Task')

const removeTaskCallback = action('Remove Button inside Task clicked')

const Template: Story<TaskPropsType> = (args) => <Task {...args} />

const baseArgs = {
    changeTaskStatus: changeTaskStatusCallback,
    changeTaskTitle: changeTaskTitleCallback,
    removeTask:removeTaskCallback
}

export const TaskIsDoneExample = Template.bind( {});
TaskIsDoneExample.args = {
    ...baseArgs,
    task: {id:'1', isDone:true, title:'Js'},
    todolistId: 'todolistId1'
}

export const TaskIsNotDoneExample = Template.bind( {});
TaskIsNotDoneExample.args = {
    ...baseArgs,
    task: {id:'2', isDone:false, title:'react'},
    todolistId: 'todolistId2'
}





