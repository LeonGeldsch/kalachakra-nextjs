import styles from './DevBlog.module.css';

export default function DevBlog() {
    return (
        <section className={styles.devBlog} id="developer-blog">
            <h2>Developer blog</h2>
            <h4 className={styles.blogPostDate}>06.06.2022</h4>
            <div className={styles.blogPost}>
{/*                 <img src="" alt="" className="blogPost-image">
 */}                <div className={styles.blogPostBody}>
                    <h3 className={styles.blogPostTitle}>Post 2 title</h3>
                    <h5 className={styles.blogPostDescription}>A short description of the blog post</h5>
                    <p className={styles.blogPostText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sit nibh cursus vivamus volutpat. 
                        Integer lectus viverra mattis lacus, id id ipsum lacus est. 
                        Facilisi blandit ac est, rhoncus blandit condimentum libero dolor velit. 
                        Tincidunt nibh dignissim ac bibendum nisl aliquet malesuada sed fermentum pel...
                    </p>
                </div>
            </div>

            <h4 className={styles.blogPostDate}>06.06.2022</h4>
            <div className={styles.blogPost}>
{/*                 <img src="" alt="" className="blog-post-image">
 */}                <div className={styles.blogPostBody}>
                    <h3 className={styles.blogPostTitle}>Post 1 title</h3>
                    <h5 className={styles.blogPostDescription}>A short description of the blog post</h5>
                    <p className={styles.blogPostText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sit nibh cursus vivamus volutpat. 
                        Integer lectus viverra mattis lacus, id id ipsum lacus est. 
                        Facilisi blandit ac est, rhoncus blandit condimentum libero dolor velit. 
                        Tincidunt nibh dignissim ac bibendum nisl aliquet malesuada sed fermentum pel...
                    </p>
                </div>
            </div>

            <h4 className={styles.blogPostDate}>06.06.2022</h4>
            <div className={styles.blogPost}>
{/*                 <img src="" alt="" className="blog-post-image">
 */}                <div className={styles.blogPostBody}>
                    <h3 className={styles.blogPostTitle}>Post 3 title</h3>
                    <h5 className={styles.blogPostDescription}>A short description of the blog post</h5>
                    <p className={styles.blogPostText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sit nibh cursus vivamus volutpat. 
                        Integer lectus viverra mattis lacus, id id ipsum lacus est. 
                        Facilisi blandit ac est, rhoncus blandit condimentum libero dolor velit. 
                        Tincidunt nibh dignissim ac bibendum nisl aliquet malesuada sed fermentum pel...
                    </p>
                </div>
            </div>
            <button className="button">View more</button>
        </section>
    )
}