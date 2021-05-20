import React from 'react';
import { Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {Task, TaskPropsType} from "../Task";
import {Meta} from "@storybook/react/dist/ts3.4/client";
import AppWithRedux from "../AppWithRedux";
import {Provider} from "react-redux";
import {store} from "../state/store";
import {ReduxStoreProviderDecorator} from "./ReduxProviderDecorator";



export default {
    title:'Todolist/AppWithRedux',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]
} as Meta

const Template: Story = (args) => <AppWithRedux/>

export const AppWithcReduxNewStories = Template.bind({})
AppWithcReduxNewStories.args = {

}