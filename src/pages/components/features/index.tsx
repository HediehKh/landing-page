import Spline from '@splinetool/react-spline';
import styles from "./feature.module.css";

export default function Features() {
    return (
        <div className={`${styles.featuresContainer}`}>
            <div className={`${styles.feature}`}>
                <div className={`${styles.featureContent}`}>
                    <div className={`${styles.splineContainer1}`}>
                        <Spline scene="https://prod.spline.design/aiUunHpt3umCiJVY/scene.splinecode" />
                    </div>
                    <div className={`${styles.textContainer}`}>
                        <h3 className={`${styles.title}`}>Unlimited Music</h3>
                        <p className={`${styles.description}`}>Amplify offers access to a vast library of Canadian music, including millions of songs across various genres. Users can discover new music, explore curated playlists, and access albums and singles from their favorite Canadian artists</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.feature}`}>
                <div className={`${styles.featureContent}`}>
                    <div className={`${styles.splineContainer2}`}>
                        <Spline scene="https://prod.spline.design/cq8SPKxT4zW-taso/scene.splinecode" />
                    </div>
                    <div className={`${styles.textContainer}`}>
                        <h3 className={`${styles.title}`}>Personalized Recommendations</h3>
                        <p className={`${styles.description}`}>Amplify provides personalized photo recommendations tailored to each user's listening habits and preferences. This includes personalized playlists, music, and Vancouver art.</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.feature}`}>
                <div className={`${styles.featureContent}`}>
                    <div className={`${styles.splineContainer3}`}>
                        <Spline scene="https://prod.spline.design/pLZgUUV6pjwLb060/scene.splinecode" />
                    </div>
                    <div className={`${styles.textContainer}`}>
                        <h3 className={`${styles.title}`}>Playlist Sharing</h3>
                        <p className={`${styles.description}`}>Users can create their own playlists and share them with others. Additionally, Amplify allows collaborative playlist creation, enabling multiple users to contribute to a single playlist. This feature fosters social interaction and music discovery among friends and communities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
