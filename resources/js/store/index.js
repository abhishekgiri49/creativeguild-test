import { createStore } from 'vuex'

const {
    getUser,
    setUser,
    removeUser,
    getToken,
    setToken,
    removeToken,
    getAccess,
    setAccess,
    removeAccess,

} = require('../lib/storage');

const user = getUser();
const access = getAccess();
const token = getToken();

export default createStore({
    state: {
        currentUser: user,
        access: access,
        isLogged: !!user,
        loading: false,
        auth_error: null,
        reg_error: null,
        registeredUser: null,


    },

    getters: {
        isLoading: state => state.loading,
        isLoggedIn: state => state.isLogged,
        currentUser: state => state.currentUser,
        getRole: state => state.access,
        authError: state => state.auth_error,
        regError: state => state.reg_error,
        registeredUser: state => state.registeredUser,

    },

    mutations: {
        login(state) {
            state.loading = true;
            state.auth_error = null;
        },

        loginSuccess(state, payload) {
            console.log(payload);
            state.auth_error = null;
            state.isLogged = true;
            state.loading = false;
            state.access = payload.body.role;
            state.currentUser = Object.assign({}, payload.body.user);
            setUser(JSON.stringify(state.currentUser));
            setAccess(state.access);
            setToken(payload.body.access_token);
        },

        loginFailed(state, payload) {
            state.loading = false;
            state.auth_error = payload.body;
            state.access = null;
            removeUser();
            removeAccess();
            removeToken();
        },

        logout(state) {
            state.isLogged = false;
            state.currentUser = null;
            state.role = null;
            removeUser();
            removeAccess();
            removeToken();
        },

        registerSuccess(state, payload) {
            state.reg_error = null;
            state.registeredUser = payload.user;
        },

        registerFailed(state, payload) {
            state.reg_error = payload.data;
        },
        updateSuccess(state, payload) {
            console.log(payload);
            state.currentUser = payload;
            setUser(JSON.stringify(state.currentUser));
        },

    },

    actions: {
        login(context) {
            context.commit("login");
        },
        logout(context) {
            context.commit("logout");
        },

    }
});