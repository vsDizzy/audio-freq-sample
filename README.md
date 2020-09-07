# Sample audio frequency visualizer

[![levels](data/levels.png)](https://vsdizzy.github.io/audio-freq-sample)

[Demo](https://vsdizzy.github.io/audio-freq-sample)

Should work in `Chrome`, `Firefox`, `Edge`.

Will not work in `Internet Explorer` because it does not support `AudioContext`.

## The Idea

To compose bars programmatically:

- draw the gradient bar: ![bar](data/bar.png)
- draw the mask: ![mask](data/mask.png)
- scale up the bar and mask it using `svg` and pattern

The result:

![row](data/row.svg)

Then just copy corresponding pixels to the target canvas.
