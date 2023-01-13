import authRepository from "./repositories/auth";
import userRepository from "./repositories/user";
import albumRepository from "./repositories/album";
const RepositoryInterface = {
  get() { },
  get(payload) { },
  getPaginated(payload) { },
  getUser() { },
  updateUser(payload) { },
  find(id) { },
  update(id, payload) { },
  create(payload) { },
  delete(id) { },
  getAddress(id) { },
  login(payload) { },
  register(payload) { },
  logout() { },
  confirm(payload) { },
  updatePassword(payload) { },
  forgetPassword(payload) { },
  verifyForgetPasswordOtp(payload) { },
  resetPassword(payload) { },
  
};


function bind(repositoryName, Interface) {
  return {
    ...Object.keys(Interface).reduce((prev, method) => {
      const resolveableMethod = async (...args) => {
        const repository = await import(`./repositories/${repositoryName}`);
        return repository.default[method](...args);
      };
      return { ...prev, [method]: resolveableMethod };
    }, {})
  };
}

// This is the place where you set up all
// of your dependencies. You can switch
// repositories or change the implementation
// details of a repository without having to
// touch all of the components which use it.
export default {
  authRepository: bind("auth", RepositoryInterface),
  userRepository: bind("user", RepositoryInterface),
  albumRepository: bind("album", RepositoryInterface),
};
