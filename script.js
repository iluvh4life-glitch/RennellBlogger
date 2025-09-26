function sayHello() {
  alert("Hi Renee! You just made a button work!");
}
const blogPosts = [
  {
    title: "My First Blog Post",
    date: "2025-09-26",
    author: "me",
    content: "Welcome to my blog! This is where I’ll share thoughts, tutorials, life happenings, and creative experiments.",
    tags: ["intro", "blogging"]
  }
];

function renderPosts(posts) {
  const container = document.getElementById("blog-container");
  posts.forEach(post => {
    const article = document.createElement("article");
    article.className = "blog-post";
    article.innerHTML = `
      <header>
        <h2 class="post-title">${post.title}</h2>
        <p class="post-meta">Posted on <time datetime="${post.date}">${new Date(post.date).toDateString()}</time> by ${post.author}</p>
      </header>
      <section class="post-content">
        <p>${post.content}</p>
      </section>
      <footer class="post-footer">
        <p class="post-tags">Tags: ${post.tags.map(tag => `<span>#${tag}</span>`).join(" ")}</p>
      </footer>
    `;
    container.appendChild(article);
  });
}

renderPosts(blogPosts);

document.getElementById("blogForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const author = document.getElementById("author").value;
  const content = document.getElementById("content").value;
  const tags = document.getElementById("tags").value.split(",").map(tag => tag.trim());

  const postHTML = `
    <article class="blog-post">
      <header>
        <h2 class="post-title">${title}</h2>
        <p class="post-meta">Posted on <time datetime="${date}">${new Date(date).toDateString()}</time> by ${author}</p>
      </header>
      <section class="post-content">
        <p>${content}</p>
      </section>
      <footer class="post-footer">
        <p class="post-tags">Tags: ${tags.map(tag => `<span>#${tag}</span>`).join(" ")}</p>
      </footer>
    </article>
  `;

  document.getElementById("blog-container").insertAdjacentHTML("afterbegin", postHTML);
  document.getElementById("blogForm").reset();
});
