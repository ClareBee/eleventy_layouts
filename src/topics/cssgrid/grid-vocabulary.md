---
title: 'Grid Vocabulary'
description: 'Key terms'
faIcon: 'book'
---
<a href="/topics/cssgrid">
  <i class="fa fa-arrow-left"></i>
</a>

-----

| term | definition  - [main source](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)|
| ---- | ------- |
| tracks | the lines, not the rows/cols |
| grid-gap | sets the gaps (gutters) between rows and columns. Shorthand for row-gap and column-gap.|
| row-gap | sets the size of the gap (gutter) between an element's grid rows. |
|grid-template-columns | defines the line names and track sizing functions of the grid columns.|
| grid-template-rows | defines the line names and track sizing functions of the grid rows.|
| grid-template-areas | names areas within a string separated by spaces only|
| grid-area | assigns a name to an area to go with the above |
| grid-auto-columns | CSS property specifies the size of an implicitly-created grid column track or pattern of tracks. |
| grid-auto-rows | CSS property specifies the size of an implicitly-created grid row track or pattern of tracks. |
| grid-auto-flow | controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid. - row/column/dense |
| auto | keyword that is identical to maximal content if it's a maximum. As a minimum it represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track.|
| fr unit | fractional (amount of space remaining once elements are laid out) e.g. 1fr is for 1 part of the available space.|
| repeat()| CSS function represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form. w grid-template-rows/columns |
| implicit grid/tracks | created by the browser e.g. wrapping row (dotted lines on Firefox devtools) |
| explicit grid/tracks | created by our code (solid line in Firefox)|
| auto-fit | FILLS the row with as many columns as it can fit. So it creates implicit columns whenever a new column can fit, because it's trying to FILL the row with as many columns as it can. The newly added columns can and may be empty, but they will still occupy a designated space in the row. [source](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)|
| auto-fill | FITS the CURRENTLY AVAILABLE columns into the space by expanding them so that they take up any available space. The browser does that after FILLING that extra space with extra columns (as with auto-fill ) and then collapsing the empty ones. [source](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)|
| minmax() | CSS function defines a size range greater than or equal to min and less than or equal to max. |
| fit-content() | CSS function clamps a given size to an available size according to the formula min(maximum size, max(minimum size, argument)). %/px/ch/vw/cm|
| subgrid | grid will adopt the spanned portion of its parent grid in that axis. Rather than being specified explicitly, the sizes of the grid rows/columns will be taken from the parent grid’s definition. |
..
_____

| alignment: | values | definition |
| ---------- |----| ------- |
| <nobr>justify-items</nobr> | start, end, center, stretch | aligns grid items along the inline (row) axis (as opposed to align-items which aligns along the block (column) axis).  [source](https://css-tricks.com/snippets/css/complete-guide-grid/)|
| align-items | start, end, center, stretch | aligns grid items along the block (column) axis. |
| place-items | | sets both the align-items and justify-items properties in a single declaration |
| <nobr>justify-content</nobr> | start, end, center, stretch, space-around, space-between, space-evenly | aligns the grid along the inline (row) axis |
| align-content | start, end, center, stretch, space-around, space-between, space-evenly | aligns the grid along the block (column) axis |
| place-content | | sets both the align-content and justify-content in one go |
| justify-self | start, center, end, stretch | aligns a grid item inside a cell along the inline (row) axis |
| align-self | start, center, end, stretch | aligns a grid item inside a cell along the block (column) axis |
| place-self | | align-self and justify-self in one go |

<br />
