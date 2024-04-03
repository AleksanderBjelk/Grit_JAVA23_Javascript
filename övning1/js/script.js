const topMovies = [
    "Fight club",
    "Dune",
    "The dark knight",
    "Haryy Potter",
    "Friends",
    "GOT",
    "Shameless",
    "The Sopranos",
    "The Boys",
    "The Lion king",
];

const listEl = document.createElement("ol");
document.body.append(listEl);


i=0;
for (const movie of topMovies) {
    const li = document.createElement("li");
    listEl.append(li);

    li.innerText = movie;
    li.style.border = `${i+1}px solid red`;
    i++;
}
