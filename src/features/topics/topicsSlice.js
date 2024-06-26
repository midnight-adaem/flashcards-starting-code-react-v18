import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from '../quizzes/quizzesSlice';

export const topicsSlice = createSlice({
    name: "topics",
    initialState: {
        topics: {},
    },
    reducers: {
        addTopic: (state, action) => {
            const newTopic = action.payload;
            const topicId = newTopic.id;
            newTopic.quizIds = [];

            state.topics[topicId] = newTopic;
        },
    },
    extraReducers: {
        [addQuiz]: (state, action) => {
            const { topicId, id } = action.payload;
            const topic = state.topics[topicId];
            if (topic) {
                topic.quizIds.push(id);
            }
        },
    }
});

export const { addTopic } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;

export default topicsSlice.reducer;
