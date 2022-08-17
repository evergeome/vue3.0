<template>
    <div class="posts">
        <span class="post-views">{{ views }}</span>
        <h3 class="post-title">{{ title }}</h3>
        <span class="post-date">{{ date }}</span>
        <p class="post-content">{{ content }}</p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-author">
                    {{ author }}
                </span>
            </div>
            <div class="col-sm-6 text-end">
                <span class="post-category">
                    {{ category }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['views', 'title', 'date', 'content', 'author', 'category'],
    name: 'BlogPosts'
}
</script>

<style lang="scss" scoped>
.posts {
    padding: 15px;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    margin-bottom: 20px;

    .post-views {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: #4CAF50;
        border-radius: 4px;
        padding: 1px 5px;
        color: #fff;
        text-align: center;
        font-weight: bold;
    }

    .post-title {
        color: #818080;
    }

    .post-date {
        display: block;
        padding: 0 0 5px;
        color: #888;
        font-size: 14px;
    }

    .post-content {
        line-height: 1.8;
        color: #666
    }

    .post-author,
    .post-category {
        padding: 6px 10px;
        border-radius: 4px;
        color: #fff;
    }

    .post-author {
        background-color: #607D8B;
    }

    .post-category {
        background-color: #E91E63;
    }
}
</style>