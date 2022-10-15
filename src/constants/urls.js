const baseUrl = process.env.REACT_APP_API || 'http://localhost:5000';
const urls = {
    comments: '/comments'
}

export default baseUrl
export {urls}