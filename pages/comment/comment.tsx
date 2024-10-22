'use client';

import { FormEvent, useState, useEffect } from 'react';
import styles from "@/pages/comment/comment.module.css";

export default function Comment() {
    const [comments, setComments] = useState<any[]>([]);
    const [newComment, setNewComment] = useState<string>('');
    const [error, setError] = useState<string | null>(null); 

    useEffect(() => {
        async function fetchComments() {
            try {
                const res = await fetch('/api/comments');
                const data = await res.json();
                setComments(data);
            } catch (err) {
                setError('Failed to load comments');
            }
        };
        fetchComments();
    },[]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!newComment.trim()) {
            setError('Comment cannot be empty');
            return;
        }
        try {
            const res = await fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment: newComment }),
            });
            if (res.ok) {
                const newCommentData = await res.json();
                setComments((prevComments) => [newCommentData.comment, ...prevComments]);
                setNewComment('');
            } else {
                setError('Failed to add comment');
            }
        } catch (err) {
            setError('Failed to add comment');
        }
    };

    return (
        <div>
            <h3>Commentaires</h3>
            <div className={styles.comments}>
                <form onSubmit={handleSubmit}>
                    <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="ajouter un commentaire"/>
                    <button type="submit">Envoyer</button>
                </form>
                {error && <p>{error}</p>}
                <ul>
                    {comments.map((commentObj) => (
                        <li key={commentObj._id}>
                            <div>
                                {commentObj.comment}
                            </div>
                            <div>
                                {commentObj.createdAt ? new Date(commentObj.createdAt).toLocaleString() : 'No Date'}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      );
}