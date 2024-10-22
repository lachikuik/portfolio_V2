import clientPromise from "../../backend/mongodb/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest, res:NextApiResponse ) {
    const client = await clientPromise;
    const db = client.db("portfolio");
    if (req.method === 'POST') {
        const { comment } = req.body;
        if (!comment || comment.trim() === "") {
            return res.status(400).json({ message: 'Comment cannot be empty' });
        }
        try {
            await db.collection("comments").insertOne({ comment, createdAt: new Date() });
            const newComment = await db.collection("comments").findOne({}, { sort: { createdAt: -1 } });
            return res.status(201).json({ message: 'Comment added successfully', comment: newComment });
        } catch (error) {
            return res.status(500).json({ message: 'Failed to add comment' });
        }
    }
    if (req.method === 'GET') {
        try {
            const comments = await db.collection("comments").find({}).sort({ createdAt: -1 }).toArray();
            return res.status(200).json(comments);
        } catch (error) {
            return res.status(500).json({ message: 'Failed to fetch comments' });
        }
    }
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}