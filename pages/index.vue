<template>
    <div class="main_container">
            <div class="main_post">
                    <h2 class="post_title">
                            Hello world
                    </h2>
                    <p class="post_lead">
                        This is the first entry of my disgustingly ambitious project :-)
                    </p>
                    <div class="post_footer">
                            <span class="post_author">@Jorge Luque</span>
                            <span class="post_date">on 27 Feb 2021</span>
                        </div>
            </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
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
