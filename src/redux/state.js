let rerenderEntireTree = () => {
    console.log('changed')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'two post', likesCount: 11},
            {id: 2, message: 'wfwfwef', likesCount: 11},
            {id: 2, message: '232423424', likesCount: 11},
        ],
        newPostText: 'text-text'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is yor name?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ]
    }
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; // observer - паттерн // publisher-subscriber // addEventListener
}

export default state;