---
title: 'CSS Grid Fundamentals'
description: 'Inspired by Wes Bos'
faIcon: 'list'
---
<div class="grid-post">

### basic grid
```css
.container {
  display: grid;
  grid-template-columns: 100px auto 100px;
  grid-gap: 20px;
}
```
<div class="grid grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>

----

### grid-auto-flow
```css
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 400px 200px;
  grid-auto-flow: column; /* vs row - won't wrap */
  /*
  grid-auto-columns: 200px; sizes the implicitly created cols
*/
}

/* grid-auto-flow: dense; fills in empty spaces */
```
<div class="grid grid-container-2">
  <div class="item">Explicit</div>
  <div class="item">Explicit</div>
  <div class="item">Implicit</div>
  <div class="item">Implicit</div>
</div>

----

### fractional unit
```css
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 400px 1fr 2fr;
  grid-template-rows: 1fr 2fr;
}
```

<div class="grid grid-container-3">
  <div class="item">Explicit by 1fr</div>
  <div class="item">1fr by 1fr</div>
  <div class="item">2fr by 1fr</div>
  <div class="item">Explicit by 2fr</div>
  <div class="item">1fr by 2fr</div>
  <div class="item">2fr by 2fr</div>
</div>

-----

### repeat()
```css
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr 2fr);
}
```
<div class="grid grid-container-4">
  <div class="item">1fr</div>
  <div class="item">2fr</div>
  <div class="item">1fr</div>
  <div class="item">2fr</div>
  <div class="item">1fr</div>
  <div class="item">2fr</div>
</div>

-----

### span
```css
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
}
.item-3 {
  grid-row: span 2;
  grid-column: span 2; /* same as grid-column-start: span 2; grid-column-end: auto; */
}
```
<div class="grid grid-container-5">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item item-3">3</div>
  <div class="item">4</div>
</div>

-----

### placement
```css
.item-2 {
  grid-column: 2 / span 2;
}
.item-4 {
  grid-column-start: 3;
  grid-column-end: -1;
}
```
<div class="grid grid-container-5">
  <div class="item">1</div>
  <div class="item item-2">2</div>
  <div class="item">3</div>
  <div class="item item-4">4</div>
</div>

-----

### auto-fill
```css
.container {
  grid-template-columns: repeat(auto-fill, 150px); /* expands or shrinks when necessary */
}

.item-4 {
  grid-column: auto / -1;
}
```
<div class="grid grid-container-6">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item item-float">4</div>
</div>

------

### auto-fit
```css
.container {
  grid-template-columns: repeat(auto-fit, 150px); /* ends cols at end of elements */
}
```
<div class="grid grid-container-7">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>

------

### minmax()
```css
.container {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* responsive to screen */
}
```
<div class="grid grid-container-8">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>

-----

### areas
```css
.container {
  grid-template-columns: 100px 1fr 100px;
  grid-template-rows: repeat(3, 50px);
  grid-template-areas:
    "sidenav   main   main"
    "sidenav   main   main"
    "footer    footer footer"
  /* combines well with media queries */
}
.sidenav {
  grid-area: sidenav;
}
.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
}
```

<div class="grid grid-container-9">
  <div class="item sidenav">1</div>
  <div class="item main">2</div>
  <div class="item footer">3</div>
</div>

-----

### named lines
```css
.container {
  grid-template-columns: [content-start content-1] 75px [content-2] 1fr [content-3] 200px [content-end];
  grid-template-rows: [content-top] repeat(3, auto) [content-end];
}

.item-3 {
  border: 3px solid purple;
  grid-column: content-2;
  grid-row: content-top / content-end;
}
```

<div class="grid grid-container-10">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item item-named">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>

----

### reordering
- default order is 0
- change doesn't get picked up by screenreader
```css
.item-3 {
  order: -1;
}
```

<div class="grid grid-container-10">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item item-ordered">3</div>
</div>

-----

### alignment & centering

- **justify** = row axis (left to right)
- **align** = column axis (top to bottom)

**justify-items**
- justify-items defaults to 'stretch' otherwise fits content/explicit width of item
- also 'start', 'end'

```css
.container {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 75px);

  justify-items: center;
}
```

<div class="grid grid-container-11">
  <div class="itm">1</div>
  <div class="itm">2</div>
  <div class="itm">3</div>
  <div class="itm">4</div>
  <div class="itm">5</div>
  <div class="itm">6</div>
</div>

**align-items**
- vertical positioning
- stretch, center, start, end
```css
.container {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 75px);
  justify-items: end;
  align-items: end;
}
```
<div class="grid grid-container-12">
  <div class="itm">1</div>
  <div class="itm">2</div>
  <div class="itm">3</div>
  <div class="itm">4</div>
  <div class="itm">5</div>
  <div class="itm">6</div>
</div>

**place-items**
- limited browser support
- align, justify
```css
.container {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 75px);
  place-items: center center;
}
```
<div class="grid grid-container-13">
  <div class="itm">1</div>
  <div class="itm">2</div>
  <div class="itm">3</div>
  <div class="itm">4</div>
  <div class="itm">5</div>
  <div class="itm">6</div>
</div>

**justify-content and align-content**
- start, end, center, space-around, space-between
```css
.container {
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: repeat(2, auto);
  justify-content: space-around;
  /* align-content: space-between; works if there's a fixed height on the grid */
}
```
<div class="grid grid-container-14">
  <div class="itm">1</div>
  <div class="itm">2</div>
  <div class="itm">3</div>
  <div class="itm">4</div>
  <div class="itm">5</div>
</div>

**align-self and justify-self**
- start, end, center
```css
.container {
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: 75px;
  justify-content: space-around;
}
.item-2 {
  justify-self: center;
  align-self: center;
}
```
<div class="grid grid-container-14">
  <div class="itm">1</div>
  <div class="itm itm-2">2</div>
  <div class="itm">3</div>
  <div class="itm">4</div>
  <div class="itm">5</div>
</div>


</div>
