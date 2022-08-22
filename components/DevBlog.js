import styles from './DevBlog.module.css';
import DevBlogEntry from './DevBlogEntry';

export default function DevBlog({ posts }) {
    console.log(posts);
    return (
        <section className={styles.devBlog} id="developer-blog">
            <h2>Developer blog</h2>
            {posts.map((post, index) =>
                <DevBlogEntry post={post} key={index} />
            )}
        </section>
    );
};