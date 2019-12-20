const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.addEventListener("keyup", e => {
  creatTags(e.target.value);
  if (e.key === "Enter") {
    e.target.value = "";

    //select Random
    randomSelector();
  }
});

function creatTags(input) {
  const tags = input
    .split(",")
    .filter(tag => tag.trim() !== "")
    .map(tag => tag.trim());

  //CLean up the text container
  tagsEl.innerHTML = "";

  // Loop over the tags + add them to the tags container

  tags.forEach(tag => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerHTML = tag;

    tagsEl.appendChild(tagEl);
  });
}

function randomSelector() {
  const time = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTags();
    highLightedTag(randomTag);

    setTimeout(() => {
      unHighLightedTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTags();
      highLightedTag(randomTag);
    }, 100);
  }, time * 100);
}

const pickRandomTags = () => {
  const tags = document.querySelectorAll(".tag");

  return tags[Math.floor(Math.random() * tags.length)];
};

const highLightedTag = tag => {
  tag.classList.add("heightlight");
};

const unHighLightedTag = tag => {
  tag.classList.remove("heightlight");
};
