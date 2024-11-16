# HDTOC
Harmonic Design Table of Contents (Vanilla JS)

Example basic CSS

```
#toc_wrapper {
	position: sticky;
	top: 0;
	max-height: 100vh;
	overflow: auto;
}

.hd_toc_item {
	display: block;
	color: #222;
	text-decoration: none;
}

.hd_toc_item:hover {
	text-decoration: underline;
}

.hd_toc_H2 {
	font-weight: bold;
	margin-top: 0.4em;
}

.hd_toc_H2:first-child {
	margin-top: 0;
}

.hd_toc_H3,
.hd_toc_H4,
.hd_toc_H5,
.hd_toc_H6 {
	font-size: 0.8em;
}

.hd_toc_H4 {
	padding-left: 1em;
}
.hd_toc_H4:before{
	content: "- ";
}

.hd_toc_H5 {
	padding-left: 2em;
}
```
