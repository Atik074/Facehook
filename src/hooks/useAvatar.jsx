
import {useProfile} from "./useProfile"

export const useAvatar = (post)=>{
    const {state} = useProfile()

    const isMe = (post?.author?.id === state?.user?.id)
    const avater = isMe ? `${state?.user?.avatar}` : `${post?.author?.avatar}`
const avatarUrl = `${import.meta.env.VITE_SERBER_BASE_URL}/${avater}`

    return {avatarUrl}
}