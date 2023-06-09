import React, { useState } from 'react';
import { Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { deletePosts, updatePosts } from './PostSlice';

const EditPost = (props) => {
    const { id, postText } = props.post
    // console.log(props);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editPost, setEditPost] = useState(postText);
    const dispatch = useDispatch();



    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = (e) => {
        e.preventDefault();
        dispatch(updatePosts({ id, postText: editPost }));

        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const handleDeletePost = (id) => {
        if (window.confirm('Are you sure that you want to delete??')) {
            dispatch(deletePosts(id));
        }
        // dispatch(deletePosts(id));
    }


    return (
        <>
            <div className='edit-dlt-grp'>
                <button className='btn edit-btn' onClick={showModal}><FontAwesomeIcon icon={faEllipsis} /></button>
                <button className='btn dlt-btn' onClick={() => handleDeletePost(id)}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
            <Modal title="Edit Post" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Edit Post">
                <input type="text" className='input-field' value={editPost} onChange={(e) => setEditPost(e.target.value)} />
            </Modal>
        </>
    );
};

export default EditPost;

