---
title: 'Flexbox Vocabulary'
description: 'Key terms'
faIcon: 'book'
---
<a href="/topics/flexbox">
  <i class="fa fa-arrow-left"></i>
</a>

-----

| term | values | definition  - [main source](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) and [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) |
| ---- | ------- | ---- |
| <nobr>flex-direction</nobr> | row, row-reverse, column, column-reverse | establishes main axis|
| flex-wrap | nowrap, wrap, wrap-reverse | allows items to wrap if needed |
| flex-flow | | shorthand for flexdirection and flex-wrap |
| justify-content | flex-start, flex-end, left, right, center, space-between, space-around, space-evenly, start/end (writing mode direction) | defines the alignment along the main axis  (Notice that when the flex direction is a column, justify-content changes to the vertical and align-items to the horizontal.)|
| align-items | flex-start, flex-end, center, baseline | how flex items are laid out along the cross axis on the current line (perpendicular to main axis) |
| align-content | flex-start, flex-end, center, space-between, space-around, space-evenly, stretch | aligns a flex container's lines within when there is extra space in the cross-axis. no effect if only one line of items |
| order | <integer> (default 0) | order of placement of items |
| flex-grow | <integer> (default 0) | dictates what amount of the available space inside the flex container the item should take up proportionally |
| flex-shrink | <integer> (default 1) | defines the ability for a flex item to shrink if necessary. |
| flex-basis | length/auto/content | defines the default size of an element before the remaining space is distributed. |
| flex | | shorthand for flex-grow flex-shrink flex-basis (recommended)|
| align-self | same as align-items | allows the default alignment (or the one specified by align-items) to be overridden for individual flex items. |

<br />
