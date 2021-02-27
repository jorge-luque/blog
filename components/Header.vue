<template>
    <div>
      <div class="header">
          <span class="title">Georgeluque.com</span>
          <ul class="navigation">
             <li> <a href="/about">/ About</a> </li>
          </ul>
      </div>
          <div class="subheader">
              <img src="~/assets/myself.jpg" alt="">  
          <p class="logo_text">Doing <span class="hightlight">big</span> things</p> 
      </div>
    </div>
</template>

<style>
.header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    height: 5vh;
    color: azure;
    padding: 10px;
}

.header .title {
    font-size: 2em;
}

.subheader .hightlight {
    color: goldenrod;
}

.subheader {
    max-height: 40vh;
    flex-direction: row;
    width: 100%;
    margin: 0 auto;
    display: flex;
    background-color: #eeeeee;
    justify-content: center;
    align-items: center;
}
.subheader > img {
    max-height: 100%;
    object-fit: contain;
    flex-grow: 1;
    max-width: 30vh;
}

.subheader .logo_text {
    font-size: 2em;
    text-align: left;
    flex-grow: 3;
    display: inline;
}
.subheader > * {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

.navigation {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  list-style: none;
  margin: 0; 
}

.navigation a {
  text-decoration: none;
  display: block;
  padding: 1em;
  color: white;
}
</style>
