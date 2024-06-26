import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {},
    },
    reducers: {
        addQuiz: (state, action) => {
            const newQuiz=action.payload;
            const quizId=newQuiz.id;
            newQuiz.quizIds=[];

            state.quizzes[quizId]=newQuiz;
        },
    }
});

export const { addQuiz} = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;

export default quizzesSlice.reducer;
