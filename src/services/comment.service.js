import axios from "axios";

import baseUrl, {urls} from "../constants/urls";

const axiosService = axios.create({baseURL: baseUrl});

const commentService = {    // CRUD operations (create read update delete)
    getAll: () => axiosService.get(urls.comments).then(value => value.data),
    getById: (ID) => axiosService.get(urls.comments + '/' + ID).then(value => value.data),
    post: (DATA) => axiosService.post(urls.comments, DATA).then(value => value.data),
    updateById: (ID, DATA) => axiosService.put(urls.comments + '/' + ID, DATA).then(value => value.data),
    deleteById: (ID) => axiosService.delete(urls.comments + '/' + ID).then(value => value.data),
}

export {commentService}