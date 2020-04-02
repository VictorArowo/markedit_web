const md = `### Headings

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

### Text

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quis quos in quas nesciunt at accusantium dolor distinctio enim. Blanditiis officia, aliquid voluptas iste fuga tempore veniam aliquam deserunt in!

The following snippet of text is rendered as **bold text**.

The following snippet of text is rendered as *italicized text*.

[I'm an inline-style link](https://www.google.com)

For example, \` <
  section >
  \` should be wrapped as inline.

---

### Unordered List

* Lorem ipsum dolor sit amet, consectetur adipisicing.
* Lorem ipsum dolor sit amet.
* Lorem ipsum dolor sit amet, consectetur.
	* Lorem ipsum dolor sit amet, consectetur adipisicing.
	* Lorem ipsum dolor sit amet.
	* Lorem ipsum dolor sit amet, consectetur.
	* Lorem ipsum dolor.
* Lorem ipsum dolor.
* Lorem ipsum dolor sit amet.

### Ordered List

1. Lorem ipsum dolor sit amet, consectetur adipisicing.
1. Lorem ipsum dolor sit amet.
1. Lorem ipsum dolor sit amet, consectetur.
	1. Lorem ipsum dolor sit amet, consectetur adipisicing.
	1. Lorem ipsum dolor sit amet.
	1. Lorem ipsum dolor sit amet, consectetur.
	1. Lorem ipsum dolor.
1. Lorem ipsum dolor.
1. Lorem ipsum dolor sit amet.

---

### Table

First Header | Second Header
------------ | -------------
Content Cell | Content Cell
Content Cell | Content Cell
Content Cell | Content Cell

---

### Blockquote

> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae tempora assumenda dolores ut dolore blanditiis fugit ad ex nam labore adipisci dicta esse, velit dolorum itaque inventore illo ratione!

---

\`\`\`js
	var num1 = 3;
	var num2 = 2;

	function add(a, b) {
		return a + b;
	}

	var sum = add(num1, num2);

    console.log(sum);
\`\`\`
`;
export default md;
