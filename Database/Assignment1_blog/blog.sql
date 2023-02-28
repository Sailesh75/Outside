-- Active: 1677132042284@@127.0.0.1@5432@blog@public-- Active: 1677132042284@@127.0.0.1@5432@blog@public-- Active: 1677132042284@@127.0.0.1@5432@blog@public-- Active: 1677132042284@@127.0.0.1@5432@blog@public-- Active: 1677132042284@@127.0.0.1@5432@blog@public-- Active: 1677132042284@@127.0.0.1@5432@blog@public-- Active: 1677132042284@@127.0.0.1@5432@blog@public-- Active: 1677132042284@@127.0.0.1@5432@blog@public
-- Queries
-- 1. Inserting new users
INSERT INTO
    users (username, password, role)
VALUES
    ('ram', 'ram321', 'author'),
    ('hari', 'hari@123', 'moderator'),
    ('sailesh', 'skpkr321', 'author');


-- 2. Creating new posts with draft
INSERT INTO
    posts (title, content, user_id, status)
VALUES
    (
        'My First Post',
        'This is the content of my first post',
        8,
        'draft'
    );


-- 3. Publish post by
UPDATE
    posts
SET
    status = 'published'
WHERE
    id = 8;


-- 4. Adding comments
INSERT INTO
    comments (content, user_id, post_id)
VALUES
    ('Nice blog well done', 3, 8);


-- 5. Adding replies
INSERT INTO
    replies (content, user_id, comment_id)
VALUES
    ('Thank you!', 3, 2);


-- 6. Retrieving posts by category
SELECT
    p.id,
    p.title,
    p.content
FROM
    posts p
    JOIN post_categories pc ON p.id = pc.post_id
    JOIN categories c ON pc.category_id = c.id
WHERE
    c.name = 'sports';


-- 7. Retrieving posts by tag
SELECT
    p.id,
    p.title,
    p.content
FROM
    posts p
    JOIN post_tags pt ON p.id = pt.post_id
    JOIN tags t ON pt.tag_id = t.id
WHERE
    t.name = 'database';


--8 Retrieving featured posts
SELECT
    id,
    title,
    content
FROM
    posts
WHERE
    featured = true;


--9 Retrieving popular posts
SELECT
    id,
    title,
    content,
    views
FROM
    posts
ORDER BY
    views DESC
LIMIT
    10;