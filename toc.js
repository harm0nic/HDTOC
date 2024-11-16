const TOC = {
	init: async function () {
		console.log("HDTOC init");

		const doc = document.getElementById("content");
		const headings = doc.querySelectorAll("h2, h3, h4, h5, h6");

		let slugs = [];
		let html = "";
		let i = 0;
		headings.forEach((heading) => {
			i++;
			const label = heading.innerText;
			let slug = label.replace(/[^\w]/gi, "-");
			slug = slug.toLowerCase();
			if (slug.charAt(slug.length - 1) === "-") {
				slug = slug.substring(0, slug.length - 1);
			}

			if (slugs.includes(slug)) {
				slug = slug + "-" + i;
			}
			slugs.push(slug);

			heading.setAttribute("id", slug);

			html += `<a href = "#${slug}" class = "hd_toc_item hd_toc_${heading.tagName}">${label}</a>`;
		});

		document.getElementById("toc").innerHTML = html;
	},
};
TOC.init();
