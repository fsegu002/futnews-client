import { http } from './http'

export const postLike = (postId) => {
    return http.post(`/posts/${postId}/like`)
}