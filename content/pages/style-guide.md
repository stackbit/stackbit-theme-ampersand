---
title: Style Guide
subtitle: >-
  The style guide provides you with a blueprint of default post and page styles.
  The style guide is also a great reference for suggested typographic treatment
  and styles for your content.
img_path: images/6.jpg
img_alt: Snow covered mountains
seo:
  title: Theme Style Guide
  description: A reference for suggested typographic treatment and styles for your content
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Theme Style Guide
      keyName: property
    - name: 'og:description'
      value: >-
        A reference for suggested typographic treatment and styles for your
        content
      keyName: property
    - name: 'og:image'
      value: images/6.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Theme Style Guide
    - name: 'twitter:description'
      value: >-
        A reference for suggested typographic treatment and styles for your
        content
    - name: 'twitter:image'
      value: images/6.jpg
      relativeUrl: true
layout: page
---

**This is a paragraph**. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line [indentation](https://en.wikipedia.org/wiki/Indentation_(typesetting)), but <abbr title="HyperText Markup Language">HTML</abbr> paragraphs can be any structural grouping of related content, such as images or form fields.

The HTML &lt;h1&gt;–&lt;h6&gt; elements represent six levels of section headings. &lt;h1&gt; is the highest section level and &lt;h6&gt; is the lowest.

# This is an H1

## This is an H2

### This is an H3

#### This is an H4

##### This is an H5

###### This is an H6

Avoid using heading tags to resize text. Instead, use the CSS font-size property. Headings use size to indicate their relative importance, but CSS is preferred for general-purpose resizing.

## Quoting

The HTML blockquote element defines a long block quotation in the HTML document from another source.

>Creativity is allowing yourself to make mistakes. Design is knowing which ones to keep. <cite>― Scott Adams</cite>

A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the &lt;cite&gt; element.

<hr />

## Unordered Lists

Groups a collection of items that do not have a numerical ordering, and their order in the list is meaningless.

+ Donec non tortor in arcu mollis feugiat
+ Lorem ipsum dolor sit amet, consectetuer adipiscing elit
+ Donec id eros eget quam aliquam gravida
+ Vivamus convallis urna id felis
+ Nulla porta tempus sapien

## Ordered Lists

Represents a list of items. The only difference from the unordered list is taht the order of the items is meaningful.

1. Donec non tortor in arcu mollis feugiat
2. Lorem ipsum dolor sit amet, consectetuer adipiscing elit
3. Donec id eros eget quam aliquam gravida
4. Vivamus convallis urna id felis
5. Nulla porta tempus sapien

## Code Blocks

```
/* Some example CSS code */
body {
  color: #333;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.5;
}
```

## Video Embeds

<iframe width="640" height="360" src="https://www.youtube.com/embed/wEG7x7jRhNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Tables

<div class="responsive-table">
  <table>
    <caption>Simple table with caption and header</caption>
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
        <td>Row 1, Cell 3</td>
      </tr>
      <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
        <td>Row 2, Cell 3</td>
      </tr>
    </tbody>
  </table>
</div>
