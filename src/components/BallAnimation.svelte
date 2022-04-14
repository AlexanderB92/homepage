<script context="module">
export const sketch = function (p5, canvas) {
    let randX = 0;
    let randY = 0;

    p5.setup = () => {
        canvas = p5.createCanvas(720, 400);
    };

    p5.draw = () => {
        p5.background(64);
        p5.ellipse(randX, randY, 30, 30);
        randX = randX+1;
        randY = randY+1;

        if(randX == canvas.width) {
            randX = 0;
        }
        if(randY == canvas.height) {
            randY = 0;
        }
    };
};
</script>