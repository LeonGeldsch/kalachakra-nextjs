import styles from './DevBlogEntry.module.css';
import DevBlogModal from './DevBlogModal';
import { useState } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import md from 'markdown-it';

export default function DevBlogEntry({ post }) {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <h4 className={styles.blogPostDate}>{post.frontmatter.date}</h4>
            <div className={styles.blogPost} onClick={openModal}>
                {/* <img src="" alt="" className="blogPost-image"> */}
                <Image 
                    src={post.frontmatter.imageSrc}
                    height={post.frontmatter.imageHeight}
                    width={post.frontmatter.imageWidth}
                    objectFit="cover"
                />
                <div className={styles.blogPostBody}>
                    <h3 className={styles.blogPostTitle}>{post.frontmatter.title}</h3>
                    <h5 className={styles.blogPostDescription}>{post.frontmatter.description}</h5>
                    <p className={styles.blogPostText}>{post.frontmatter.preview}<span className={styles.readMore}>Read more</span></p>
                </div>
            </div>
            <DevBlogModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
                <p>
                    {post.frontmatter.date} 
                    {post.frontmatter.tags.map((tag, index) => 
                        <span className={`${styles.tag} ${tag.toLowerCase()}`} key={index}>{tag}</span>
                    )}
                </p>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: md().render(post.content) }} />
            </DevBlogModal>
        </>
    );
};