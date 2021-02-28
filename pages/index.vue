<template>
    <div class="main_container">
            <div class="main_post">
                    <h2 class="post_title">
                            {{ title }}
                    </h2>
                    <p class="post_lead">
                        {{ lead }}
                    </p>
                    <div class="post_footer">
                            <span class="post_author">@{{author}}</span>
                            <span class="post_date">on {{date}}</span>
                        </div>
            </div>
    </div>
</template>

<script lang="js">
import Vue from 'vue'

export default Vue.extend({

async asyncData(context) {
    let post = {}
    const posts = await context.app.$fire.firestore.collection('posts').doc('nhH6ZzDeTOTS1ZWvPgoB')
    .get().then((doc) => {
        if(doc.exists) {
            post = doc.data();
            post.date = post.date.toDate().toDateString();
        } else {
            console.log("Error fetching doc");
        }}) 

    return post;
}})


</script>

<style>



.main_container {
    height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main_post {
    background-color: whitesmoke;
    border-color: silver;
    border-radius: 5px;
    max-width: 75%;
    box-shadow: 2px 4px #888888;
    padding: 12px;

}

.main_post .post_title {
    text-align: center;
}

.main_post .post_footer {
    border-top: 1px outset #534d4d6c;
    font-size: 0.7em;
    margin-top: 30px;
    padding: 10px;
}


</style>
