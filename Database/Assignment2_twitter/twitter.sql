-- Active: 1677132042284@@127.0.0.1@5432@twitter_database@public
--Queries
--1. Create user
INSERT INTO
    users (username, email, password_hash)
VALUES
    (
        'sailesh',
        'saileshkafle47@example.com',
        'sailesh123'
    );

--2. login user
SELECT
    user_id,
    username
FROM
    users
WHERE
    username = 'sailesh'
    AND password_hash = 'sailesh123';

--3. Create tweet
INSERT INTO
    tweets (user_id, content)
VALUES
    (2, 'Hello, Twitter!');

--4. Follow user
INSERT INTO
    followers (follower_id, following_id)
VALUES
    (1, 2);

--5. Get a list of a user's followers
SELECT
    u.username
FROM
    users u
    JOIN followers f ON f.follower_id = u.user_id
WHERE
    f.following_id = 1;

--6. Who are following the user
SELECT
    u.username
FROM
    users u
    JOIN followers f ON f.following_id = u.user_id
WHERE
    f.follower_id = 1;

--7. Like a tweet
INSERT INTO
    likes (user_id, tweet_id)
VALUES
    (2, 2);

--8. Add tag a tweet
INSERT INTO
    hashtags (hashtag)
VALUES
    ('twitter');

INSERT INTO
    tweet_hashtags (tweet_id, hashtag_id)
VALUES
    (2, 1);

--9. Show trending hashtags
SELECT
    h.hashtag,
    COUNT(*) as count
FROM
    tweet_hashtags th
    JOIN hashtags h ON th.hashtag_id = h.hashtag_id
    JOIN tweets t ON th.tweet_id = t.tweet_id
WHERE
    t.created_at >= NOW() - INTERVAL '24 HOURS'
GROUP BY
    h.hashtag
ORDER BY
    count DESC
LIMIT
    5;