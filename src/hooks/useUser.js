import { UserContext } from "@/contexts"
import { useContext } from "react"

export const useUser = () => {
    const { user, loading } = useContext(UserContext)

    return { user, loading }
}