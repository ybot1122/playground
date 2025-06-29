# Examples that demonstrate optimizations on the critical render path:

The critical render path on a browser:

1. **HTML parsing**: The browser parses HTML and builds the DOM tree.
2. **CSS parsing**: CSS is parsed and the CSSOM tree is constructed.
3. **Layout**: The browser calculates the layout of each visible element.
4. **Painting**: Pixels are painted to the screen based on the layout and styles.
5. **Composite**: Elements are split into layers where possible, and work is offloaded to GPU

## 1. HTML Parsing:

Translate HTML into DOM Tree

## 2. CSS Parsing:

Translate CSS rules into CSSOM tree

Combine both to form Render Tree

## 3. Layout

Setup the geometry and position of each element. Properties like width/height, display, and margin/padding affect this.

## 4. Painting

Create paint records for the page i.e. "box at x,y. background red. text: hello world. box at x2,y2. background blue. text: foobar, font: Arial".

Rasterize each element and put them in layers.

## 5. Composite

Place the layers together and show them on the screen. Happens in a separate compositor thread. Can offload computations to GPU.

# Layout and Paint are Expensive

Layout and paint take the longest and block main thread. When possible, write CSS that can skip those steps and go to composite step. This is done with "transform" CSS rule or "opacity" CSS rule.
