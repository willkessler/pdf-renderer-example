# Fill PDF Form: Example code

### Building and running this example of using `pdf-fill-form`

First, get docker set up on your local rig. 

Then:

``` shell
docker build -f Dockerfile -t pdf-renderer .
docker run -v $(pwd):/tmp pdf-renderer
```

This will run `index.js` which opens up the IRS W9 form (`fw9.pdf`)
and dumps out the form field names, and then runs `write_w9.js` which
will write out the filled W9 form into the present working directory
for your viewing pleasure.

To see how the form fields are filled in just look at `write_w9.js` for examples.
And see the repo for pdf-fill-form here:https://github.com/tpisto/pdf-fill-form

