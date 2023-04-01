import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { usePostContext } from "../../contexts/PostContext";

export const PostOwner = ({
    children,
}) => {
    const { postId } = useParams();
    const { getPost } = usePostContext();
    const { userId } = useAuthContext();

    const currentPost = getPost(postId);

    if (currentPost && currentPost._ownerId !== userId) {
        return <Navigate to={`/posts/${postId}`} replace />
    }

    return children ? children : <Outlet />
};